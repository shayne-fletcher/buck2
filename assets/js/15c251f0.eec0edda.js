"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1621],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"uquery",title:"uquery"},s=void 0,i={unversionedId:"users/commands/uquery",id:"users/commands/uquery",title:"uquery",description:"These are the flags/commands under buck2 uquery and their --help output:",source:"@site/../docs/users/commands/uquery.generated.md",sourceDirName:"users/commands",slug:"/users/commands/uquery",permalink:"/docs/users/commands/uquery",draft:!1,tags:[],version:"current",frontMatter:{id:"uquery",title:"uquery"},sidebar:"manualSidebar",previous:{title:"test",permalink:"/docs/users/commands/test"},next:{title:"utargets",permalink:"/docs/users/commands/utargets"}},u={},c=[{value:"buck uquery",id:"buck-uquery",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"These are the flags/commands under ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 uquery")," and their ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,a.mdx)("h2",{id:"buck-uquery"},"buck uquery"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'Perform queries on the unconfigured target graph\n\nThe unconfigured target graph consists of the targets as they are\ndefined in the build files. In this graph, each target appears\nexactly once and `select()`s are in the unresolved form. For large\nqueries, the unconfigured graph may be much smaller than the\nconfigured graph and queries can be much more efficiently performed\nthere.\n\nWhen querying the unconfigured graph, dependencies appearing in all\nbranches of `select()` dictionaries will be treated as dependencies.\n\nRun `buck2 docs uquery` or\nhttps://buck2.build/docs/users/query/uquery/\nfor more documentation about the functions available in uquery\nexpressions.\n\nExamples:\n\nPrint all the attributes of a target\n\n`buck2 uquery //java/com/example/app:amazing --output-all-attributes\n\nList the deps of a target (special characters in a target will require quotes):\n`buck2 uquery \'deps("//java/com/example/app:amazing+more")\'`\n\nselect() encoding:\n\nWhen printed, values with `select()`s use a special json encoding.\n\n`1 + select({"//:a": 1, "DEFAULT": 2})` will be encoded as:\n\n`{"__type": "concat", "items": [1, {"__type": "selector", "entries": {"//:a": 1, "DEFAULT": 2}}]}`\n\nUsage: buck2-release uquery [OPTIONS] <QUERY> [QUERY_ARGS]...\n\nArguments:\n  <QUERY>\n          the query to evaluate\n\n  [QUERY_ARGS]...\n          list of literals for a multi-query (one containing `%s` or `%Ss`)\n\nOptions:\n  -A, --output-all-attributes\n          Output all attributes, equivalent of --output-attribute \'\'.\n          \n          Avoid using this flag in automation because it may be expensive to produce certain\n          attributes, and because it makes harder to track which special attributes are used.\n\n  -B, --output-basic-attributes\n          Output basic attributes, namely those the user can supply, plus rule type and package name\n\n  -a, --output-attribute <ATTRIBUTE>\n          Regular expressions to match attributes. Regular expressions are used in "search" mode, so\n          for example empty string matches all attributes including special attributes.\n          \n          When using in automation, please specify the regular expression to match the attribute\n          precisely, for example `--output-attribute \'^headers$\'` to make it easier to track which\n          special attributes are used.\n\n      --output-attributes <ATTRIBUTE>...\n          Deprecated: Use `--output-attribute` instead.\n          \n          List of space-separated attributes to output, --output-attributes attr1 attr2.\n\n      --json\n          Output in JSON format\n\n      --dot\n          Output in Graphviz Dot format\n\n      --dot-compact\n          Output in a more compact format than Graphviz Dot\n\n      --output-format <dot|dot_compact|json|starlark>\n          Output format (default: list). \n          \n                     dot -  dot graph format. \n          \n                     dot_compact - compact alternative to dot format. \n          \n                     json - JSON format. \n          \n                     starlark - targets are printed like starlark code that would produce them.\n                   \n          \n          [possible values: dot, json, dot_compact, starlark]\n\n  -h, --help\n          Print help (see a summary with \'-h\')\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there\'s a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press \'h\' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          "-v=1,stderr"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2\'s logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n')))}p.isMDXComponent=!0}}]);