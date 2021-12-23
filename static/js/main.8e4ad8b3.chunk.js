(this["webpackJsonpbill-ott"]=this["webpackJsonpbill-ott"]||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},4:function(e){e.exports=JSON.parse('[{"id":1,"title":"12MONTHS","prevImg":"./assets/twelvemonths-preview.png","stack":"React.js, Ruby on Rails, React Redux","desc":"A diary application","github":"https://github.com/billyott/twelve-months-client","youtube":"https://www.youtube.com/watch?v=Pwc1hHV852g"},{"id":2,"title":"Flash Flip","prevImg":"./assets/flashflip-preview.png","stack":"React.js, Ruby on Rails","desc":"A flash card application","github":"https://github.com/billyott/flash-flip-client","youtube":"https://www.youtube.com/watch?v=KvWOtRugWLg"},{"id":3,"title":"Completionist","prevImg":"./assets/completionist-preview.png","stack":"JavaScript, Ruby on Rails","desc":"A task tracking application","github":"https://github.com/bfeldman/completionist-frontend","youtube":"https://www.youtube.com/watch?v=hXr_y20hb7g"},{"id":4,"title":"Scrambled","prevImg":"./assets/scrambled-preview.png","stack":"Ruby","desc":"A CLI puzzle game application","github":"https://github.com/billyott/scrambled","youtube":"https://www.youtube.com/watch?v=K8k6POBPFfU"}]')},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),i=s.n(c),n=s(10),o=s.n(n);s(29),s(30);function l(){return Object(a.jsx)("div",{className:"background__background-area",children:Object(a.jsxs)("ul",{className:"background__background-circles",children:[Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{}),Object(a.jsx)("li",{})]})})}var r=s(7);s(41);function b(){return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("ul",{className:"navbar__list",children:[Object(a.jsx)("li",{className:"navbar__list-item",children:Object(a.jsx)(r.Link,{className:"navbar__link",to:"homepage",smooth:!0,duration:500,spy:!0,tabIndex:"0",href:"",children:"Home"})}),Object(a.jsx)("li",{className:"navbar__list-item",children:Object(a.jsx)(r.Link,{className:"navbar__link",to:"about",smooth:!0,duration:500,spy:!0,tabIndex:"0",href:"",children:"Bio"})}),Object(a.jsx)("li",{className:"navbar__list-item",children:Object(a.jsx)(r.Link,{className:"navbar__link",to:"portfolio",smooth:!0,duration:500,spy:!0,tabIndex:"0",href:"",children:"Portfolio"})}),Object(a.jsx)("li",{className:"navbar__list-item",children:Object(a.jsx)(r.Link,{className:"navbar__link",to:"contact",smooth:!0,duration:500,spy:!0,tabIndex:"0",href:"",children:"Contact"})})]})})}s(42);function j(){return Object(a.jsxs)("div",{className:"homepage",children:[Object(a.jsx)("div",{className:"homepage__header",children:"Hello, there."}),Object(a.jsx)("div",{className:"homepage__sub-header",children:"I'm Bill Ott. I make things that live on the internet."}),Object(a.jsx)("div",{className:"homepage__tagline",children:"Let's do our best."})]})}s(43);function m(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("div",{className:"about__header",children:"BIO"}),Object(a.jsxs)("div",{className:"about__content",children:[Object(a.jsx)("img",{className:"about__image",src:"./assets/wo-pp-bw.png",alt:"Bill Ott selfie"}),Object(a.jsxs)("p",{children:["Hello again. Thank you for visiting my site.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I'm a full stack developer. These days, I'm mostly writing Javascript and working in frameworks like Vue and React, but I also use Python and Ruby.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"In the past, I worked in digital marketing - managing campaigns, analyzing performance data, and building tools to make it easier. I worked with a lot of cool tech, but I wanted to make cool tech.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I'm usually coding, learning Japanese, cooking, or playing video games.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"NYC is home."]})]})]})}var d=s(6),u=s(22),h=s.n(u),p=(s(61),s(4));function _(){var e=Object(c.useState)(p[0]),t=Object(d.a)(e,2),s=t[0],i=t[1],n=function(){return p.findIndex((function(e){return e===s}))};return Object(a.jsxs)("div",{className:"portfolio",children:[Object(a.jsx)("div",{className:"portfolio__header",children:"PORTFOLIO"}),Object(a.jsx)("div",{className:"portfolio__content",children:Object(a.jsxs)("div",{className:"portfolio__prev-container-content",children:[Object(a.jsxs)("div",{className:"portfolio__toggle-container-wrapper",children:[Object(a.jsx)("div",{className:"portfolio__toggle-container portfolio__toggle-container--prev",children:Object(a.jsx)("button",{className:"portfolio__toggle portfolio__toggle--prev",onClick:function(){n()-1===-1?i(p[p.length-1]):i(p[n()-1])},children:"\xabprev"})}),Object(a.jsxs)("div",{className:"portfolio__prev-details",children:[Object(a.jsx)("div",{className:"portfolio__prev-title",children:s.title}),Object(a.jsx)("div",{className:"portfolio__prev-desc",children:s.desc}),Object(a.jsxs)("div",{className:"portfolio__prev-stack",children:[Object(a.jsx)("b",{children:"Built With"}),": ",s.stack]}),Object(a.jsx)("div",{className:"portfolio__prev-github-container",children:Object(a.jsx)("a",{className:"portfolio__prev-github",href:s.github,target:"_blank",rel:"noreferrer",children:"GitHub Repository"})})]}),Object(a.jsx)("div",{className:"portfolio__toggle-container portfolio__toggle-container--next",children:Object(a.jsx)("button",{className:"portfolio__toggle portfolio__toggle--next",onClick:function(){n()+1===p.length?i(p[0]):i(p[n()+1])},children:"next\xbb"})})]}),Object(a.jsx)("div",{className:"portfolio__player-container",children:Object(a.jsx)(h.a,{className:"portfolio__react-player",url:s.youtube,width:"100%",height:"100%"})})]})})]})}var O=s(23);s(62);function x(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),l=o[0],r=o[1],b=Object(c.useRef)();return Object(a.jsxs)("form",{className:"contact-form",ref:b,onSubmit:function(e){e.preventDefault(),O.a.sendForm("service_azyqwow","template_qn44fp9",e.target,"user_w6bhc7Iz1HzSaAEscjbH1").then((function(e){console.log(e.text),i(!0),b.current.reset()}),(function(e){console.log(e.text),r(!0)}))},children:[s&&Object(a.jsx)("div",{className:"contact-form__submit-message",children:"Thank you for your message! I'll reply as soon as possible!"}),l&&Object(a.jsx)("div",{className:"contact-form__submit-message",children:"Oh no! Issue sending message - please try again :("}),Object(a.jsx)("label",{className:"contact-form__label",children:"Name"}),Object(a.jsx)("input",{className:"contact-form__input",type:"text",name:"name"}),Object(a.jsx)("label",{className:"contact-form__label",children:"Email"}),Object(a.jsx)("input",{className:"contact-form__input",type:"email",name:"email"}),Object(a.jsx)("label",{className:"contact-form__label",children:"Subject"}),Object(a.jsx)("input",{className:"contact-form__input",type:"text",name:"subject"}),Object(a.jsx)("label",{className:"contact-form__label",children:"Message"}),Object(a.jsx)("textarea",{className:"contact-form__textarea",name:"message"}),Object(a.jsx)("input",{className:"contact-form__submit",type:"submit",value:"Send"})]})}s(63);function g(){return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("div",{className:"contact__header",children:"CONTACT"}),Object(a.jsx)(x,{})]})}s(64);var f=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(l,{}),Object(a.jsx)(b,{}),Object(a.jsx)(j,{}),Object(a.jsx)(m,{}),Object(a.jsx)(_,{}),Object(a.jsx)(g,{})]})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[65,1,2]]]);