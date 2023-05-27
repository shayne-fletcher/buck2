# Buck2 OCaml wrapped libraries with masking

Suppose *`simply-wrap`* is a library of modules `A` and `B` packed into a root module `Simply_wrap`. This means within *`simply-wrap`* one writes `A.foo` and `B.t` but from outside *`simply-wrap`* `A` and `B` are unbound and instead one says `Simply_wrap.A.foo` and `Simply_wrap.B.t`.

All *`simply-wrap`*'s  modules are accessible from the root module `Simply_wrap`. The form of *`simply-wrap`*, as wrapped libraries go, is the simplest possible.

More generally, we desire not all of a wrapped library's modules be accessible by its root module. For reasons of encapsulation and information hiding we often require masking. We might also wish the root module itself export symbols not re-exported from other modules.

## Example

### *`wrap`*: a wrapped library with masking

*`wrap`* is an examplar wrapped library with masking. This section looks at *`wrap`* as an arrangement of modules. In the next section we'll see a Buck2 Starlark build definition for *`wrap`*. This example is very similar to [this (Buck2 repo) GitHub example](https://github.com/facebook/buck2/tree/0fb689a42398be169016fa23cd03bad42b2f4db1/examples/prelude/ocaml/wrap/with-masking).

`Wrap` has this signature.
```ocaml
  val print_hello: unit -> unit
  module B: sig val print_hello: unit -> unit end
```
`Wrap` is given the following implementation.
```ocaml
  let print_hello () = A.print_hello ()

  module B = struct
    include B
   end
```

`A` is implemented as
```ocaml
  let print_hello () = B.print_hello ()
```
which like `Wrap` uses `B`.

In `B`, `print_hello` is provided in terms of the standard module `Printf`.
```ocaml
  let print_hello() = Printf.printf "Hello world!\n"
```

In summary, `Wrap`, `A` and `B` are *`wrap`* library modules [^1]. `Wrap` does not admit access to `A` but does provide access to `B`.

[^1]: With a dependency structure between them!

### Buck2 build scheme for *`wrap`*

This section digs into a Buck2 build procedure for *`wrap`*.

Start by renaming `a.mli`, `a.ml`, `b.mli` and `b.ml` to `wrap__A.mli`, `wrap__A.ml`, `wrap__B.mli` and `wrap__B.ml` respectively. Next write the following contents to each of `wrap__.mli` and `wrap__.ml`.
```ocaml
  module A = Wrap__A
  module B = Wrap__B
  module Wrap__ = struct end
```

The build plan is:

  - Build "module map" *`wrap__`* (uses '`wrap__.ml*`'),
  - Use it to enable implementation *`wrap__imp`* (uses '`wrap__A.ml*`', '`wrap__B.ml*`'), then,
  - Compose *`wrap__imp`* with interface `Wrap` into *`wrap`* (uses '`wrap.ml*`').

Here are the details.

File `wrap__.mli` will be referenced from both `:wrap__` and `:wrap__imp` so begin by exporting it.
```python
  export_file(
      name = "wrap__.mli",
      visibility = [
          ":wrap__",
          ":wrap__imp"
      ],
  )
```
Use `:wrap__.mli` in the build rule for *`wrap__`*.
```python
  ocaml_library(
      name = "wrap__",
      compiler_flags = [ "-no-alias-deps" ],
      srcs = [
          ":wrap__.mli",
          "wrap__.ml",
      ],
      visibility = [ ":wrap__imp" ],
  )
```
Both `:wrap__.mli` and `:wrap__` are then used in *`wrap__imp`*.
```python
  ocaml_library(
      name = "wrap__imp",
      compiler_flags = [
          "-no-alias-deps",
          "-open", "Wrap__"
      ],
      ocamldep_flags = [
          "-open", "Wrap__",
          "-map", "$(location :wrap__.mli)"
      ],
      srcs = glob( [ "wrap__*.ml*" ], exclude = [ "wrap__.ml*" ] ),
      deps = [ ":wrap__" ],
      visibility = [ ":wrap" ],
  )
```
Finally, assemble *`wrap__imp`* with `wrap.mli` and `wrap.ml` into *`wrap`* and done.
```python
  ocaml_library(
      name = "wrap",
      compiler_flags = [
         "-no-alias-deps",
         "-open", "Wrap__",
      ],
      srcs = glob( [ "wrap.ml*" ] ),
      deps = [ ":wrap__imp" ],
      visibility = [ "PUBLIC" ],
  )
```

## Testing *`wrap`*

`test_Wrap.ml` is some code showing how one can and can't use *`wrap`*.
```ocaml
  let _: unit = Wrap.print_hello ()
  let _: unit = Wrap.B.print_hello ()
  (* let _: unit = Wrap.A.print_hello ()*) (* Error: Unbound module Wrap.A *)
  (* let _: unit = B.print_hello ()*) (* Error: Unbound module B *)
```

This rule is for an executable `test-Wrap.opt` built of *`wrap`* and `test_Wrap.ml`.
```python
  ocaml_binary(
      name = "test-Wrap",
      srcs = [ "test_Wrap.ml" ] ,
      deps = [ ":wrap" ],
      visibility = [ 'PUBLIC' ],
  )
```

## References:

- Dune [`library`](https://dune.readthedocs.io/en/stable/dune-files.html#library)
- OCaml Manual [Type Level Modue Aliases](https://v2.ocaml.org/manual/modulealias.html)

 🦌
