"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11,962],{1694:(e,t,n)=>{n.d(t,{Ae:()=>g,Ec:()=>d,Jb:()=>f,U0:()=>s,U2:()=>m,Wd:()=>c,de:()=>r,eY:()=>p,ef:()=>u,io:()=>a,kI:()=>o,kc:()=>i,wA:()=>l});var r=function(){return"Sorry system error, your request can not be processed please try again later thank you"},l=function(e,t,n){return e.replace(t,n)};function a(e,t){return t.length>e?t.slice(0,e)+"...":t}function o(e){e.value.scrollIntoView({behavior:"smooth"})}function c(e,t){if(e>=0)return t.splice(e,1),t}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj",l=!1;return"arr"==r?t.some((function(t){return t===e}))&&(l=!0):t.some((function(t){return t[n]===e}))&&(l=!0),l}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==r?t.filter((function(t){return t!==e})):t.filter((function(t){return t[n]!==e}))}function u(e){return new Date(e).toLocaleDateString()}function d(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,19).replace("T"," ")}function p(e){e.value.focus()}function m(){return appDataObj.resumeLink}function g(e,t,n){return e.length?t.filter((function(t){return t[n].toLowerCase().includes(e.toLowerCase())})):t}function f(e,t){var n=t.length;setTimeout((function(){return e.setSelectionRange(n,n)}))}},5011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var r=n(821),l={class:"col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-2"},a={class:"side-bar-details-wrapper"},o={key:0,class:"mb-5"},c=(0,r.createElementVNode)("h5",null,"Categories",-1),s={class:"sidebar-category-wrapper"},i={key:0},u={class:"sidebar-category-link-wrapper"},d={key:0},p={class:"sidebar-category-span"},m={key:1},g={class:"sidebar-category-span"},f={key:1},k=[(0,r.createElementVNode)("span",{class:"sidebar-category-span"}," No category found ",-1)],h=(0,r.createElementVNode)("hr",null,null,-1),v={key:1},y=(0,r.createElementVNode)("h5",null,"Popular post",-1),S={class:"pt-1 pb-5"},N=(0,r.createTextVNode)(" View all popular "),V={key:2},b=(0,r.createElementVNode)("h5",null,"Latest post",-1),E={class:"pt-1 pb-4"},w=(0,r.createTextVNode)(" View all latest ");var B=n(9323),C=n(4041),R=n(1962),L=n(1912),D=n(1694);const T={components:{HandleMsg:C.Z,AppLink:B.Z,SideBarPostCard:R.default,LocalSearch:L.Z},data:function(){return{filterText:"",categoriesResultData:this.categoriesResult}},props:{requestSlug:{type:String,default:""},defaultImgLink:{type:String,default:""},categoriesResult:Object,latestPostResult:Object,popularPostResult:Object,limitStringFunc:{type:Function,default:null}},methods:{replaceChar:D.wA,returnFilteredCategoriesResult:function(e){var t=e.arrObj;this.categoriesResultData=t}}};const U=(0,n(3744).Z)(T,[["render",function(e,t,n,B,C,R){var L=(0,r.resolveComponent)("LocalSearch"),D=(0,r.resolveComponent)("AppLink"),T=(0,r.resolveComponent)("SideBarPostCard");return(0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.createElementVNode)("div",a,[n.categoriesResult.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("section",o,[c,(0,r.createVNode)(L,{oldResultObj:n.categoriesResult,whatToCheck:"name",onUpdateCategoriesResult:R.returnFilteredCategoriesResult},null,8,["oldResultObj","onUpdateCategoriesResult"]),(0,r.createElementVNode)("div",s,[C.categoriesResultData.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("section",i,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(C.categoriesResultData,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:t},[(0,r.createElementVNode)("div",u,[R.replaceChar(e.name.toLowerCase()," ","-")===n.requestSlug?((0,r.openBlock)(),(0,r.createElementBlock)("span",d,[(0,r.createElementVNode)("span",p,(0,r.toDisplayString)(e.name)+" ("+(0,r.toDisplayString)(e.categoryPostTotal)+") ",1)])):((0,r.openBlock)(),(0,r.createElementBlock)("span",m,[(0,r.createVNode)(D,{linkUrl:"/blog/category/".concat(R.replaceChar(e.name.toLowerCase()," ","-"))},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("span",g,(0,r.toDisplayString)(e.name)+" ("+(0,r.toDisplayString)(e.categoryPostTotal)+")",1)]})),_:2},1032,["linkUrl"])]))])])})),128))])):((0,r.openBlock)(),(0,r.createElementBlock)("section",f,k))]),h])):(0,r.createCommentVNode)("",!0),"popular"!=n.requestSlug&&n.popularPostResult.length>1?((0,r.openBlock)(),(0,r.createElementBlock)("section",v,[y,(0,r.createVNode)(T,{postResult:n.popularPostResult,requestSlug:n.requestSlug,defaultImgLink:n.defaultImgLink,limitStringFunc:n.limitStringFunc},null,8,["postResult","requestSlug","defaultImgLink","limitStringFunc"]),(0,r.createElementVNode)("div",S,[(0,r.createVNode)(D,{linkUrl:"/blog/post/popular"},{default:(0,r.withCtx)((function(){return[N]})),_:1})])])):(0,r.createCommentVNode)("",!0),"latest"!=n.requestSlug&&n.latestPostResult.length>1?((0,r.openBlock)(),(0,r.createElementBlock)("section",V,[b,(0,r.createVNode)(T,{postResult:n.latestPostResult,requestSlug:n.requestSlug,defaultImgLink:n.defaultImgLink,limitStringFunc:n.limitStringFunc},null,8,["postResult","requestSlug","defaultImgLink","limitStringFunc"]),(0,r.createElementVNode)("div",E,[(0,r.createVNode)(D,{linkUrl:"/blog/post/latest"},{default:(0,r.withCtx)((function(){return[w]})),_:1})])])):(0,r.createCommentVNode)("",!0)])])}]])},1962:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(821),l={class:"side-bar-details-inner-wrapper"},a={key:0,class:"side-bar-card card no-border mt-3 mb-3"},o={class:"row no-gutters"},c={class:"col-sm-5"},s=["src"],i={className:"col-sm-7 p-2"},u={class:"post-entry-title"};const d={components:{AppLink:n(9323).Z},props:{postResult:Object,requestSlug:{type:String,default:""},defaultImgLink:{type:String,default:""},limitStringFunc:{type:Function,default:null}}};const p=(0,n(3744).Z)(d,[["render",function(e,t,n,d,p,m){var g=(0,r.resolveComponent)("AppLink");return(0,r.openBlock)(),(0,r.createElementBlock)("div",l,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.postResult,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"side-bar-details",key:t},[n.requestSlug!=e.slug&&t<3?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(g,{linkUrl:"/blog/".concat(e.slug)},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("img",{class:"img-fluid",src:null===e.imgUrls?n.defaultImgLink:e.imgUrls,alt:""},null,8,s)]})),_:2},1032,["linkUrl"])]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("p",u,[(0,r.createVNode)(g,{linkUrl:"/blog/".concat(e.slug)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(n.limitStringFunc(60,e.title)),1)]})),_:2},1032,["linkUrl"])])])])])):(0,r.createCommentVNode)("",!0)])})),128))])}]])},9323:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(821),l=n(9285),a=["href"];const o={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0}},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.withDirectives)((0,r.createElementVNode)("a",{class:(0,r.normalizeClass)(e.className),href:e.linkUrl,target:"_blank"},[(0,r.renderSlot)(t.$slots,"default")],10,a),[[r.vShow,"ext"===e.linkType]]),(0,r.withDirectives)((0,r.createVNode)((0,r.unref)(l.rU),{class:(0,r.normalizeClass)(e.className),href:e.linkUrl},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(t.$slots,"default")]})),_:3},8,["class","href"]),[[r.vShow,"int"===e.linkType]])],64)}}}},4041:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(821),l=(0,r.createElementVNode)("br",null,null,-1),a=["innerHTML"];const o={name:"HandleMsg",props:{infotype:{type:String,requred:!0},msg:{type:String,requred:!0},showHeading:{type:Boolean,default:!0}},setup:function(e){var t=e,n=(0,r.ref)("no-border-radius alert"),o=(0,r.ref)("");return"success"==t.infotype&&(n.value="".concat(n.value," alert-success"),o.value="Success!"),"error"==t.infotype&&(n.value="".concat(n.value," alert-danger"),o.value="Error!"),"info"==t.infotype&&(n.value="".concat(n.value," alert-secondary"),o.value="Info!"),function(c,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)((0,r.unref)(n)),"aria-live":"assertive"},[(0,r.withDirectives)((0,r.createElementVNode)("span",null,[(0,r.createElementVNode)("strong",null,(0,r.toDisplayString)((0,r.unref)(o)),1),l],512),[[r.vShow,e.showHeading]]),(0,r.createElementVNode)("span",{innerHTML:t.msg},null,8,a)],2)}}}},1912:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),l=n(1694),a={class:"input-group sidebar-search-category-input-wrapper mb-3 mt-4"},o=(0,r.createElementVNode)("span",{class:"sidebar-search-category-icon-search"},[(0,r.createElementVNode)("i",{class:"fas fa-search"})],-1),c=[(0,r.createElementVNode)("i",{class:"fas fa-times"},null,-1)];const s={name:"LocalSearch",props:{oldResultObj:{type:Object,default:{}},whatToCheck:{type:String,default:"name"}},setup:function(e,t){var n=t.emit,s=e,i=(0,r.ref)(""),u=function(){i.value=""};return(0,r.watch)(i,(function(e){var t=[];t=""==e?s.oldResultObj:(0,l.Ae)(e,s.oldResultObj,s.whatToCheck),n("updateCategoriesResult",{arrObj:t,newValue:e})})),function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[o,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:"form-control sidebar-search-category-input",placeholder:"Search category","onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,r.isRef)(i)?i.value=e:i=e})},null,512),[[r.vModelText,(0,r.unref)(i)]]),(0,r.unref)(i).length>0?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:"sidebar-search-category-icon-times",onClick:u},c)):(0,r.createCommentVNode)("",!0)])}}}}}]);