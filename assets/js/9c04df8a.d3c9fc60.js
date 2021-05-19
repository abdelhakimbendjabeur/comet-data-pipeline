(self.webpackChunkcomet_docs=self.webpackChunkcomet_docs||[]).push([[6744],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3292:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={sidebar_position:140,title:"kafkaload"},o={unversionedId:"cli/kafkaload",id:"cli/kafkaload",isDocsHomePage:!1,title:"kafkaload",description:"Synopsis",source:"@site/docs/cli/kafkaload.md",sourceDirName:"cli",slug:"/cli/kafkaload",permalink:"/comet-data-pipeline/docs/cli/kafkaload",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/cli/kafkaload.md",version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140,title:"kafkaload"},sidebar:"cometSidebar",previous:{title:"watch",permalink:"/comet-data-pipeline/docs/cli/watch"},next:{title:"yml2xls",permalink:"/comet-data-pipeline/docs/cli/yml2xls"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],d={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"comet kafkaload ","[options]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Cardinality"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--topic:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Topic Name declared in reference.conf file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--format:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Read/Write format eq : parquet, json, csv ... Default to parquet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--path:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Source file for load and target file for store")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--mode:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"When offload is true, describes who data should be stored on disk. Ignored if offload is false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--write-options:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Options to pass to Spark Writer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--transform:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Any transformation to apply to message before loading / offloading it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--offload:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, kafka topic is offloaded to path, else data contained in path is stored in the kafka topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--stream:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, kafka topic is offloaded to path, else data contained in path is stored in the kafka topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-format:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, kafka topic is offloaded to path, else data contained in path is stored in the kafka topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-output-mode:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, kafka topic is offloaded to path, else data contained in path is stored in the kafka topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-trigger:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Once / Continuous / ProcessingTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-trigger-option:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"10 seconds for example. see ",(0,l.kt)("a",{parentName:"td",href:"https://spark.apache.org/docs/latest/api/java/org/apache/spark/sql/streaming/Trigger.html#ProcessingTime-java.lang.String-"},"https://spark.apache.org/docs/latest/api/java/org/apache/spark/sql/streaming/Trigger.html#ProcessingTime-java.lang.String-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-to-table:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Table name to sink to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--streaming-partition-by:",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"List of columns to use for partitioning")))))}m.isMDXComponent=!0}}]);