"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[695],{5695:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(821),l=n(9285),a=n(8671),r=n(6875),c=n(1293),i={class:"container"},u={class:"row"},s={class:"col-md-7 mx-auto"},d={class:"form-wrapper"},m={key:0};const p={name:"Logout",props:{errors:Object,pageTitle:{type:String,default:""}},setup:function(e){var t=(0,o.ref)(!0);return(0,o.onMounted)((function(){setTimeout((function(){l.Nd.post("/handle-logout",{},{onFinish:function(){t.value=!1}})}),1e3)})),function(n,l){return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(a.Z),{pageTitle:e.pageTitle},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",i,[(0,o.createVNode)((0,o.unref)(r.Z),{intro:"Logout"}),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",d,[(0,o.unref)(t)?((0,o.openBlock)(),(0,o.createElementBlock)("section",m,[(0,o.createVNode)((0,o.unref)(c.Z))])):(0,o.createCommentVNode)("",!0)])])])])]})),_:1},8,["pageTitle"])}}}},1682:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(821);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=["title","type"];const c={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var t=e,n=(0,o.reactive)({defaultClassName:"no-border-radius btn shadow-none "+t.customClass});return function(t,l){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.withDirectives)((0,o.createElementVNode)("button",{title:e.btnTitle,type:e.btnType,class:(0,o.normalizeClass)(a({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},n.defaultClassName,!0)),onClick:l[0]||(l[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,o.renderSlot)(t.$slots,"default")],10,r),[[o.vShow,!e.noBtnStyle]]),(0,o.withDirectives)((0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:l[1]||(l[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,o.renderSlot)(t.$slots,"default")],2),[[o.vShow,e.noBtnStyle]])],64)}}}},9323:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(821),l=n(9285),a=["href"];const r={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0},linkFunc:{type:Function,default:null}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.withDirectives)((0,o.createElementVNode)("a",{class:(0,o.normalizeClass)(e.className),href:e.linkUrl,target:"_blank"},[(0,o.renderSlot)(t.$slots,"default")],10,a),[[o.vShow,"ext"===e.linkType]]),(0,o.withDirectives)((0,o.createVNode)((0,o.unref)(l.rU),{class:(0,o.normalizeClass)(e.className),href:e.linkUrl,onClick:e.linkFunc},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(t.$slots,"default")]})),_:3},8,["class","href","onClick"]),[[o.vShow,"int"===e.linkType]])],64)}}}},8671:(e,t,n)=>{n.d(t,{Z:()=>xe});var o=n(821),l={class:"container"},a={class:"row"},r={class:"col-md-12"},c={class:"header-content-wrapper"},i={class:"left-content-wrapper"},u={class:"right-content-wrapper"},s={key:0},d={class:"account-link"},m={class:"dropdown mt-2"},p=(0,o.createElementVNode)("a",{href:"/user/profile",title:"Account",class:"hello-user"},[(0,o.createElementVNode)("i",{class:"fa fa-user"})],-1),f={class:"dropdown-content"},N={class:"span-user-name hello-user"},h=(0,o.createTextVNode)(" Admin "),g=(0,o.createTextVNode)(" Profile "),v=(0,o.createTextVNode)(" Log Out ");var V=n(9323),k=n(1601),b=n(1682),w={key:0},y=(0,o.createTextVNode)(" Login/Register "),C={key:1},E=(0,o.createTextVNode)(" Blog "),x=(0,o.createTextVNode)(" Contact "),B=(0,o.createTextVNode)(" Projects "),S=(0,o.createTextVNode)(" About"),T=(0,o.createTextVNode)(" Home"),F=(0,o.createTextVNode)(" Home");const L={name:"UserNav",props:{handlePageNav:{type:Function,default:null},toggleMenu:{type:Function,default:null}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,["blog/bloghome"!=t.$page.component.toLowerCase()||t.$page.props.isLoggedIn?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("li",w,[(0,o.createVNode)((0,o.unref)(V.Z),{linkUrl:"/login",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[y]})),_:1})])),"blog/bloghome"!=t.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("li",C,[(0,o.createVNode)((0,o.unref)(V.Z),{linkUrl:"/blog/post/all",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[E]})),_:1})])):(0,o.createCommentVNode)("",!0),(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)((0,o.unref)(b.Z),{customClass:"header-nav-link",btnFunc:function(){e.handlePageNav("contact"),e.toggleMenu()}},{default:(0,o.withCtx)((function(){return[x]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==t.$page.component.toLowerCase()]]),(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)((0,o.unref)(b.Z),{customClass:"header-nav-link",btnFunc:function(){e.handlePageNav("projects"),e.toggleMenu()}},{default:(0,o.withCtx)((function(){return[B]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==t.$page.component.toLowerCase()]]),(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)((0,o.unref)(b.Z),{customClass:"header-nav-link",btnFunc:function(){e.handlePageNav("about"),e.toggleMenu()}},{default:(0,o.withCtx)((function(){return[S]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==t.$page.component.toLowerCase()]]),(0,o.createElementVNode)("li",null,["home"!=t.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(V.Z),{key:0,linkUrl:"/",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[T]})),_:1})):((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(b.Z),{key:1,customClass:"header-nav-link",btnFunc:function(){e.handlePageNav("home"),e.toggleMenu()}},{default:(0,o.withCtx)((function(){return[F]})),_:1},8,["btnFunc"]))])],64)}}};var P={key:0},_=(0,o.createTextVNode)(" Dashboard "),Z={key:1},$=(0,o.createTextVNode)(" Blog home "),U={key:2},A=(0,o.createTextVNode)(" Site home ");const D={name:"AdminNav",setup:function(e){return function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,["admin/admindashboard"!=e.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("li",P,[(0,o.createVNode)((0,o.unref)(V.Z),{linkUrl:"/admin/dashboard",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[_]})),_:1})])):(0,o.createCommentVNode)("",!0),"blog/bloghome"!=e.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("li",Z,[(0,o.createVNode)((0,o.unref)(V.Z),{linkUrl:"/blog/post/all",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[$]})),_:1})])):(0,o.createCommentVNode)("",!0),"home"!=e.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("li",U,[(0,o.createVNode)((0,o.unref)(V.Z),{linkUrl:"/",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[A]})),_:1})])):(0,o.createCommentVNode)("",!0)],64)}}},M={components:{AppLink:V.Z,Logo:k.Z,UserNav:L,AdminNav:D,AppButton:b.Z},data:function(){return{isMenuOn:!1,isHeaderFixed:!1}},props:{handlePageNav:{type:Function,default:null}},methods:{toggleMenu:function(){this.isMenuOn=!this.isMenuOn},handleHeaderFixed:function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?this.isHeaderFixed=!0:this.isHeaderFixed=!1}},created:function(){window.addEventListener("scroll",this.handleHeaderFixed)},destroyed:function(){window.removeEventListener("scroll",this.handleHeaderFixed)}};var z=n(3744);const O=(0,z.Z)(M,[["render",function(e,t,n,V,k,b){var w=(0,o.resolveComponent)("Logo"),y=(0,o.resolveComponent)("AdminNav"),C=(0,o.resolveComponent)("UserNav"),E=(0,o.resolveComponent)("AppButton"),x=(0,o.resolveComponent)("AppLink");return(0,o.openBlock)(),(0,o.createElementBlock)("header",{class:(0,o.normalizeClass)(k.isHeaderFixed?"header-fix":"")},[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",i,[(0,o.createVNode)(w)]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(k.isMenuOn?"middle-content-wrapper menu-on":"middle-content-wrapper menu-off")},[(0,o.createElementVNode)("ul",null,[e.$page.props.isLoggedIn&&e.$page.props.isAdmin?((0,o.openBlock)(),(0,o.createBlock)(y,{key:0})):((0,o.openBlock)(),(0,o.createBlock)(C,{key:1,handlePageNav:n.handlePageNav,toggleMenu:b.toggleMenu},null,8,["handlePageNav","toggleMenu"]))])],2),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("ul",null,[(0,o.createElementVNode)("li",null,[(0,o.createVNode)(E,{btnTitle:k.isMenuOn?"Close menu":"Open menu",customClass:"menu-btn show-on-mobile hide-on-desktop",btnFunc:b.toggleMenu},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("span",null,[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(k.isMenuOn?"fas fa-times":"fa fa-bars")},null,2)])]})),_:1},8,["btnTitle","btnFunc"])]),e.$page.props.isLoggedIn&&"auth/logout"!=e.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createElementBlock)("li",s,[(0,o.createElementVNode)("span",d,[(0,o.createElementVNode)("div",m,[p,(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("span",N,"Hi, "+(0,o.toDisplayString)(e.$page.props.username),1),e.$page.props.isAdmin?((0,o.openBlock)(),(0,o.createBlock)(x,{key:0,linkUrl:"/admin/dashboard"},{default:(0,o.withCtx)((function(){return[h]})),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(x,{linkUrl:"/user/profile"},{default:(0,o.withCtx)((function(){return[g]})),_:1}),(0,o.createVNode)(x,{linkUrl:"/logout"},{default:(0,o.withCtx)((function(){return[v]})),_:1})])])])])):(0,o.createCommentVNode)("",!0)])])])])])])],2)}]]);var j={className:"footer-wrapper"},H={class:"container"},I={class:"row"},Y={class:"col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4"},R=(0,o.createElementVNode)("h6",null,"Site links",-1),q=(0,o.createElementVNode)("i",{class:"fa fa-home"},null,-1),G=(0,o.createTextVNode)(" Home"),W=(0,o.createElementVNode)("i",{class:"fa fa-home"},null,-1),J=(0,o.createTextVNode)(" Home"),K=(0,o.createElementVNode)("i",{class:"fa fa-info-circle"},null,-1),Q=(0,o.createTextVNode)(" About"),X=(0,o.createElementVNode)("i",{class:"fa fa-briefcase"},null,-1),ee=(0,o.createTextVNode)(" Projects "),te=(0,o.createElementVNode)("i",{class:"fab fa-blogger"},null,-1),ne=(0,o.createTextVNode)(" Blog"),oe={class:"col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4"},le=(0,o.createElementVNode)("h6",null,"Get intouch",-1),ae=(0,o.createElementVNode)("i",{class:"fas fa-sms"},null,-1),re=(0,o.createTextVNode)(" Contact "),ce=(0,o.createElementVNode)("i",{class:"fab fa-github-square"},null,-1),ie=(0,o.createTextVNode)(" Github"),ue={class:"col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4"},se=(0,o.createElementVNode)("h6",null,"Useful links",-1),de=(0,o.createElementVNode)("i",{class:"fa fa-school"},null,-1),me=(0,o.createTextVNode)(" W3C school"),pe=(0,o.createElementVNode)("i",{class:"fa fa-rocket"},null,-1),fe=(0,o.createTextVNode)(" Stack overflow"),Ne=(0,o.createElementVNode)("i",{class:"fab fa-medium-m"},null,-1),he=(0,o.createTextVNode)(" Medium.com"),ge=(0,o.createElementVNode)("li",null,null,-1),ve={class:"col-md-12 text-center"},Ve=(0,o.createElementVNode)("i",{class:"fa fa-copyright","aria-hidden":"true"},null,-1),ke={class:"scroll-to-topbtn"},be=(0,o.createElementVNode)("i",{class:"fa fa-chevron-up"},null,-1);const we={components:{AppButton:b.Z,AppLink:V.Z},data:function(){return{copyRightData:"".concat((new Date).getFullYear()," icblog.com"),scTimer:0,scY:0}},props:{handlePageNav:{type:Function,default:null}},methods:{handleScrollToTopBtn:function(){var e=this;this.scTimer||(this.scTimer=setTimeout((function(){e.scY=window.scrollY,clearTimeout(e.scTimer),e.scTimer=0}),100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.handleScrollToTopBtn)}},ye=(0,z.Z)(we,[["render",function(e,t,n,l,a,r){var c=(0,o.resolveComponent)("AppLink"),i=(0,o.resolveComponent)("AppButton");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("footer",j,[(0,o.createElementVNode)("div",H,[(0,o.createElementVNode)("div",I,[(0,o.createElementVNode)("div",Y,[R,(0,o.createElementVNode)("ul",null,[(0,o.createElementVNode)("li",null,["home"!=e.$page.component.toLowerCase()?((0,o.openBlock)(),(0,o.createBlock)(c,{key:0,linkUrl:"/",className:"header-nav-link"},{default:(0,o.withCtx)((function(){return[q,G]})),_:1})):((0,o.openBlock)(),(0,o.createBlock)(i,{key:1,customClass:"header-nav-link",btnFunc:function(){return n.handlePageNav("home")}},{default:(0,o.withCtx)((function(){return[W,J]})),_:1},8,["btnFunc"]))]),(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)(i,{customClass:"header-nav-link",btnFunc:function(){return n.handlePageNav("about")}},{default:(0,o.withCtx)((function(){return[K,Q]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==e.$page.component.toLowerCase()]]),(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)(i,{customClass:"header-nav-link",btnFunc:function(){return n.handlePageNav("projects")}},{default:(0,o.withCtx)((function(){return[X,ee]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==e.$page.component.toLowerCase()]]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(c,{className:"footer-links",linkUrl:"/blog/post/latest"},{default:(0,o.withCtx)((function(){return[te,ne]})),_:1})])])]),(0,o.createElementVNode)("div",oe,[le,(0,o.createElementVNode)("ul",null,[(0,o.withDirectives)((0,o.createElementVNode)("li",null,[(0,o.createVNode)(i,{customClass:"header-nav-link",btnFunc:function(){return n.handlePageNav("contact")}},{default:(0,o.withCtx)((function(){return[ae,re]})),_:1},8,["btnFunc"])],512),[[o.vShow,"home"==e.$page.component.toLowerCase()]]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(c,{className:"footer-links",linkUrl:"https://github.com/icblog",linkType:"ext"},{default:(0,o.withCtx)((function(){return[ce,ie]})),_:1})])])]),(0,o.createElementVNode)("div",ue,[se,(0,o.createElementVNode)("ul",null,[(0,o.createElementVNode)("li",null,[(0,o.createVNode)(c,{linkUrl:"https://www.w3schools.com/",linkType:"ext"},{default:(0,o.withCtx)((function(){return[de,me]})),_:1})]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(c,{linkUrl:"https://stackoverflow.com/",linkType:"ext"},{default:(0,o.withCtx)((function(){return[pe,fe]})),_:1})]),(0,o.createElementVNode)("li",null,[(0,o.createVNode)(c,{linkUrl:"https://medium.com",linkType:"ext"},{default:(0,o.withCtx)((function(){return[Ne,he]})),_:1})]),ge])]),(0,o.createElementVNode)("div",ve,[Ve,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(a.copyRightData),1)])])])]),(0,o.createVNode)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",ke,[(0,o.createVNode)(i,{btnStyle:"primary",btnFunc:r.toTop},{default:(0,o.withCtx)((function(){return[be]})),_:1},8,["btnFunc"])],512),[[o.vShow,a.scY>300]])]})),_:1})],64)}]]);var Ce=n(9285),Ee={class:"content-wrapper"};const xe={name:"Layout",props:{pageTitle:{type:String,default:""},handlePageNav:{type:Function,default:null}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(Ce.Fb),null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("title",null,"\r\n      "+(0,o.toDisplayString)(e.pageTitle)+"\r\n    ",1)]})),_:1}),(0,o.createVNode)((0,o.unref)(O),{handlePageNav:e.handlePageNav},null,8,["handlePageNav"]),(0,o.createElementVNode)("div",Ee,[(0,o.renderSlot)(t.$slots,"default")]),(0,o.createVNode)((0,o.unref)(ye),{handlePageNav:e.handlePageNav},null,8,["handlePageNav"])],64)}}}},1293:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),l=[(0,o.createElementVNode)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const a={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var t=e,n=(0,o.ref)(""),a=(0,o.ref)("");return(0,o.onMounted)((function(){"large"==t.loaderSize&&(a.value="fa-3x"),"med"==t.loaderSize&&(a.value="fa-2x"),"small"==t.loaderSize&&(a.value="fa-1x"),t.centerLoader&&(n.value="loader"),null!==t.position&&"full-page"===t.position&&(n.value="".concat(n.value," full-page-loader")),t.dot&&(n.value="".concat(n.value," loader-dot"))})),function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.dot?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,class:(0,o.normalizeClass)((0,o.unref)(n))},[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)((0,o.unref)(a))},"..........",2)],2)):(0,o.createCommentVNode)("",!0),e.dot?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:1,class:(0,o.normalizeClass)((0,o.unref)(n))},[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)((0,o.unref)(a))},l,2),(0,o.createElementVNode)("p",{class:(0,o.normalizeClass)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}},1601:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(821),l=n(9323),a={class:"logo-wrapper"},r=(0,o.createTextVNode)(" Ic ");const c={name:"Logo",setup:function(e){return function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createVNode)(l.Z,{linkUrl:"/"},{default:(0,o.withCtx)((function(){return[r]})),_:1})])}}}},6875:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(821),l={class:"row"},a={class:"col-md-12 pt-5 text-center"},r={class:"page-intro-wrapper pb-4"},c={class:"pt-2"};const i={name:"PageIntro",props:{intro:{type:String,default:""}},setup:function(e){return function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("h3",c,(0,o.toDisplayString)(e.intro),1)])])])}}}}}]);