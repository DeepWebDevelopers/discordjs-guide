(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(147)),i={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ",author:"ThatGuyJamal"},u={unversionedId:"home/faq",id:"home/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Here are a few Frequently Asked Questions for the Discord bot Guide!",source:"@site/docs/home/faq.md",slug:"/home/faq",permalink:"/discord-bot-guide/fr/docs/home/faq",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs/home/faq.md",version:"current",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Become a Contributor",permalink:"/discord-bot-guide/fr/docs/home/doc2"},next:{title:"Want something added to the docs?",permalink:"/discord-bot-guide/fr/docs/home/doc3"}},c=[{value:"Best Language to start with?",id:"best-language-to-start-with",children:[{value:"My picks",id:"my-picks",children:[]},{value:"Summary",id:"summary",children:[]}]},{value:"Why is X not on the docs",id:"why-is-x-not-on-the-docs",children:[{value:"Support",id:"support",children:[]},{value:"Requesting a language",id:"requesting-a-language",children:[]}]}],s={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here are a few Frequently Asked Questions for the Discord bot Guide!"),Object(o.b)("h2",{id:"best-language-to-start-with"},"Best Language to start with?"),Object(o.b)("p",null,"This comes up so many times for new programmers in general. Discord is no exception. When I started I was unsure what language to use because discord supports ",Object(o.b)("inlineCode",{parentName:"p"},"python, javascript, java, rust, ruby, golang")," and more."),Object(o.b)("p",null,"A simple answer would be, pick the top 3 languages your best at, then try building a simple bot in all the languages. Whichever you enjoy and find simplest is how you choose."),Object(o.b)("p",null,"You must also keep in mind how much support the languages get. Keep though you can make a discord bot in ",Object(o.b)("em",{parentName:"p"},"cpp")," many bots are not made in it because of the lack of documentation and support for the language."),Object(o.b)("h3",{id:"my-picks"},"My picks"),Object(o.b)("h4",null,"JavaScript if..."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You know front end development (HTML, CSS, javascript,)"),Object(o.b)("li",{parentName:"ul"},"You know Nodejs"),Object(o.b)("li",{parentName:"ul"},"like javascript"),Object(o.b)("li",{parentName:"ul"},"You don't know any programming language")),Object(o.b)("p",null,"I recommend going with javascript."),Object(o.b)("p",null,"There are ",Object(o.b)("em",{parentName:"p"},"a lot")," of helpful ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/results?search_query=Discord+js+tutoral"},"tutorals")," on how to make simple and advanced bots."),Object(o.b)("h4",null,"Other if..."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't like or want to work with javascript"),Object(o.b)("li",{parentName:"ul"},"You already learning a language other than javascript"),Object(o.b)("li",{parentName:"ul"},"You already a programming master")),Object(o.b)("p",null,"I recommend building a bot in another language."),Object(o.b)("p",null,"There are many big bots built-in ",Object(o.b)("a",{parentName:"p",href:"/docs/java/doc-prerequisites-java"},Object(o.b)("strong",{parentName:"a"},"Java"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/py/s1/doc-prerequisites-python"},Object(o.b)("strong",{parentName:"a"},"Python")),". which we have two sections dedicated to beginners. It depends on what language you know and how well."),Object(o.b)("h3",{id:"summary"},"Summary"),Object(o.b)("p",null,"Noobs - Javascript or Python"),Object(o.b)("p",null,"Pro's - Any will work for you, Luck!"),Object(o.b)("h2",{id:"why-is-x-not-on-the-docs"},"Why is X not on the docs"),Object(o.b)("p",null,"Our goal is to write support for multiple different languages all on one website. Discord Bot Guide is community-driven and powered by jsx."),Object(o.b)("p",null,"With that said we are a small team of people, so having every framework on the website is challenging. We as teachers have to make sure we have an in-depth understanding of the concepts before writing about them."),Object(o.b)("h3",{id:"support"},"Support"),Object(o.b)("p",null,"If you wish to support us with writing the docs please read our ",Object(o.b)("a",{parentName:"p",href:"/docs/home/doc2"},Object(o.b)("strong",{parentName:"a"},"Contribute"))," page for applying."),Object(o.b)("h3",{id:"requesting-a-language"},"Requesting a language"),Object(o.b)("p",null,"If you want to request a language for the documentation then join our Discord ",Object(o.b)("a",{parentName:"p",href:"https://discord.com/invite/NbqBQbaejS"},"here"),"."))}l.isMDXComponent=!0}}]);