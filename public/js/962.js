"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[962],{1962:(e,t,l)=>{l.r(t),l.d(t,{default:()=>p});var n=l(821),r={class:"side-bar-details-inner-wrapper"},a={key:0,class:"side-bar-card card no-border mt-3 mb-3"},s={class:"row no-gutters"},c={class:"col-sm-5"},i=["src"],o={className:"col-sm-7 p-2"},u={class:"post-entry-title"};const d={components:{AppLink:l(9323).Z},props:{postResult:Object,requestSlug:{type:String,default:""},defaultImgLink:{type:String,default:""},limitStringFunc:{type:Function,default:null}}};const p=(0,l(3744).Z)(d,[["render",function(e,t,l,d,p,m){var k=(0,n.resolveComponent)("AppLink");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.postResult,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"side-bar-details",key:t},[l.requestSlug!=e.slug&&t<3?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",c,[(0,n.createVNode)(k,{linkUrl:"/blog/".concat(e.slug)},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("img",{class:"img-fluid",src:null===e.imgUrls?l.defaultImgLink:e.imgUrls,alt:""},null,8,i)]})),_:2},1032,["linkUrl"])]),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("p",u,[(0,n.createVNode)(k,{linkUrl:"/blog/".concat(e.slug)},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(l.limitStringFunc(60,e.title)),1)]})),_:2},1032,["linkUrl"])])])])])):(0,n.createCommentVNode)("",!0)])})),128))])}]])},9323:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(821),r=l(9285),a=["href"];const s={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0}},setup:function(e){return function(t,l){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.withDirectives)((0,n.createElementVNode)("a",{class:(0,n.normalizeClass)(e.className),href:e.linkUrl,target:"_blank"},[(0,n.renderSlot)(t.$slots,"default")],10,a),[[n.vShow,"ext"===e.linkType]]),(0,n.withDirectives)((0,n.createVNode)((0,n.unref)(r.rU),{class:(0,n.normalizeClass)(e.className),href:e.linkUrl},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["class","href"]),[[n.vShow,"int"===e.linkType]])],64)}}}}}]);