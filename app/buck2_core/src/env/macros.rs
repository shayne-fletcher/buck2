/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

#![doc(hidden)]

use std::str::FromStr;

pub use linkme;

pub fn convert_from_str<T>(v: &str) -> anyhow::Result<T>
where
    T: FromStr,
    anyhow::Error: From<<T as FromStr>::Err>,
{
    Ok(T::from_str(v)?)
}

/// This macro is used to register environment variables that are used by Buck2.
///
/// The first argument to the macro must always be a string literal with the name of the environment
/// variable.
///
/// Additionally, you can specify the following, comma separated:
///
///  - `type=<type>` - the Rust type that the environment variable should be converted to, using
///    `FromStr::from_str`. Defaults to `&'static str` if not specified.
///  - `default=<value>` - an expression for the default value to use if the environment variable is
///    not set.
///  - `converter=<expr>` - a function to use as an alternative to the `FromStr::from_str`
///    conversion. Must have signature `fn(&str) -> Result<Ty, E>`
///
/// The macro expands to an expression of type `anyhow::Result<Type>` if a default is set, and
/// `anyhow::Result<Option<Type>` otherwise.
pub macro buck2_env {
    ($var:literal) => {{
        $crate::env::macros::expand!(
            var=$var,
            parser=$crate::env::macros::convert_from_str,
            stored_type=std::string::String,
            processor=|x| x.map(|x| x.as_str()),
            output_type=std::option::Option<&'static str>,
            default_repr=std::option::Option::None,
        )
    }},
    ($var:literal, bool) => {{
        let v: anyhow::Result<bool> = buck2_env!($var, type=bool, default=false);
        v
    }},
    ($var:literal, type=$ty:ty) => {{
        $crate::env::macros::expand!(
            var=$var,
            parser=$crate::env::macros::convert_from_str,
            stored_type=$ty,
            processor=|x| x.copied(),
            output_type=std::option::Option<$ty>,
            default_repr=std::option::Option::None,
        )
    }},
    ($var:literal, type=$ty:ty, default=$default:expr) => {{
        $crate::env::macros::expand!(
            var=$var,
            parser=$crate::env::macros::convert_from_str,
            stored_type=$ty,
            processor=|x| x.copied().unwrap_or_else(|| $default),
            output_type=$ty,
            default_repr=std::option::Option::Some(stringify!($default)),
        )
    }},
    ($var:literal, type=$ty:ty, converter=$converter:expr) => {{
        $crate::env::macros::expand!(
            var=$var,
            parser=$converter,
            stored_type=$ty,
            processor=|x| x,
            output_type=std::option::Option<&$ty>,
            default_repr=std::option::Option::None,
        )
    }},
}

/// `parser` is `&str -> anyhow::Result<$stored_type>`, `processor` is `Option<& $stored_type> -> $output_type`
pub macro expand(
    var=$var:literal,
    parser=$parser:expr,
    stored_type=$stored_ty:ty,
    processor=$processor:expr,
    output_type=$output_ty:ty,
    default_repr=$default_repr:expr,
) {{
    $crate::env::macros::register!($var, ty = $stored_ty, default = $default_repr);
    static ENV_HELPER: $crate::env::helper::EnvHelper<$stored_ty> =
        $crate::env::helper::EnvHelper::with_converter_from_macro($var, $parser);
    let v: anyhow::Result<$output_ty> = ENV_HELPER.get().map($processor);
    v
}}

pub macro register($var:literal, ty=$ty:ty, default=$default:expr) {{
    use $crate::env::macros::linkme;
    #[linkme::distributed_slice($crate::env::registry::ENV_INFO)]
    #[linkme(crate = $crate::env::macros::linkme)]
    static ENV_INFO: $crate::env::registry::EnvInfoEntry = $crate::env::registry::EnvInfoEntry {
        name: $var,
        ty: stringify!($ty),
        default: $default,
    };
}}
