"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8237],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),d=function(e){return function(n){var r=m(n.components);return t.createElement(e,i({},n,{components:r}))}},m=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,s=d["".concat(a,".").concat(u)]||d[u]||f[u]||i;return r?t.createElement(s,l(l({ref:n},p),{},{components:r})):t.createElement(s,l({ref:n},p))}));function x(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},64767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const i={},a="Return error in ProviderCollection[] on undeclared provider",l={unversionedId:"rfcs/implemented/provider-collection-at",id:"rfcs/implemented/provider-collection-at",title:"Return error in ProviderCollection[] on undeclared provider",description:"Currently, ctx.attrs.foo[UnknownInfo] returns None if foo is a provider",source:"@site/../docs/rfcs/implemented/provider-collection-at.md",sourceDirName:"rfcs/implemented",slug:"/rfcs/implemented/provider-collection-at",permalink:"/docs/rfcs/implemented/provider-collection-at",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Why",id:"why",level:2},{value:"Bazel",id:"bazel",level:2}],d={toc:p};function m(e){let{components:n,...r}=e;return(0,o.mdx)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"return-error-in-providercollection-on-undeclared-provider"},"Return error in ",(0,o.mdx)("inlineCode",{parentName:"h1"},"ProviderCollection[]")," on undeclared provider"),(0,o.mdx)("p",null,"Currently, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ctx.attrs.foo[UnknownInfo]")," returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"None")," if ",(0,o.mdx)("inlineCode",{parentName:"p"},"foo")," is a provider\ncollection."),(0,o.mdx)("p",null,"This RFC proposes these changes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ctx.attrs.foo[UnknownInfo]")," is an error"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"UnknownInfo in ctx.attrs.foo")," is ",(0,o.mdx)("inlineCode",{parentName:"li"},"False")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ctx.attrs.foo.get(UnknownInfo)")," returns ",(0,o.mdx)("inlineCode",{parentName:"li"},"None"))),(0,o.mdx)("h2",{id:"why"},"Why"),(0,o.mdx)("p",null,"Better diagnostics when accessing unknown provider. E. g. when writing:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"ctx.attrs.foo[UnknownInfo].bar\n")),(0,o.mdx)("p",null,"Currently, the error is:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"Object of type `NoneType` has no attribute `bar`\n")),(0,o.mdx)("p",null,"Instead, the error will be something like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"provider collection does not contain `UnknownInfo`,\n    defined providers are `FooInfo`, `BarInfo`.\n")),(0,o.mdx)("h2",{id:"bazel"},"Bazel"),(0,o.mdx)("p",null,"In bazel, ",(0,o.mdx)("inlineCode",{parentName:"p"},"[]")," on unknown provider is an error, like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"Error: <target //optional_provider:n2> (rule '_sum')\n    doesn't contain declared provider 'UnknownInfo'\n")))}m.isMDXComponent=!0}}]);