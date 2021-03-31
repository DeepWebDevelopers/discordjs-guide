(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return w})),n.d(t,"toc",(function(){return v})),n.d(t,"default",(function(){return f}));var a=n(3),o=n(7),i=n(0),r=n.n(i),s=n(126),l=n(140),c=n(127),d=n(97),b=n.n(d);const p=37,u=39;var m=function(e){const{lazy:t,block:n,defaultValue:a,values:o,groupId:s,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(l.a)(),[j,w]=Object(i.useState)(a),v=i.Children.toArray(e.children);if(null!=s){const e=m[s];null!=e&&e!==j&&o.some((t=>t.value===e))&&w(e)}const O=e=>{w(e),null!=s&&h(s,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},o.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(i.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))};var h=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)},j={id:"doc-dj-node",title:"First Steps",sidebar_label:"Installing node js & Discord",author:"ThatGuyJamal"},w={unversionedId:"js/s1/doc-dj-node",id:"js/s1/doc-dj-node",isDocsHomePage:!1,title:"First Steps",description:"---",source:"@site/docs/js/s1/node-dj.md",slug:"/js/s1/doc-dj-node",permalink:"/discord-bot-guide/docs/js/s1/doc-dj-node",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs/js/s1/node-dj.md",version:"current",lastUpdatedBy:"Jamal L",lastUpdatedAt:1615131645,sidebar_label:"Installing node js & Discord",sidebar:"docs",previous:{title:"Read Me",permalink:"/discord-bot-guide/docs/js/s1/doc-byb-js"},next:{title:"Getting Bot Token",permalink:"/discord-bot-guide/docs/js/s1/installings/doc-bot"}},v=[{value:"What is node js? | Windows nav",id:"what-is-node-js--windows-nav",children:[{value:"Installing Discordjs",id:"installing-discordjs",children:[]},{value:"Final steps",id:"final-steps",children:[]},{value:"Installing a linter",id:"installing-a-linter",children:[]}]},{value:"What is node js? | Mac nav",id:"what-is-node-js--mac-nav",children:[{value:"Installing Discordjs",id:"installing-discordjs-1",children:[]},{value:"Final steps",id:"final-steps-1",children:[]}]},{value:"Installing a linter",id:"installing-a-linter-1",children:[{value:"What is nodejs? | Linux nav",id:"what-is-nodejs--linux-nav",children:[]},{value:"Installing Discordjs",id:"installing-discordjs-2",children:[]},{value:"Final steps",id:"final-steps-2",children:[]},{value:"Installing a linter",id:"installing-a-linter-2",children:[]}]}],O={toc:v};function f(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},O,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("hr",null),Object(s.b)(m,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(s.b)(h,{value:"win",mdxType:"TabItem"},Object(s.b)("h1",{id:"installing-node--windows"},"Installing Node | Windows"),Object(s.b)("p",null,"Before we can jump into the fun parts we must install the necessary technologies."),Object(s.b)("h2",{id:"what-is-node-js--windows-nav"},"What is node js? | Windows nav"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux."),Object(s.b)("p",{parentName:"blockquote"},"Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("a",{parentName:"em",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"Quote Source"))),Object(s.b)("p",null,"You can learn more about ",Object(s.b)("a",{parentName:"p",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"nodejs here")," or on the official site ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"),"."),Object(s.b)("p",null,"First we will install ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"nodejs"),". If your using windows to develop then this is very simple. Just go to the website and run the ",Object(s.b)("inlineCode",{parentName:"p"},"exe")," file."),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"You need to have the lasted version of Nodejs installed. ",Object(s.b)("em",{parentName:"p"},"Anything below 12.0 will not work.")," Discord.js v12 requires Node 12.0 or higher to function properly."))),Object(s.b)("p",null,"To check if you have node installed on your computer run"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"node -v\n")),Object(s.b)("p",null,"in your terminal. We also recommend downloading this ",Object(s.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"},"windows terminal")," as it is better than normal ",Object(s.b)("inlineCode",{parentName:"p"},"cmd")," for most cases."),Object(s.b)("p",null,"If everything went well then you should see:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"node version check picture",src:n(157).default})),Object(s.b)("h3",{id:"installing-discordjs"},"Installing Discordjs"),Object(s.b)("p",null,"Now that you have Node install we can install Discord Js. To start this project we must create a folder to store all our files. This"),Object(s.b)("p",null,"Navigate to a place on your computer where you want to store and have easy access to the bot. Now create a new folder like normal. ",Object(s.b)("em",{parentName:"p"},"(Or pro users can do ",Object(s.b)("inlineCode",{parentName:"em"},"mkdir project-name"),")"),". Next, whatever name you inputted for the ",Object(s.b)("em",{parentName:"p"},"project name")," you will run the command: ",Object(s.b)("inlineCode",{parentName:"p"},"cd project-name"),". For this tutorial, we will be using ",Object(s.b)("inlineCode",{parentName:"p"},"discord-bot")," as our project name."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Mkdir exmaple image",src:n(158).default})),Object(s.b)("h3",{id:"final-steps"},"Final steps"),Object(s.b)("p",null,"Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial, I will be using ",Object(s.b)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Vscode"),". It's a personal favorite and was created by Microsoft."),Object(s.b)("p",null,"To launch vs-code easily run ",Object(s.b)("inlineCode",{parentName:"p"},"code .")," in your terminal. Next, we will set-up our development environment. Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init")," in the terminal. This command will ask you a few questions about your project. ",Object(s.b)("em",{parentName:"p"},"If your not sure about something just hit enter to skip it.")),Object(s.b)("p",null,":::"),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Want to get started without being asked questions? Simply run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init -y"),". This command will skip all the questions. You can edit them later in the package.json file."))),Object(s.b)("p",null,"Now we are ready to install Discord.js. In the terminal run, ",Object(s.b)("inlineCode",{parentName:"p"},"npm install discord.js"),"."),Object(s.b)("p",null,"If everything went well you should something similar to this. You"),Object(s.b)("p",null,Object(s.b)("img",{alt:"discord install folder example",src:n(159).default})),Object(s.b)("p",null,"And now we're done! Soon we will be righting our first command."),Object(s.b)("h3",{id:"installing-a-linter"},"Installing a linter"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.")),Object(s.b)("p",null,"While it's not required, depending on how you set up your project it can be very helpful. Read more about ",Object(s.b)("a",{parentName:"p",href:"https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it"},"Linters")," here."),Object(s.b)("p",null,"Linter docs page: ",Object(s.b)("a",{parentName:"p",href:"/docs/js/s1/installings/doc-linter"},"click me"))),Object(s.b)(h,{value:"mac",mdxType:"TabItem"},Object(s.b)("h1",{id:"installing-node--mac-os"},"Installing Node | Mac OS"),Object(s.b)("p",null,"Before we can jump into the fun parts we must install the necessary technologies."),Object(s.b)("h2",{id:"what-is-node-js--mac-nav"},"What is node js? | Mac nav"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux."),Object(s.b)("p",{parentName:"blockquote"},"Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("a",{parentName:"em",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"Quote Source"))),Object(s.b)("p",null,"You can learn more about ",Object(s.b)("a",{parentName:"p",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"nodejs here")," or on the official site ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"),"."),Object(s.b)("p",null,"If you are developing on Mac you have a few options to install node. You can go to ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"nodejs.com")," or you can use a package manager such as ",Object(s.b)("a",{parentName:"p",href:"https://brew.sh/"},"HomeBrew"),"."),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"You need to have the lasted version of Nodejs installed. ",Object(s.b)("em",{parentName:"p"},"Anything below 12.0 will not work.")," Discord.js v12 requires Node 12.0 or higher to function properly."))),Object(s.b)("p",null,"To check if you have node installed on your computer run"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"node -v\n")),Object(s.b)("p",null,"in your terminal. We also recommend downloading this ",Object(s.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"},"windows terminal")," as it is better than normal ",Object(s.b)("inlineCode",{parentName:"p"},"cmd")," for most cases."),Object(s.b)("p",null,"If everything went well then you should see:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"node version check picture",src:n(157).default})),Object(s.b)("h3",{id:"installing-discordjs-1"},"Installing Discordjs"),Object(s.b)("p",null,"Now that you have Node install we can install Discord Js. To start this project we must create a folder to store all our files. This"),Object(s.b)("p",null,"Navigate to a place on your computer where you want to store and have easy access to the bot. Now create a new folder like normal. ",Object(s.b)("em",{parentName:"p"},"(Or pro users can do ",Object(s.b)("inlineCode",{parentName:"em"},"mkdir project-name"),")"),". Next, whatever name you inputted for the ",Object(s.b)("em",{parentName:"p"},"project name")," you will run the command: ",Object(s.b)("inlineCode",{parentName:"p"},"cd project-name"),". For this tutorial, we will be using ",Object(s.b)("inlineCode",{parentName:"p"},"discord-bot")," as our project name."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Mkdir exmaple image",src:n(158).default})),Object(s.b)("h3",{id:"final-steps-1"},"Final steps"),Object(s.b)("p",null,"Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial, I will be using ",Object(s.b)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Vscode"),". It's a personal favorite and was created by Microsoft."),Object(s.b)("p",null,"To launch vs-code easily run ",Object(s.b)("inlineCode",{parentName:"p"},"code .")," in your terminal. Next, we will set-up our development environment. Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init")," in the terminal. This command will ask you a few questions about your project. ",Object(s.b)("em",{parentName:"p"},"If your not sure about something just hit enter to skip it.")),Object(s.b)("p",null,":::"),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Want to get started without being asked questions? Simply run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init -y"),". This command will skip all the questions. You can edit them later in the package.json file."))),Object(s.b)("p",null,"Now we are ready to install Discord.js. In the terminal run, ",Object(s.b)("inlineCode",{parentName:"p"},"npm install discord.js"),"."),Object(s.b)("p",null,"If everything went well you should something similar to this. You"),Object(s.b)("p",null,Object(s.b)("img",{alt:"discord install folder example",src:n(159).default})),Object(s.b)("p",null,"And now we're done! Soon we will be righting our first command."),Object(s.b)("h2",{id:"installing-a-linter-1"},"Installing a linter"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.")),Object(s.b)("p",null,"While it's not required, depending on how you set up your project it can be very helpful. Read more about ",Object(s.b)("a",{parentName:"p",href:"https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it"},"Linters")," here."),Object(s.b)("p",null,"Linter docs page: ",Object(s.b)("a",{parentName:"p",href:"/docs/js/s1/installings/doc-linter"},"click me"))),Object(s.b)(h,{value:"linux",mdxType:"TabItem"},Object(s.b)("h1",{id:"installing-node--linux"},"Installing Node | linux"),Object(s.b)("p",null,"Before we can jump into the fun parts we must install the necessary technologies."),Object(s.b)("h3",{id:"what-is-nodejs--linux-nav"},"What is nodejs? | Linux nav"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux."),Object(s.b)("p",{parentName:"blockquote"},"Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("a",{parentName:"em",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"Quote Source"))),Object(s.b)("p",null,"You can learn more about ",Object(s.b)("a",{parentName:"p",href:"https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"},"nodejs here")," or on the official site ",Object(s.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"),"."),Object(s.b)("p",null,"Hello, my fellow Linux user. If you're developing on Linux I will assume you are comfortable with the terminal. As there are many different options in Linux I will only go over the basics of terminal commands."),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"You need to have the lasted version of Nodejs installed. ",Object(s.b)("em",{parentName:"p"},"Anything below 12.0 will not work.")," Discord.js v12 requires Node 12.0 or higher to function properly."))),Object(s.b)("p",null,"To check if you have node installed on your computer run"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"node -v\n")),Object(s.b)("p",null,"in your terminal. We also recommend downloading this ",Object(s.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"},"windows terminal")," as it is better than normal ",Object(s.b)("inlineCode",{parentName:"p"},"cmd")," for most cases."),Object(s.b)("p",null,"If everything went well then you should see:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"node version check picture",src:n(157).default})),Object(s.b)("h3",{id:"installing-discordjs-2"},"Installing Discordjs"),Object(s.b)("p",null,"Now that you have Node install we can install Discord Js. To start this project we must create a folder to store all our files. This"),Object(s.b)("p",null,"Navigate to a place on your computer where you want to store and have easy access to the bot. Now create a new folder like normal. ",Object(s.b)("em",{parentName:"p"},"(Or pro users can do ",Object(s.b)("inlineCode",{parentName:"em"},"mkdir project-name"),")"),". Next, whatever name you inputted for the ",Object(s.b)("em",{parentName:"p"},"project name")," you will run the command: ",Object(s.b)("inlineCode",{parentName:"p"},"cd project-name"),". For this tutorial, we will be using ",Object(s.b)("inlineCode",{parentName:"p"},"discord-bot")," as our project name."),Object(s.b)("p",null,Object(s.b)("img",{alt:"Mkdir exmaple image",src:n(158).default})),Object(s.b)("h3",{id:"final-steps-2"},"Final steps"),Object(s.b)("p",null,"Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial, I will be using ",Object(s.b)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Vscode"),". It's a personal favorite and was created by Microsoft."),Object(s.b)("p",null,"To launch vs-code easily run ",Object(s.b)("inlineCode",{parentName:"p"},"code .")," in your terminal. Next, we will set-up our development environment. Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init")," in the terminal. This command will ask you a few questions about your project. ",Object(s.b)("em",{parentName:"p"},"If your not sure about something just hit enter to skip it.")),Object(s.b)("p",null,":::"),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Want to get started without being asked questions? Simply run ",Object(s.b)("inlineCode",{parentName:"p"},"npm init -y"),". This command will skip all the questions. You can edit them later in the package.json file."))),Object(s.b)("p",null,"Now we are ready to install Discord.js. In the terminal run, ",Object(s.b)("inlineCode",{parentName:"p"},"npm install discord.js"),"."),Object(s.b)("p",null,"If everything went well you should something similar to this. You"),Object(s.b)("p",null,Object(s.b)("img",{alt:"discord install folder example",src:n(159).default})),Object(s.b)("p",null,"And now we're done! Soon we will be righting our first command."),Object(s.b)("h3",{id:"installing-a-linter-2"},"Installing a linter"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.")),Object(s.b)("p",null,"While it's not required, depending on how you set up your project it can be very helpful. Read more about ",Object(s.b)("a",{parentName:"p",href:"https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it"},"Linters")," here."),Object(s.b)("p",null,"Linter docs page: ",Object(s.b)("a",{parentName:"p",href:"/docs/js/s1/installings/doc-linter"},"click me")))))}f.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},127:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},140:function(e,t,n){"use strict";var a=n(0),o=n(141);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/shot-nodejs-check-6c3deec0fe6e14063b498f1d1e2e258a.png"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/shot-mkdir-js-bcda9a4a284b3fd3906d48bb85fbcd00.png"},159:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);