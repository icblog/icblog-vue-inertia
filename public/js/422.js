"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[422],{7883:(e,t,n)=>{n.d(t,{Ae:()=>y,Ec:()=>u,Jb:()=>f,U0:()=>c,U2:()=>p,Wd:()=>i,de:()=>l,eY:()=>s,ef:()=>d,io:()=>r,kI:()=>a,kc:()=>m,wA:()=>o});var l=function(){return"Sorry system error, your request can not be processed please try again later thank you"},o=function(e,t,n){return e.replace(t,n)};function r(e,t){return t.length>e?t.slice(0,e)+"...":t}function a(e){e.value.scrollIntoView({behavior:"smooth"})}function i(e,t){if(e>=0)return t.splice(e,1),t}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj",o=!1;return"arr"==l?t.some((function(t){return t===e}))&&(o=!0):t.some((function(t){return t[n]===e}))&&(o=!0),o}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==l?t.filter((function(t){return t!==e})):t.filter((function(t){return t[n]!==e}))}function d(e){return new Date(e).toLocaleDateString()}function u(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,19).replace("T"," ")}function s(e){e.value.focus()}function p(){return appDataObj.resumeLink}function y(e,t,n){return e.length?t.filter((function(t){return t[n].toLowerCase().includes(e.toLowerCase())})):t}function f(e,t){var n=t.length;setTimeout((function(){return e.setSelectionRange(n,n)}))}},8422:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var l=n(821),o=n(9285),r=n(1682),a=n(1293),i=n(7883),c={key:0,class:"pt-2 pb-2"},m={key:1},d={class:"existing-comment-or-reply-form input-group"},u={class:"existing-comment-or-reply-form-input-span-wrapper"},s=["type"],p={class:"input-group-append"},y={key:0},f=[(0,l.createElementVNode)("i",{class:"fa fa-times"},null,-1)],v={key:1},E=[(0,l.createElementVNode)("i",{class:"fa fa-ellipsis-v"},null,-1)],b={class:"existing-comment-or-reply-btn-wrapper"},C={key:0},R=(0,l.createElementVNode)("i",{class:"fa fa-edit"},null,-1),O=(0,l.createTextVNode)(" Edit"),B=(0,l.createElementVNode)("i",{class:"fa fa-trash"},null,-1),g=(0,l.createTextVNode)(" Delete"),N={key:1},h=(0,l.createElementVNode)("i",{class:"fa fa-reply"},null,-1),S=(0,l.createTextVNode)(" Reply"),k=(0,l.createElementVNode)("i",{class:"fa fa-flag"},null,-1),V=(0,l.createTextVNode)(" Report"),w=(0,l.createElementVNode)("i",{class:"fa fa-check"},null,-1),I=(0,l.createTextVNode)(" Save"),x=(0,l.createElementVNode)("i",{class:"fa fa-times"},null,-1),T=(0,l.createTextVNode)(" Cancel");const D={name:"EditForm",props:{commentOrReplyEntry:{type:Object,default:{}},commentOrReplyToBeEditId:{type:Number,default:0},commentOrReplyEntryIndex:{type:Number,default:""},isCommentOrReplyEntryUpdatedSuccess:{type:Boolean,default:!1},isFormProcessing:{type:Boolean,default:!1},commentOrReplyEntryParentName:{type:String,default:""},mainCommentId:{type:Number,default:0},totalCommentReplies:{type:Number,default:0}},emits:["handleUpdate","handleDelete","hideErrors","updateCommentTobEditedId","checkIfUserHasAlreadyReply"],setup:function(e,t){var n,D,F=t.emit,z=e,P=(0,l.ref)(null),U=(0,l.reactive)({commentOrReplyEntryBody:null===(n=z.commentOrReplyEntry)||void 0===n?void 0:n.body,oldCommentOrReplyEntryBody:null===(D=z.commentOrReplyEntry)||void 0===D?void 0:D.body,hasEditOrRelpyBtnBeenClicked:!1,saveUpdateOrDelete:""}),_=function(){var e={updateOrDelete:"delete"};if("comment"==z.commentOrReplyEntryParentName)e.oldCommentMsg="",e.newCommentMsg="",e.commentId=z.commentOrReplyToBeEditId,e.entryIndex=z.commentOrReplyEntryIndex,e.totalCommentReplies=z.totalCommentReplies;else{if("reply"!=z.commentOrReplyEntryParentName)return;e.oldReplyMsg="",e.newReplyMsg="",e.replyId=z.commentOrReplyToBeEditId,e.entryIndex=z.commentOrReplyEntryIndex,e.mainCommentId=z.mainCommentId,e.totalCommentReplies=z.totalCommentReplies}F("handleDelete",e)},j=function(e,t){(0,o.qt)().props.isLoggedIn?"reply"==e?F("checkIfUserHasAlreadyReply",t):(U.saveUpdateOrDelete="update",null!=P.value&&((0,i.Jb)(P.value,U.commentOrReplyEntryBody),(0,i.eY)(P)),U.hasEditOrRelpyBtnBeenClicked=!0,F("updateCommentTobEditedId",t)):o.Nd.visit("/login",{method:"get"})},M=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];U.hasEditOrRelpyBtnBeenClicked=!1,U.saveUpdateOrDelete="",e&&(U.commentOrReplyEntryBody=U.oldCommentOrReplyEntryBody),F("updateCommentTobEditedId",0),Z()},Z=function(){F("hideErrors")};return(0,l.watch)((function(){return z.isCommentOrReplyEntryUpdatedSuccess}),(function(e,t){e&&(U.oldCommentOrReplyEntryBody=U.commentOrReplyEntryBody,M(!1))})),function(t,n){var i,D,L,A,q,H,J,Y,$;return e.isFormProcessing&&e.commentOrReplyToBeEditId==(null===(i=e.commentOrReplyEntry)||void 0===i?void 0:i.id)?((0,l.openBlock)(),(0,l.createElementBlock)("section",c,[(0,l.createVNode)(a.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):((0,l.openBlock)(),(0,l.createElementBlock)("section",m,[(0,l.createElementVNode)("div",d,[(0,l.withDirectives)((0,l.createElementVNode)("span",u,[(0,l.withDirectives)((0,l.createElementVNode)("span",{class:(0,l.normalizeClass)({"existing-comment-or-reply-form-input-span":!0})},"@"+(0,l.toDisplayString)(e.commentOrReplyEntry.replied_to),513),[[l.vShow,null!=e.commentOrReplyEntry.replied_to]])],512),[[l.vShow,!U.hasEditOrRelpyBtnBeenClicked]]),(0,l.withDirectives)((0,l.createElementVNode)("input",{ref_key:"commentOrReplyEntryInputRef",ref:P,"onUpdate:modelValue":n[0]||(n[0]=function(e){return U.commentOrReplyEntryBody=e}),type:e.commentOrReplyToBeEditId==(null===(D=e.commentOrReplyEntry)||void 0===D?void 0:D.id)&&U.hasEditOrRelpyBtnBeenClicked?"text":"button",class:(0,l.normalizeClass)({"form-control existing-comment-or-reply-form-input":!0,"existing-comment-or-reply-input-active":e.commentOrReplyToBeEditId==(null===(L=e.commentOrReplyEntry)||void 0===L?void 0:L.id)&&U.hasEditOrRelpyBtnBeenClicked}),onFocus:Z},null,42,s),[[l.vModelDynamic,U.commentOrReplyEntryBody]]),(0,l.createElementVNode)("div",p,[(0,l.createElementVNode)("span",{class:(0,l.normalizeClass)(e.commentOrReplyToBeEditId==(null===(A=e.commentOrReplyEntry)||void 0===A?void 0:A.id)?"existing-comment-or-reply-ellipse-btn-active":"existing-comment-or-reply-ellipse-btn")},[(0,l.createVNode)(r.Z,{btnFunc:function(){var t,n;return n=null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id,void(z.commentOrReplyToBeEditId==n?M():F("updateCommentTobEditedId",n))}},{default:(0,l.withCtx)((function(){var t;return[e.commentOrReplyToBeEditId==(null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)?((0,l.openBlock)(),(0,l.createElementBlock)("span",y,f)):((0,l.openBlock)(),(0,l.createElementBlock)("span",v,E))]})),_:1},8,["btnFunc"])],2),(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)({"existing-comment-or-reply-action-btn-wrapper":!0,"existing-comment-or-reply-btn-wrapper-active":e.commentOrReplyToBeEditId==(null===(q=e.commentOrReplyEntry)||void 0===q?void 0:q.id)})},[(0,l.createElementVNode)("section",null,[(0,l.withDirectives)((0,l.createElementVNode)("ul",null,[(null===(H=e.commentOrReplyEntry)||void 0===H?void 0:H.replied_by)==(null===(J=(0,l.unref)(o.qt)().props)||void 0===J?void 0:J.username)||(null===(Y=e.commentOrReplyEntry)||void 0===Y?void 0:Y.commented_by)==(null===($=(0,l.unref)(o.qt)().props)||void 0===$?void 0:$.username)?((0,l.openBlock)(),(0,l.createElementBlock)("span",C,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){var t;return j("edit",null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)}},{default:(0,l.withCtx)((function(){return[R,O]})),_:1},8,["btnFunc"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:_},{default:(0,l.withCtx)((function(){return[B,g]})),_:1})])])):((0,l.openBlock)(),(0,l.createElementBlock)("span",N,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){var t;return j("reply",null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)}},{default:(0,l.withCtx)((function(){return[h,S]})),_:1},8,["btnFunc"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small"},{default:(0,l.withCtx)((function(){return[k,V]})),_:1})])]))],512),[[l.vShow,!U.hasEditOrRelpyBtnBeenClicked]]),(0,l.withDirectives)((0,l.createElementVNode)("ul",null,[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){return function(){var e={};if(e.updateOrDelete=U.saveUpdateOrDelete,e.entryIndex=z.commentOrReplyEntryIndex,"comment"==z.commentOrReplyEntryParentName)e.oldCommentMsg=U.oldCommentOrReplyEntryBody,e.newCommentMsg=U.commentOrReplyEntryBody,e.commentId=z.commentOrReplyToBeEditId;else{if("reply"!=z.commentOrReplyEntryParentName)return;e.oldReplyMsg=U.oldCommentOrReplyEntryBody,e.newReplyMsg=U.commentOrReplyEntryBody,e.replyId=z.commentOrReplyToBeEditId,e.mainCommentId=z.mainCommentId,e.totalCommentReplies=z.totalCommentReplies}"update"==U.saveUpdateOrDelete&&F("handleUpdate",e)}()}},{default:(0,l.withCtx)((function(){return[w,I]})),_:1},8,["btnFunc"])]),(0,l.createElementVNode)("li",null,[(0,l.createVNode)(r.Z,{customClass:"small",btnFunc:function(){return M()}},{default:(0,l.withCtx)((function(){return[x,T]})),_:1},8,["btnFunc"])])],512),[[l.vShow,U.hasEditOrRelpyBtnBeenClicked]])])],2)])])])]))}}}},1682:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(821);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==o(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=["title","type"];const i={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var t=e,n=(0,l.reactive)({defaultClassName:"no-border-radius btn shadow-none "+t.customClass});return function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.withDirectives)((0,l.createElementVNode)("button",{title:e.btnTitle,type:e.btnType,class:(0,l.normalizeClass)(r({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},n.defaultClassName,!0)),onClick:o[0]||(o[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,l.renderSlot)(t.$slots,"default")],10,a),[[l.vShow,!e.noBtnStyle]]),(0,l.withDirectives)((0,l.createElementVNode)("button",{class:(0,l.normalizeClass)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:o[1]||(o[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,l.renderSlot)(t.$slots,"default")],2),[[l.vShow,e.noBtnStyle]])],64)}}}},1293:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(821),o=[(0,l.createElementVNode)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const r={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var t=e,n=(0,l.ref)(""),r=(0,l.ref)("");return(0,l.onMounted)((function(){"large"==t.loaderSize&&(r.value="fa-3x"),"med"==t.loaderSize&&(r.value="fa-2x"),"small"==t.loaderSize&&(r.value="fa-1x"),t.centerLoader&&(n.value="loader"),null!==t.position&&"full-page"===t.position&&(n.value="".concat(n.value," full-page-loader")),t.dot&&(n.value="".concat(n.value," loader-dot"))})),function(t,a){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[e.dot?((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:0,class:(0,l.normalizeClass)((0,l.unref)(n))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)((0,l.unref)(r))},"..........",2)],2)):(0,l.createCommentVNode)("",!0),e.dot?(0,l.createCommentVNode)("",!0):((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:1,class:(0,l.normalizeClass)((0,l.unref)(n))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)((0,l.unref)(r))},o,2),(0,l.createElementVNode)("p",{class:(0,l.normalizeClass)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}}}]);