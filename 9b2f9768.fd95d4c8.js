(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),m=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,p=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?s.a.createElement(p,r(r({ref:t},l),{},{components:n})):s.a.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prefix_success_img-a32ceb67bb688c73384745082789b4dd.png"},219:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/server_cmd_success_img-783717767e52cfaa32a25c076823d955.png"},220:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/server_cmd_update_success-b6dd7b1c59f7191d0ec29f6929c7ce50.png"},221:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/user-info-cmd-success-img-f2b86e4c3e859ef776ca1b05b99ff42d.png"},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/user-avatar-command-success-img-9a2120fdfb4d90c19de5d957d79598b5.png"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),s=n(8),o=(n(0),n(141)),i={id:"doc-bot-more-cmd",title:"Adding more commands"},r={unversionedId:"js/s2/installings/doc-bot-more-cmd",id:"js/s2/installings/doc-bot-more-cmd",isDocsHomePage:!1,title:"Adding more commands",description:"---",source:"@site/docs/js/s2/installings/more-cmd.md",slug:"/js/s2/installings/doc-bot-more-cmd",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-bot-more-cmd",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/docs/js/s2/installings/more-cmd.md",version:"current",sidebar:"docs",previous:{title:"Getting Your Bot Up & Running",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-bot-up"},next:{title:"Command Arguments",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-cmd-args"}},c=[{value:"Basic Command Structure",id:"basic-command-structure",children:[]},{value:"Adding a prefix system",id:"adding-a-prefix-system",children:[{value:"Code so far",id:"code-so-far",children:[]}]},{value:"Information Commands",id:"information-commands",children:[{value:"Server Command",id:"server-command",children:[]},{value:"Member info command",id:"member-info-command",children:[]},{value:"Avatar Command",id:"avatar-command",children:[]}]},{value:"The problem with if / else if",id:"the-problem-with-if--else-if",children:[{value:"Resulting code",id:"resulting-code",children:[]}]}],l={toc:c};function m(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"A bot with only one command is a bit boring. In this section we will create a command prefix system for your bot."),Object(o.b)("h2",{id:"basic-command-structure"},"Basic Command Structure"),Object(o.b)("p",null,"On the last page we created a simple if statment that checks messages for our ",Object(o.b)("em",{parentName:"p"},"hello world")," command."),Object(o.b)("p",null,"To add another command we can simply use the ",Object(o.b)("inlineCode",{parentName:"p"},"else if")," operator in javascript."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{3}","{3}":!0},'if (message.content === "!hello") {\n        message.channel.send("Hello World!");\n    } else if (message.content === "world") {\n        message.channel.send("Goodbye World!");\n    }\n')),Object(o.b)("p",null,"Now if you want to add more commands you start with the if statment and then add a chain of else statments. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"\nif ( ... ) {\n    // code\n} else if ( ... ) {\n    // code\n} else if ( ... ) {\n    // code\n} else if ( ... ) {\n    // code\n}\n")),Object(o.b)("h4",null,"Problems with this command system"),Object(o.b)("p",null,"For a simple bot with very few commands this method is acceptable. But if your trying to create a complex bot you will want something called a command hanlder. We will cover than in another section. "),Object(o.b)("h2",{id:"adding-a-prefix-system"},"Adding a prefix system"),Object(o.b)("p",null,"A bot prefix is simply a ",Object(o.b)("strong",{parentName:"p"}," keyboard character")," that triggers a reply from the bot. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Even though the prefix can be anything, try to make it a symbol that works good on both PC and Mobile devices. "),Object(o.b)("p",{parentName:"div"},"Exmaple: ","[ ! ]"," , ","[ ? ]"," , ","[ . ]"," , etc."))),Object(o.b)("p",null,"Applying a prefix to the code is very simple. First we can destructure the variable ",Object(o.b)("inlineCode",{parentName:"p"},"PREFIX")," from our config.json file. "),Object(o.b)("p",null,"Locate your config.json file where you bot token is and make a new line. Name it prefix and save. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "TOKEN": "BOT_TOKEN_HERE",\n  "PREFIX": "!"\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Becuase we decleared config we can do inline destructuring of any variable from our config.json file."))),Object(o.b)("p",null,"make these changes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'-   if (message.content === "!hello") \n+ if (message.content === `${config.PREFIX}\n\n\n- else if (message.content === "world")\n+ else if (message.content === `${config.PREFIX}world`)\n')),Object(o.b)("p",null,"After changing this code you should see:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Prefix_setup_success_img",src:n(218).default})),Object(o.b)("p",null,"Remember to save your file and re-run your bot for the changes to apply."),Object(o.b)("h3",{id:"code-so-far"},"Code so far"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const Discord = require("discord.js");\n\nconst client = new Discord.Client();\n\nconst config = require("./config.json");\n\nclient.once("ready", () => {\n    console.log("Im Online!");\n});\n\nclient.on("message", (message) => {\n    if (message.content === `${config.PREFIX}hello`) {\n        message.channel.send("Hello World!");\n    } else if (message.content === `${config.PREFIX}world`) {\n        message.channel.send("Goodbye World!");\n    }\n});\n\nclient.login(config.TOKEN);\n\n')),Object(o.b)("p",null,"Now the ping command will trigger whenever the message ",Object(o.b)("em",{parentName:"p"},"starts with")," ",Object(o.b)("inlineCode",{parentName:"p"},"!hello"),"!"),Object(o.b)("h2",{id:"information-commands"},"Information Commands"),Object(o.b)("p",null,"Let's start displaying some real data. For now, we'll be displaying basic member/server info."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},'When dealing with the discord api. Servers are refered to as "guilds". Whenever you see someone say "guild", they mean server.'))),Object(o.b)("h3",{id:"server-command"},"Server Command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"else if (message.content === `${config.PREFIX}server`) {\n    message.channel.send(`This server's name is: \\`\\`\\`${message.guild.name}\\`\\`\\``);\n}\n")),Object(o.b)("p",null,"The code above should result in:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"server command exmaple img",src:n(219).default})),Object(o.b)("p",null,"We can also find the total ammount of members in the guild and its ID. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"else if (message.content === `${config.PREFIX}server`) {\n        message.channel.send(\n            `\\`\\`\\`Guild name: ${message.guild.name} \\n Guild ID: ${message.guild.id} \\n Total Members: ${message.guild.memberCount}\\`\\`\\``\n        );\n    }\n")),Object(o.b)("p",null,"And you will get:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"server_command_updates",src:n(220).default})),Object(o.b)("p",null,"Of course, you can modify this to your liking. You may also want to display the date the server was created or the server's region. You would do those in the same manner\u2013use ",Object(o.b)("inlineCode",{parentName:"p"},"message.guild.createdAt")," or ",Object(o.b)("inlineCode",{parentName:"p"},"message.guild.region"),", respectively."),Object(o.b)("h3",{id:"member-info-command"},"Member info command"),Object(o.b)("p",null,"Want to fetch information on a user? "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"else if (message.content === `${config.PREFIX}user-info`) {\n        message.channel.send(`Your username: ${message.author.username}\\nYour ID: ${message.author.id}`);\n    }\n")),Object(o.b)("p",null,"This will display the message author's username (not nickname, if they have one set), as well as their user ID."),Object(o.b)("p",null,Object(o.b)("img",{alt:"user-info-command-ex",src:n(221).default})),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"message.author"),"refers to the user who sent the message. For a full list of all the properties and methods for the author object (a member of the User class), check out ",Object(o.b)("a",{parentName:"p",href:"https://discord.js.org/#/docs/main/stable/class/User"},"the discord.js docs"),"."))),Object(o.b)("h3",{id:"avatar-command"},"Avatar Command"),Object(o.b)("p",null,"In this last exmaple for this page we will fetch a users avatar. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"else if (message.content === `${config.PREFIX}user-info`) {\n        // Send the user's avatar URL\n    message.reply(message.author.displayAvatarURL());\n    }\n")),Object(o.b)("p",null,"This will result in the bot sending your avatar back in the channel."),Object(o.b)("p",null,Object(o.b)("img",{alt:"avatar_command_img",src:n(222).default})),Object(o.b)("h2",{id:"the-problem-with-if--else-if"},"The problem with if / else if"),Object(o.b)("p",null,"If you plan on making a small bot with very few commands using if / else will be sufficient becuase your working with a small project. However, for most of us this is not the case."),Object(o.b)("p",null,"You probably want your bot to be feature-rich and easy to configure and develop, right? Using a giant if/else if chain won't let you achieve that; it will only hinder your development process."),Object(o.b)("h4",null,"Arguments"),Object(o.b)("p",null,"After you read about ",Object(o.b)("a",{parentName:"p",href:"/docs/js/s2/installings/doc-cmd-args"},"Arguemnts"),' we will dive into something called a "command handler" - a system used to handler commands much more efficiently.'),Object(o.b)("p",null,"Before continuing, here's a small list of reasons why you shouldn't use if/else if chains for anything that's not a small project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Takes longer to find a piece of code you want."),Object(o.b)("li",{parentName:"ul"},"Difficult to maintain as it grows."),Object(o.b)("li",{parentName:"ul"},"Difficult to debug."),Object(o.b)("li",{parentName:"ul"},"Difficult to organize."),Object(o.b)("li",{parentName:"ul"},"General bad practice.")),Object(o.b)("h3",{id:"resulting-code"},"Resulting code"),Object(o.b)("p",null,"To see the resulting code ",Object(o.b)("a",{parentName:"p",href:"https://github.com/DeepWebDevelopers/discord-bot-guide/blob/alpha/source/bots/discord-bot-js/source_two/index.js"},"click here"),"."))}m.isMDXComponent=!0}}]);