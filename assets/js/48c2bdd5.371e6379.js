"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6537],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var l=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},a.apply(this,arguments)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=l.createContext({}),s=function(e){return function(r){var t=c(r.components);return l.createElement(e,a({},r,{components:t}))}},c=function(e){var r=l.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return l.createElement(d.Provider,{value:r},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},v=l.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),u=n,b=s["".concat(o,".").concat(u)]||s[u]||m[u]||a;return t?l.createElement(b,p(p({ref:r},d),{},{components:t})):l.createElement(b,p({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=v;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[b]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<a;d++)o[d]=t[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}v.displayName="MDXCreateElement"},21009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var l=t(87462),n=(t(67294),t(3905));const a={id:"providers_label"},o="providers_label type",p={unversionedId:"api/bxl/providers_label",id:"api/bxl/providers_label",title:"providers_label type",description:"providers\\_label.cell",source:"@site/../docs/api/bxl/providers_label.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/providers_label",permalink:"/docs/api/bxl/providers_label",draft:!1,tags:[],version:"current",frontMatter:{id:"providers_label"},sidebar:"manualSidebar",previous:{title:"provider_collection type",permalink:"/docs/api/bxl/provider_collection"},next:{title:"target_label type",permalink:"/docs/api/bxl/target_label"}},i={},d=[{value:"providers_label.cell",id:"providers_labelcell",level:2},{value:"providers_label.name",id:"providers_labelname",level:2},{value:"providers_label.path",id:"providers_labelpath",level:2},{value:"providers_label.raw_target",id:"providers_labelraw_target",level:2},{value:"providers_label.sub_target",id:"providers_labelsub_target",level:2}],s={toc:d};function c(e){let{components:r,...t}=e;return(0,n.mdx)("wrapper",(0,l.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"providers_label-type"},(0,n.mdx)("inlineCode",{parentName:"h1"},"providers_label")," type"),(0,n.mdx)("h2",{id:"providers_labelcell"},"providers","_","label.cell"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"providers_label.cell: str\n")),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"providers_labelname"},"providers","_","label.name"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"providers_label.name: str\n")),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"providers_labelpath"},"providers","_","label.path"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"providers_label.path: typing.Any\n")),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"providers_labelraw_target"},"providers","_","label.raw","_","target"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"def providers_label.raw_target() -> target_label\n")),(0,n.mdx)("p",null,"Returns the unconfigured underlying target label."),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"providers_labelsub_target"},"providers","_","label.sub","_","target"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"providers_label.sub_target: None | list[str]\n")))}c.isMDXComponent=!0}}]);