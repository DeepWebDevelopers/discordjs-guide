(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{141:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return o?n.a.createElement(f,l(l({ref:t},s),{},{components:o})):n.a.createElement(f,l({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},212:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/devportal_main-9356fe927abe957f42809d86e829af61.png"},213:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/devportal_nameYourBot-04f7e99c955201c1e942068e742b4496.png"},214:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/devportal_addBot-0a8fa3aaf260f4a38e8bc46e61fb3637.png"},215:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/devportal_token-95fe000f3742210630352bd431e51069.png"},216:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/devportal_oauth2-fa10e3d30d83dd920d596cc7362caf1f.png"},71:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(8),i=(o(0),o(141)),a={id:"doc-buildingfirstbot-java",title:"Discord Development Portal",sidebar_label:"Obtaining a Bot Token"},l={unversionedId:"java/build_your_first_bot/doc-buildingfirstbot-java",id:"java/build_your_first_bot/doc-buildingfirstbot-java",isDocsHomePage:!1,title:"Discord Development Portal",description:"---",source:"@site/docs/java/build_your_first_bot/byfb_1.md",slug:"/java/build_your_first_bot/doc-buildingfirstbot-java",permalink:"/discord-bot-guide/fr/docs/java/build_your_first_bot/doc-buildingfirstbot-java",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs/java/build_your_first_bot/byfb_1.md",version:"current",lastUpdatedBy:"Jamal L",lastUpdatedAt:1615131645,sidebar_label:"Obtaining a Bot Token",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/discord-bot-guide/fr/docs/java/doc-prerequisites-java"},next:{title:"Creating the Project",permalink:"/discord-bot-guide/fr/docs/java/build_your_first_bot/doc-settingupide-java"}},c=[{value:"Before we get started coding...",id:"before-we-get-started-coding",children:[]},{value:"Getting an invite link for our bot",id:"getting-an-invite-link-for-our-bot",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"before-we-get-started-coding"},"Before we get started coding..."),Object(i.b)("p",null,"Before we start coding, we must first create a new bot application on the ",Object(i.b)("a",{parentName:"p",href:"https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications"},"Discord Development Portal"),". If you already have a token, you can skip this section and continue with the tutorial."),Object(i.b)("p",null,"Once you log in, you will see a screen that looks like this:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Discord Development Portal",src:o(212).default,title:"Discord Development Portal"})),Object(i.b)("p",null,"Click on ",Object(i.b)("inlineCode",{parentName:"p"},"New Application")," to create a new bot application."),Object(i.b)("p",null,"This will open up a new window that will prompt you to enter a name for your bot. For the purpose of the upcoming tutorial, I will name my bot ",Object(i.b)("em",{parentName:"p"},"Ping Pong Bot"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Discord Development Portal",src:o(213).default,title:"Discord Development Portal"})),Object(i.b)("p",null,"Once you have created a bot application, we will want to navigate to the left sidebar and click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Bot")," tab."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Discord Development Portal",src:o(214).default,title:"Discord Development Portal"})),Object(i.b)("p",null,"Now click on ",Object(i.b)("inlineCode",{parentName:"p"},"Add Bot"),". This will prompt you with a confirmation window, click ",Object(i.b)("inlineCode",{parentName:"p"},"Yes, do it!"),"."),Object(i.b)("p",null,"We are now able to copy our bots token and start coding!"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Discord Development Portal",src:o(215).default,title:"Discord Development Portal"})),Object(i.b)("h2",{id:"getting-an-invite-link-for-our-bot"},"Getting an invite link for our bot"),Object(i.b)("p",null,"Now that we have created our bot on the ",Object(i.b)("a",{parentName:"p",href:"https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications"},"Discord Development Portal"),", we can get an invite link for our bot. This will allow us to invite our bot to Discord Servers."),Object(i.b)("p",null,"Navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"OAuth2")," tab on the Discord Development Portal. This page allows us to set up permissions for our bot. To make things simple, we will just give our bot the ",Object(i.b)("inlineCode",{parentName:"p"},"Administrator")," permission."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Discord Development Portal",src:o(216).default,title:"Discord Development Portal"})),Object(i.b)("p",null,"Now we can copy the bots invite link and invite it to our Discord Server!"))}p.isMDXComponent=!0}}]);