/*! For license information please see 560.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[560,422,499],{8585:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9669),o=n.n(r),l="http://127.0.0.1:8000";"remote"===appDataObj.appEnv&&(l="https://icblog.uk");const a=o().create({baseURL:l,withCredentials:!0,headers:{"Content-Type":"application/json"}})},1694:(e,t,n)=>{n.d(t,{Ae:()=>y,Ec:()=>m,Jb:()=>f,U0:()=>c,U2:()=>p,Wd:()=>i,de:()=>r,eY:()=>u,ef:()=>d,io:()=>l,kI:()=>a,kc:()=>s,wA:()=>o});var r=function(){return"Sorry system error, your request can not be processed please try again later thank you"},o=function(e,t,n){return e.replace(t,n)};function l(e,t){return t.length>e?t.slice(0,e)+"...":t}function a(e){e.value.scrollIntoView({behavior:"smooth"})}function i(e,t){if(e>=0)return t.splice(e,1),t}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj",o=!1;return"arr"==r?t.some((function(t){return t===e}))&&(o=!0):t.some((function(t){return t[n]===e}))&&(o=!0),o}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==r?t.filter((function(t){return t!==e})):t.filter((function(t){return t[n]!==e}))}function d(e){return new Date(e).toLocaleDateString()}function m(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,19).replace("T"," ")}function u(e){e.value.focus()}function p(){return appDataObj.resumeLink}function y(e,t,n){return e.length?t.filter((function(t){return t[n].toLowerCase().includes(e.toLowerCase())})):t}function f(e,t){var n=t.length;setTimeout((function(){return e.setSelectionRange(n,n)}))}},8422:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(821),o=n(9285),l=n(1682),a=n(1293),i=n(1694),c={key:0,class:"pt-2 pb-2"},s={key:1},d={class:"existing-comment-or-reply-form input-group"},m={class:"existing-comment-or-reply-form-input-span-wrapper"},u=["type"],p={class:"input-group-append"},y={key:0},f=[(0,r.createElementVNode)("i",{class:"fa fa-times"},null,-1)],v={key:1},E=[(0,r.createElementVNode)("i",{class:"fa fa-ellipsis-v"},null,-1)],h={class:"existing-comment-or-reply-btn-wrapper"},g={key:0},b=(0,r.createElementVNode)("i",{class:"fa fa-edit"},null,-1),R=(0,r.createTextVNode)(" Edit"),w=(0,r.createElementVNode)("i",{class:"fa fa-trash"},null,-1),B=(0,r.createTextVNode)(" Delete"),O={key:1},I=(0,r.createElementVNode)("i",{class:"fa fa-reply"},null,-1),C=(0,r.createTextVNode)(" Reply"),k=(0,r.createElementVNode)("i",{class:"fa fa-flag"},null,-1),N=(0,r.createTextVNode)(" Report"),S=(0,r.createElementVNode)("i",{class:"fa fa-check"},null,-1),x=(0,r.createTextVNode)(" Save"),V=(0,r.createElementVNode)("i",{class:"fa fa-times"},null,-1),T=(0,r.createTextVNode)(" Cancel");const D={name:"EditForm",props:{commentOrReplyEntry:{type:Object,default:{}},commentOrReplyToBeEditId:{type:Number,default:0},commentOrReplyEntryIndex:{type:Number,default:""},isCommentOrReplyEntryUpdatedSuccess:{type:Boolean,default:!1},isFormProcessing:{type:Boolean,default:!1},commentOrReplyEntryParentName:{type:String,default:""},mainCommentId:{type:Number,default:0},totalCommentReplies:{type:Number,default:0}},emits:["handleUpdate","handleDelete","hideErrors","updateCommentTobEditedId","checkIfUserHasAlreadyReply"],setup:function(e,t){var n,D,U=t.emit,F=e,_=(0,r.ref)(null),P=(0,r.reactive)({commentOrReplyEntryBody:null===(n=F.commentOrReplyEntry)||void 0===n?void 0:n.body,oldCommentOrReplyEntryBody:null===(D=F.commentOrReplyEntry)||void 0===D?void 0:D.body,hasEditOrRelpyBtnBeenClicked:!1,saveUpdateOrDelete:""}),L=function(){var e={updateOrDelete:"delete"};if("comment"==F.commentOrReplyEntryParentName)e.oldCommentMsg="",e.newCommentMsg="",e.commentId=F.commentOrReplyToBeEditId,e.entryIndex=F.commentOrReplyEntryIndex,e.totalCommentReplies=F.totalCommentReplies;else{if("reply"!=F.commentOrReplyEntryParentName)return;e.oldReplyMsg="",e.newReplyMsg="",e.replyId=F.commentOrReplyToBeEditId,e.entryIndex=F.commentOrReplyEntryIndex,e.mainCommentId=F.mainCommentId,e.totalCommentReplies=F.totalCommentReplies}U("handleDelete",e)},j=function(e,t){(0,o.qt)().props.isLoggedIn?"reply"==e?U("checkIfUserHasAlreadyReply",t):(P.saveUpdateOrDelete="update",null!=_.value&&((0,i.Jb)(_.value,P.commentOrReplyEntryBody),(0,i.eY)(_)),P.hasEditOrRelpyBtnBeenClicked=!0,U("updateCommentTobEditedId",t)):o.Nd.visit("/login",{method:"get"})},z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];P.hasEditOrRelpyBtnBeenClicked=!1,P.saveUpdateOrDelete="",e&&(P.commentOrReplyEntryBody=P.oldCommentOrReplyEntryBody),U("updateCommentTobEditedId",0),A()},A=function(){U("hideErrors")};return(0,r.watch)((function(){return F.isCommentOrReplyEntryUpdatedSuccess}),(function(e,t){e&&(P.oldCommentOrReplyEntryBody=P.commentOrReplyEntryBody,z(!1))})),function(t,n){var i,D,Z,M,H,G,W,Y,q;return e.isFormProcessing&&e.commentOrReplyToBeEditId==(null===(i=e.commentOrReplyEntry)||void 0===i?void 0:i.id)?((0,r.openBlock)(),(0,r.createElementBlock)("section",c,[(0,r.createVNode)(a.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):((0,r.openBlock)(),(0,r.createElementBlock)("section",s,[(0,r.createElementVNode)("div",d,[(0,r.withDirectives)((0,r.createElementVNode)("span",m,[(0,r.withDirectives)((0,r.createElementVNode)("span",{class:(0,r.normalizeClass)({"existing-comment-or-reply-form-input-span":!0})},"@"+(0,r.toDisplayString)(e.commentOrReplyEntry.replied_to),513),[[r.vShow,null!=e.commentOrReplyEntry.replied_to]])],512),[[r.vShow,!P.hasEditOrRelpyBtnBeenClicked]]),(0,r.withDirectives)((0,r.createElementVNode)("input",{ref_key:"commentOrReplyEntryInputRef",ref:_,"onUpdate:modelValue":n[0]||(n[0]=function(e){return P.commentOrReplyEntryBody=e}),type:e.commentOrReplyToBeEditId==(null===(D=e.commentOrReplyEntry)||void 0===D?void 0:D.id)&&P.hasEditOrRelpyBtnBeenClicked?"text":"button",class:(0,r.normalizeClass)({"form-control existing-comment-or-reply-form-input":!0,"existing-comment-or-reply-input-active":e.commentOrReplyToBeEditId==(null===(Z=e.commentOrReplyEntry)||void 0===Z?void 0:Z.id)&&P.hasEditOrRelpyBtnBeenClicked}),onFocus:A},null,42,u),[[r.vModelDynamic,P.commentOrReplyEntryBody]]),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)(e.commentOrReplyToBeEditId==(null===(M=e.commentOrReplyEntry)||void 0===M?void 0:M.id)?"existing-comment-or-reply-ellipse-btn-active":"existing-comment-or-reply-ellipse-btn")},[(0,r.createVNode)(l.Z,{btnFunc:function(){var t,n;return n=null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id,void(F.commentOrReplyToBeEditId==n?z():U("updateCommentTobEditedId",n))}},{default:(0,r.withCtx)((function(){var t;return[e.commentOrReplyToBeEditId==(null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)?((0,r.openBlock)(),(0,r.createElementBlock)("span",y,f)):((0,r.openBlock)(),(0,r.createElementBlock)("span",v,E))]})),_:1},8,["btnFunc"])],2),(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)({"existing-comment-or-reply-action-btn-wrapper":!0,"existing-comment-or-reply-btn-wrapper-active":e.commentOrReplyToBeEditId==(null===(H=e.commentOrReplyEntry)||void 0===H?void 0:H.id)})},[(0,r.createElementVNode)("section",null,[(0,r.withDirectives)((0,r.createElementVNode)("ul",null,[(null===(G=e.commentOrReplyEntry)||void 0===G?void 0:G.replied_by)==(null===(W=(0,r.unref)(o.qt)().props)||void 0===W?void 0:W.username)||(null===(Y=e.commentOrReplyEntry)||void 0===Y?void 0:Y.commented_by)==(null===(q=(0,r.unref)(o.qt)().props)||void 0===q?void 0:q.username)?((0,r.openBlock)(),(0,r.createElementBlock)("span",g,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small",btnFunc:function(){var t;return j("edit",null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)}},{default:(0,r.withCtx)((function(){return[b,R]})),_:1},8,["btnFunc"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small",btnFunc:L},{default:(0,r.withCtx)((function(){return[w,B]})),_:1})])])):((0,r.openBlock)(),(0,r.createElementBlock)("span",O,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small",btnFunc:function(){var t;return j("reply",null===(t=e.commentOrReplyEntry)||void 0===t?void 0:t.id)}},{default:(0,r.withCtx)((function(){return[I,C]})),_:1},8,["btnFunc"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small"},{default:(0,r.withCtx)((function(){return[k,N]})),_:1})])]))],512),[[r.vShow,!P.hasEditOrRelpyBtnBeenClicked]]),(0,r.withDirectives)((0,r.createElementVNode)("ul",null,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small",btnFunc:function(){return function(){var e={};if(e.updateOrDelete=P.saveUpdateOrDelete,e.entryIndex=F.commentOrReplyEntryIndex,"comment"==F.commentOrReplyEntryParentName)e.oldCommentMsg=P.oldCommentOrReplyEntryBody,e.newCommentMsg=P.commentOrReplyEntryBody,e.commentId=F.commentOrReplyToBeEditId;else{if("reply"!=F.commentOrReplyEntryParentName)return;e.oldReplyMsg=P.oldCommentOrReplyEntryBody,e.newReplyMsg=P.commentOrReplyEntryBody,e.replyId=F.commentOrReplyToBeEditId,e.mainCommentId=F.mainCommentId,e.totalCommentReplies=F.totalCommentReplies}"update"==P.saveUpdateOrDelete&&U("handleUpdate",e)}()}},{default:(0,r.withCtx)((function(){return[S,x]})),_:1},8,["btnFunc"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(l.Z,{customClass:"small",btnFunc:function(){return z()}},{default:(0,r.withCtx)((function(){return[V,T]})),_:1},8,["btnFunc"])])],512),[[r.vShow,P.hasEditOrRelpyBtnBeenClicked]])])],2)])])])]))}}}},3560:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(821),o=n(8422),l=n(8499),a=n(1682),i=n(1293),c=n(1694),s=n(8585);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){p=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var l=t&&t.prototype instanceof y?t:y,a=Object.create(l.prototype),i=new k(o||[]);return r(a,"_invoke",{value:B(e,n,i)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function y(){}function f(){}function v(){}var E={};c(E,l,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(N([])));g&&g!==t&&n.call(g,l)&&(E=g);var b=v.prototype=y.prototype=Object.create(E);function R(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(r,l,a,i){var c=m(e[r],e,l);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==d(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){o("next",e,a,i)}),(function(e){o("throw",e,a,i)})):t.resolve(u).then((function(e){s.value=e,a(s)}),(function(e){return o("throw",e,a,i)}))}i(c.arg)}var l;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return l=l?l.then(r,r):r()}})}function B(e,t,n){var r="suspendedStart";return function(o,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw l;return S()}for(n.method=o,n.arg=l;;){var a=n.delegate;if(a){var i=O(a,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=m(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function O(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var o=m(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,u;var l=o.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function N(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v,r(b,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:f,configurable:!0}),f.displayName=c(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},R(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,l){void 0===l&&(l=Promise);var a=new w(s(t,n,r,o),l);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},R(b),c(b,i,"Generator"),c(b,l,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],a=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var l=o;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var a=l?l.completion:{};return a.type=e,a.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function y(e,t,n,r,o,l,a){try{var i=e[l](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function a(e){y(l,r,o,a,i,"next",e)}function i(e){y(l,r,o,a,i,"throw",e)}a(void 0)}))}}var v={key:0,class:"replies-section-wrapper"},E={key:0,class:"comment-replies-wrapper"},h={key:0},g={key:0,class:"mb-4"},b={key:0,class:"reply-parent-warpper"},R={key:0},w={key:1},B={key:2},O={class:"comment-or-reply-detail-head"},I={class:"bolded"},C={class:"comment-or-reply-detail-date"},k={key:0},N={key:1},S={key:0,class:"reply-children-warpper"},x={key:0},V={key:1},T={key:2},D={class:"comment-or-reply-detail-head"},U={class:"bolded"},F={class:"comment-or-reply-detail-date"},_={key:0},P={key:1};const L={name:"Replies",props:{commentEntry:{type:Object,default:{}},commentEntryIndex:{type:Number,default:null},isNewreplyBeenAdded:{type:Boolean,default:!1},isNewreplyBeenAddedCommentId:{type:Number,default:0}},emits:["updateCommentTotalReply"],setup:function(e,t){var n=t.emit,d=e,u=(0,r.reactive)({customErr:"",customSuccess:"",repliesData:[],replyTobeEditedId:0,allowUserToReplyId:0,isReplyUpdatedSuccess:!1,isReplyUpdatingOrdeleting:!1,commentToBeProcessedIds:[],isFetchingReply:!1,isCommentReplyFormShowing:!1,isRepliesWrapperShowing:!1,deletedReplyIds:[]}),y=function(){var e=f(p().mark((function e(t){var r,o,l,a,i,m,y,f,v,E,h,g;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.updateOrDelete,o=t.oldReplyMsg,l=t.newReplyMsg,a=t.replyId,i=t.entryIndex,m=t.mainCommentId,y=t.totalCommentReplies,f=!1,v="Reply deleted successfully","update"==r&&(""==l&&(u.customErr="Please fill in your reply",f=!0),o==l&&(u.customErr="Please make changes before saving",f=!0),v="Reply updated successfully"),"delete"==r&&(f=!window.confirm("Delete this reply ? please note this can not be undone")),f){e.next=21;break}return u.isReplyUpdatingOrdeleting=!0,u.isReplyUpdatedSuccess=!1,e.prev=7,e.next=10,s.Z.post("/blog/update-or-delete-reply",{replyId:a,replyMsg:l,commentId:m,totalCommentReplies:y,updateOrDelete:r});case 10:!0===(null==(h=e.sent)||null===(E=h.data)||void 0===E?void 0:E.outcome)?(u.customSuccess=v,setTimeout((function(){u.customSuccess="",u.replyTobeEditedId=0,u.allowUserToReplyId=0,"update"==r?(u.repliesData[i].body=l,u.isReplyUpdatedSuccess=!0,u.commentToBeProcessedIds=[],u.isCommentReplyFormShowing=!1,setTimeout((function(){u.commentToBeProcessedIds.push(m),u.isRepliesWrapperShowing=!0}),5)):"delete"==r?(u.deletedReplyIds.push(a),n("updateCommentTotalReply",{index:d.commentEntryIndex,action:"delete",newReplyData:{}})):u.customErr=(0,c.de)()}),1e3)):u.customErr=null==h||null===(g=h.data)||void 0===g?void 0:g.outcome[0],e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),u.customErr=(0,c.de)(),console.log("UPDATE OR DELETE RPLIES REPLY ERR =>",e.t0);case 18:return e.prev=18,u.isReplyUpdatingOrdeleting=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[7,14,18,21]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.replyId,r=e.replyBody,o=e.commentId,l=e.totalCommentReplies,a=e.replyToUsername,i=!1;""==r&&(i=!0,u.customErr="*Please fill in your reply"),i||(u.isReplyUpdatingOrdeleting=!0,setTimeout(f(p().mark((function e(){var i,m,y;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/blog/save-comment-reply",{replyId:t,replyMsg:r,commentId:o,totalCommentReplies:l,action:"replies-reply",replyToUsername:a});case 3:!0===(null==(m=e.sent)||null===(i=m.data)||void 0===i?void 0:i.outcome)?(u.customSuccess="Your reply has been successfully saved, thank you",setTimeout((function(){u.customSuccess="",u.replyTobeEditedId=0,u.allowUserToReplyId=0,u.repliesData=(0,c.kc)(o,u.repliesData,"comment_id","obj"),Z(o),n("updateCommentTotalReply",{index:d.commentEntryIndex,action:"add",newReplyData:{}})}),1e3)):u.customErr=null==m||null===(y=m.data)||void 0===y?void 0:y.outcome[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.customErr=(0,c.de)();case 10:return e.prev=10,u.isReplyUpdatingOrdeleting=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),1e3))},j=function(){u.customErr=""},z=function(e){u.replyTobeEditedId=e},A=function(e){0==e&&(u.replyTobeEditedId=0),u.allowUserToReplyId=e},Z=function(e){u.isFetchingReply=!0,setTimeout(f(p().mark((function t(){var n,r,o,l;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post("/blog/fetch-comment-replies",{commentId:e});case 3:""!=(null==(r=t.sent)||null===(n=r.data)||void 0===n?void 0:n.error)?u.customErr=null==r||null===(o=r.data)||void 0===o?void 0:o.error:u.repliesData=[].concat(m(u.repliesData),m(null==r||null===(l=r.data)||void 0===l?void 0:l.repliesData)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),u.customErr=(0,c.de)();case 10:return t.prev=10,u.isFetchingReply=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])}))),300)},M=function(e){(u.isCommentReplyFormShowing&&(u.commentToBeProcessedIds=[],u.isCommentReplyFormShowing=!1),function(e){return!!(0,c.U0)(e,u.commentToBeProcessedIds,"commentId","arr")&&(u.commentToBeProcessedIds=(0,c.kc)(e,u.commentToBeProcessedIds,"","arr"),!0)}(e))||(u.commentToBeProcessedIds.push(e),u.isRepliesWrapperShowing=!0,(0,c.U0)(e,u.repliesData,"comment_id","obj")||Z(e))},H=function(e){return(0,c.U0)(e,u.commentToBeProcessedIds,"commentId","arr")},G=function(e){return(0,c.U0)(e,u.deletedReplyIds,"","arr")};return(0,r.watch)((function(){return d.isNewreplyBeenAdded}),(function(e,t){e&&(u.repliesData=(0,c.kc)(d.isNewreplyBeenAddedCommentId,u.repliesData,"comment_id","obj"),Z(d.isNewreplyBeenAddedCommentId))})),function(t,n){var c;return e.commentEntry.reply_total>0?((0,r.openBlock)(),(0,r.createElementBlock)("section",v,[(0,r.createVNode)(a.Z,{customClassObj:{"comment-total-reply-btn":!0,"comment-total-reply-btn-active":H(e.commentEntry.id)&&u.isRepliesWrapperShowing},noBtnStyle:!0,btnFunc:function(){return M(e.commentEntry.id)}},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("i",{class:(0,r.normalizeClass)(H(e.commentEntry.id)&&u.isRepliesWrapperShowing?"fa fa-chevron-up":"fa fa-chevron-down")},null,2),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.commentEntry.reply_total)+(0,r.toDisplayString)(e.commentEntry.reply_total>1?" replies":" reply"),1)]})),_:1},8,["customClassObj","btnFunc"]),H(e.commentEntry.id)&&u.isRepliesWrapperShowing?((0,r.openBlock)(),(0,r.createElementBlock)("div",E,[(0,r.withDirectives)((0,r.createElementVNode)("section",null,[(0,r.createVNode)(i.Z,{loaderSize:"small",loaderPSizeClassName:"small"})],512),[[r.vShow,u.isFetchingReply]]),(null===(c=u.repliesData)||void 0===c?void 0:c.length)>0?((0,r.openBlock)(),(0,r.createElementBlock)("div",h,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(u.repliesData,(function(t,a){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:a},[(0,r.withDirectives)((0,r.createElementVNode)("div",null,[t.comment_id==e.commentEntry.id?((0,r.openBlock)(),(0,r.createElementBlock)("div",g,[(0,r.createElementVNode)("form",{onSubmit:n[0]||(n[0]=(0,r.withModifiers)((function(){}),["prevent"]))},[0==t.parent_id?((0,r.openBlock)(),(0,r.createElementBlock)("div",b,[u.isReplyUpdatingOrdeleting&&u.replyTobeEditedId==t.id?((0,r.openBlock)(),(0,r.createElementBlock)("div",R,[(0,r.createVNode)(i.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):!u.isReplyUpdatingOrdeleting&&u.replyTobeEditedId==t.id&&""!=u.customSuccess||""!=u.customErr?((0,r.openBlock)(),(0,r.createElementBlock)("div",w,[(0,r.withDirectives)((0,r.createElementVNode)("span",{class:"text-danger small"},(0,r.toDisplayString)(u.customErr),513),[[r.vShow,""!=u.customErr]]),(0,r.withDirectives)((0,r.createElementVNode)("span",{class:"text-success small"},(0,r.toDisplayString)(u.customSuccess),513),[[r.vShow,""!=u.customSuccess]])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",B,[(0,r.createElementVNode)("p",O,[(0,r.createElementVNode)("span",I,(0,r.toDisplayString)(t.replied_by),1),(0,r.createElementVNode)("span",C," replied on "+(0,r.toDisplayString)(t.created_at),1)]),u.allowUserToReplyId==t.id?((0,r.openBlock)(),(0,r.createElementBlock)("section",k,[(0,r.createVNode)(l.default,{onHandleSaveReply:L,onUpdateAllowReplyId:A,onHideErrors:j,commentOrReplyBody:t.body,replyId:t.id,totalCommentReplies:e.commentEntry.reply_total,commentId:e.commentEntry.id,replyToUsername:t.replied_by,commentOrReplyToBeEditId:u.replyTobeEditedId,isFormProcessing:u.isReplyUpdatingOrdeleting,commentOrReplyIndex:a},null,8,["commentOrReplyBody","replyId","totalCommentReplies","commentId","replyToUsername","commentOrReplyToBeEditId","isFormProcessing","commentOrReplyIndex"])])):((0,r.openBlock)(),(0,r.createElementBlock)("section",N,[(0,r.createVNode)(o.default,{onHideErrors:j,onHandleUpdate:y,onHandleDelete:y,onCheckIfUserHasAlreadyReply:A,onUpdateCommentTobEditedId:z,mainCommentId:e.commentEntry.id,totalCommentReplies:e.commentEntry.reply_total,commentOrReplyEntry:t,commentOrReplyEntryIndex:a,commentOrReplyToBeEditId:u.replyTobeEditedId,isCommentOrReplyEntryUpdatedSuccess:u.isReplyUpdatedSuccess,commentOrReplyEntryParentName:"reply"},null,8,["mainCommentId","totalCommentReplies","commentOrReplyEntry","commentOrReplyEntryIndex","commentOrReplyToBeEditId","isCommentOrReplyEntryUpdatedSuccess"])]))]))])):(0,r.createCommentVNode)("",!0),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(u.repliesData,(function(n,a){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:a},[(0,r.withDirectives)((0,r.createElementVNode)("div",null,[t.id==n.parent_id?((0,r.openBlock)(),(0,r.createElementBlock)("div",S,[u.isReplyUpdatingOrdeleting&&u.replyTobeEditedId==n.id?((0,r.openBlock)(),(0,r.createElementBlock)("div",x,[(0,r.createVNode)(i.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):!u.isReplyUpdatingOrdeleting&&u.replyTobeEditedId==n.id&&""!=u.customSuccess||""!=u.customErr?((0,r.openBlock)(),(0,r.createElementBlock)("div",V,[(0,r.withDirectives)((0,r.createElementVNode)("span",{class:"text-danger small"},(0,r.toDisplayString)(u.customErr),513),[[r.vShow,""!=u.customErr]]),(0,r.withDirectives)((0,r.createElementVNode)("span",{class:"text-success small"},(0,r.toDisplayString)(u.customSuccess),513),[[r.vShow,""!=u.customSuccess]])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",T,[(0,r.createElementVNode)("p",D,[(0,r.createElementVNode)("span",U,(0,r.toDisplayString)(n.replied_by),1),(0,r.createElementVNode)("span",F," replied on "+(0,r.toDisplayString)(n.created_at),1)]),u.allowUserToReplyId==n.id?((0,r.openBlock)(),(0,r.createElementBlock)("section",_,[(0,r.createVNode)(l.default,{onHandleSaveReply:L,onUpdateAllowReplyId:A,onHideErrors:j,commentOrReplyBody:n.body,replyId:n.id,commentId:e.commentEntry.id,replyToUsername:n.replied_by,totalCommentReplies:e.commentEntry.reply_total,commentOrReplyToBeEditId:u.replyTobeEditedId,isFormProcessing:u.isReplyUpdatingOrdeleting,commentOrReplyIndex:a},null,8,["commentOrReplyBody","replyId","commentId","replyToUsername","totalCommentReplies","commentOrReplyToBeEditId","isFormProcessing","commentOrReplyIndex"])])):((0,r.openBlock)(),(0,r.createElementBlock)("section",P,[(0,r.createVNode)(o.default,{onHideErrors:j,onHandleUpdate:y,onHandleDelete:y,onCheckIfUserHasAlreadyReply:A,onUpdateCommentTobEditedId:z,mainCommentId:e.commentEntry.id,totalCommentReplies:e.commentEntry.reply_total,commentOrReplyEntry:n,commentOrReplyEntryIndex:a,commentOrReplyToBeEditId:u.replyTobeEditedId,isCommentOrReplyEntryUpdatedSuccess:u.isReplyUpdatedSuccess,commentOrReplyEntryParentName:"reply"},null,8,["mainCommentId","totalCommentReplies","commentOrReplyEntry","commentOrReplyEntryIndex","commentOrReplyToBeEditId","isCommentOrReplyEntryUpdatedSuccess"])]))]))])):(0,r.createCommentVNode)("",!0)],512),[[r.vShow,!G(n.id)]])])})),128))],32)])):(0,r.createCommentVNode)("",!0)],512),[[r.vShow,!G(t.id)]])])})),128))])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)}}}},8499:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(821),o=(n(9285),n(1682)),l=n(1293),a=n(1694),i={key:0,class:"pt-2 pb-2"},c={key:1,class:"reply-wrapper"},s={class:"small reply-body-wrapper"},d={class:"existing-comment-or-reply-form input-group"},m={class:"input-group-append"},u={class:"existing-comment-or-reply-ellipse-btn-active"},p=(0,r.createElementVNode)("span",null,[(0,r.createElementVNode)("i",{class:"fa fa-times"})],-1),y={class:"existing-comment-or-reply-btn-wrapper"},f={class:"existing-comment-or-reply-action-btn-wrapper existing-comment-or-reply-btn-wrapper-active"},v=(0,r.createElementVNode)("i",{class:"fa fa-check"},null,-1),E=(0,r.createTextVNode)(" Save"),h=(0,r.createElementVNode)("i",{class:"fa fa-times"},null,-1),g=(0,r.createTextVNode)(" Cancel");const b={name:"ReplyForm",props:{commentOrReplyIndex:{type:Number,default:0},commentOrReplyBody:{type:String,default:""},isFormProcessing:{type:Boolean,default:!1},replyId:{type:Number,default:0},commentId:{type:Number,default:0},totalCommentReplies:{type:Number,default:0},replyToUsername:{type:String,default:""},requestSlug:{type:String,default:""}},emits:["updateAllowReplyId","handleSaveReply","hideErrors"],setup:function(e,t){var n=t.emit,b=e,R=(0,r.ref)(null),w=(0,r.reactive)({replyBody:""}),B=function(){n("updateAllowReplyId",0)},O=function(){n("hideErrors")};return(0,r.onMounted)((function(){null!=R.value&&(0,a.eY)(R)})),function(t,a){return e.isFormProcessing?((0,r.openBlock)(),(0,r.createElementBlock)("section",i,[(0,r.createVNode)(l.Z,{loaderSize:"small",loaderPSizeClassName:"small"})])):((0,r.openBlock)(),(0,r.createElementBlock)("section",c,[(0,r.createElementVNode)("div",s,(0,r.toDisplayString)(e.commentOrReplyBody),1),(0,r.createElementVNode)("div",d,[(0,r.withDirectives)((0,r.createElementVNode)("input",{ref_key:"replyInputRef",ref:R,"onUpdate:modelValue":a[0]||(a[0]=function(e){return w.replyBody=e}),type:"text",class:"form-control existing-comment-or-reply-form-input existing-comment-or-reply-input-active",onFocus:O},null,544),[[r.vModelText,w.replyBody]]),(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("span",u,[(0,r.createVNode)(o.Z,{btnFunc:function(){return B()}},{default:(0,r.withCtx)((function(){return[p]})),_:1},8,["btnFunc"])]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("section",null,[(0,r.createElementVNode)("ul",null,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(o.Z,{customClass:"small",btnFunc:function(){return(e={}).replyId=b.replyId,e.replyBody=w.replyBody,e.commentId=b.commentId,e.totalCommentReplies=b.totalCommentReplies,e.replyToUsername=b.replyToUsername,e.commentOrReplyIndex=b.commentOrReplyIndex,void n("handleSaveReply",e);var e}},{default:(0,r.withCtx)((function(){return[v,E]})),_:1},8,["btnFunc"])]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(o.Z,{customClass:"small",btnFunc:function(){return B()}},{default:(0,r.withCtx)((function(){return[h,g]})),_:1},8,["btnFunc"])])])])])])])])]))}}}},1682:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=["title","type"];const i={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var t=e,n=(0,r.reactive)({defaultClassName:"no-border-radius btn shadow-none "+t.customClass});return function(t,o){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.withDirectives)((0,r.createElementVNode)("button",{title:e.btnTitle,type:e.btnType,class:(0,r.normalizeClass)(l({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},n.defaultClassName,!0)),onClick:o[0]||(o[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.renderSlot)(t.$slots,"default")],10,a),[[r.vShow,!e.noBtnStyle]]),(0,r.withDirectives)((0,r.createElementVNode)("button",{class:(0,r.normalizeClass)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:o[1]||(o[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.renderSlot)(t.$slots,"default")],2),[[r.vShow,e.noBtnStyle]])],64)}}}},1293:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(821),o=[(0,r.createElementVNode)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const l={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var t=e,n=(0,r.ref)(""),l=(0,r.ref)("");return(0,r.onMounted)((function(){"large"==t.loaderSize&&(l.value="fa-3x"),"med"==t.loaderSize&&(l.value="fa-2x"),"small"==t.loaderSize&&(l.value="fa-1x"),t.centerLoader&&(n.value="loader"),null!==t.position&&"full-page"===t.position&&(n.value="".concat(n.value," full-page-loader")),t.dot&&(n.value="".concat(n.value," loader-dot"))})),function(t,a){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[e.dot?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,class:(0,r.normalizeClass)((0,r.unref)(n))},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)((0,r.unref)(l))},"..........",2)],2)):(0,r.createCommentVNode)("",!0),e.dot?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:1,class:(0,r.normalizeClass)((0,r.unref)(n))},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)((0,r.unref)(l))},o,2),(0,r.createElementVNode)("p",{class:(0,r.normalizeClass)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}}}]);