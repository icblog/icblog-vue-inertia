"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[499],{1694:(e,t,n)=>{n.d(t,{Ae:()=>f,Ec:()=>d,Jb:()=>y,U0:()=>i,U2:()=>p,Wd:()=>u,de:()=>l,eY:()=>m,ef:()=>s,io:()=>o,kI:()=>a,kc:()=>c,wA:()=>r});var l=function(){return"Sorry system error, your request can not be processed please try again later thank you"},r=function(e,t,n){return e.replace(t,n)};function o(e,t){return t.length>e?t.slice(0,e)+"...":t}function a(e){e.value.scrollIntoView({behavior:"smooth"})}function u(e,t){if(e>=0)return t.splice(e,1),t}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj",r=!1;return"arr"==l?t.some((function(t){return t===e}))&&(r=!0):t.some((function(t){return t[n]===e}))&&(r=!0),r}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==l?t.filter((function(t){return t!==e})):t.filter((function(t){return t[n]!==e}))}function s(e){return new Date(e).toLocaleDateString()}function d(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,19).replace("T"," ")}function m(e){e.value.focus()}function p(){return appDataObj.resumeLink}function f(e,t,n){return e.length?t.filter((function(t){return t[n].toLowerCase().includes(e.toLowerCase())})):t}function y(e,t){var n=t.length;setTimeout((function(){return e.setSelectionRange(n,n)}))}},8499:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var l=n(821),r=(n(9285),n(1682)),o=n(1293),a=n(1694),u={key:0,class:"pt-2 pb-2"},i={key:1,class:"reply-wrapper"},c={class:"small reply-body-wrapper"},s={class:"existing-comment-or-reply-form input-group"},d={class:"input-group-append"},m={class:"existing-comment-or-reply-ellipse-btn-active"},p=(0,l.createElementVNode)("span",null,[(0,l.createElementVNode)("i",{class:"fa fa-times"})],-1),f={class:"existing-comment-or-reply-btn-wrapper"},y={class:"existing-comment-or-reply-action-btn-wrapper existing-comment-or-reply-btn-wrapper-active"},b=(0,l.createElementVNode)("i",{class:"fa fa-check"},null,-1),v=(0,l.createTextVNode)(" Save"),S=(0,l.createElementVNode)("i",{class:"fa fa-times"},null,-1),g=(0,l.createTextVNode)(" Cancel");const N={name:"ReplyForm",props:{commentOrReplyIndex:{type:Number,default:0},commentOrReplyBody:{type:String,default:""},isFormProcessing:{type:Boolean,default:!1},replyId:{type:Number,default:0},commentId:{type:Number,default:0},totalCommentReplies:{type:Number,default:0},replyToUsername:{type:String,default:""},requestSlug:{type:String,default:""}},emits:["updateAllowReplyId","handleSaveReply","hideErrors"],setup:function(e,t){var n=t.emit,N=e,C=(0,l.ref)(null),B=(0,l.reactive)({replyBody:""}),h=function(){n("updateAllowReplyId",0)},w=function(){n("hideErrors")};return(0,l.onMounted)((function(){null!=C.value&&(0,a.eY)(C)})),function(t,a){return e.isFormProcessing?((0,l.openBlock)(),(0,l.createElementBlock)("section",u,[(0,l.createVNode)(o.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):((0,l.openBlock)(),(0,l.createElementBlock)("section",i,[(0,l.createElementVNode)("div",c,(0,l.toDisplayString)(e.commentOrReplyBody),1),(0,l.createElementVNode)("div",s,[(0,l.withDirectives)((0,l.createElementVNode)("input",{ref_key:"replyInputRef",ref:C,"onUpdate:modelValue":a[0]||(a[0]=function(e){return B.replyBody=e}),type:"text",class:"form-control existing-comment-or-reply-form-input existing-comment-or-reply-input-active",onFocus:w},null,544),[[l.vModelText,B.replyBody]]),(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("span",m,[(0,l.createVNode)(r.Z,{btnFunc:function(){return h()}},{default:(0,l.withCtx)((function(){return[p]})),_:1},8,["btnFunc"])]),(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("section",null,[(0,l.createElementVNode)("ul",null,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){return(e={}).replyId=N.replyId,e.replyBody=B.replyBody,e.commentId=N.commentId,e.totalCommentReplies=N.totalCommentReplies,e.replyToUsername=N.replyToUsername,e.commentOrReplyIndex=N.commentOrReplyIndex,void n("handleSaveReply",e);var e}},{default:(0,l.withCtx)((function(){return[b,v]})),_:1},8,["btnFunc"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){return h()}},{default:(0,l.withCtx)((function(){return[S,g]})),_:1},8,["btnFunc"])])])])])])])])]))}}}},1682:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(821);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=["title","type"];const u={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var t=e,n=(0,l.reactive)({defaultClassName:"no-border-radius btn shadow-none "+t.customClass});return function(t,r){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.withDirectives)((0,l.createElementVNode)("button",{title:e.btnTitle,type:e.btnType,class:(0,l.normalizeClass)(o({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},n.defaultClassName,!0)),onClick:r[0]||(r[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,l.renderSlot)(t.$slots,"default")],10,a),[[l.vShow,!e.noBtnStyle]]),(0,l.withDirectives)((0,l.createElementVNode)("button",{class:(0,l.normalizeClass)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:r[1]||(r[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,l.renderSlot)(t.$slots,"default")],2),[[l.vShow,e.noBtnStyle]])],64)}}}},1293:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(821),r=[(0,l.createElementVNode)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const o={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var t=e,n=(0,l.ref)(""),o=(0,l.ref)("");return(0,l.onMounted)((function(){"large"==t.loaderSize&&(o.value="fa-3x"),"med"==t.loaderSize&&(o.value="fa-2x"),"small"==t.loaderSize&&(o.value="fa-1x"),t.centerLoader&&(n.value="loader"),null!==t.position&&"full-page"===t.position&&(n.value="".concat(n.value," full-page-loader")),t.dot&&(n.value="".concat(n.value," loader-dot"))})),function(t,a){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[e.dot?((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:0,class:(0,l.normalizeClass)((0,l.unref)(n))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)((0,l.unref)(o))},"..........",2)],2)):(0,l.createCommentVNode)("",!0),e.dot?(0,l.createCommentVNode)("",!0):((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:1,class:(0,l.normalizeClass)((0,l.unref)(n))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)((0,l.unref)(o))},r,2),(0,l.createElementVNode)("p",{class:(0,l.normalizeClass)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}}}]);