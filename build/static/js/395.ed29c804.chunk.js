(self.webpackChunkescapefromdeath=self.webpackChunkescapefromdeath||[]).push([[395],{395:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var e=r(885),i=r(867),c=r(956),o=r.n(c),u="Main_main__kYq9A",a="Main_bacPic__yBkiw",s="Main_darker__BIvU-",p="Main_circleMain__rmd9y",f=r(670),l="Card_card__4-jbm",d=r(834),b=function(t){var n=(0,f.s0)(),r=t.item,c=i.useState(-1),u=(0,e.Z)(c,2),a=u[0],s=u[1];return i.useEffect((function(){o().subscribe("otherCardHidden",(function(t,n){r.id!==n&&s(2)})),o().subscribe("otherCardShow",(function(t,n){r.id!==n&&s(0)}))}),[r]),(0,d.jsxs)("div",{className:l,"data-deg":r.id,onMouseEnter:function(){o().publish("changeBG",r.picStr)},onClick:function(){var t;0!==(t=a)&&-1!==t||(s(1),o().publish("otherCardHidden",r.id))},"data-click":a,children:[(0,d.jsx)("img",{src:r.picStr,alt:"pic"}),(0,d.jsx)("span",{children:r.name}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{children:r.intro}),(0,d.jsxs)("button",{onClick:function(){n(r.path)},children:["\u8fdb\u5165",r.name]})]})},h=function(){var t=i.useState(!1),n=(0,e.Z)(t,2),r=n[0],c=n[1],f=i.useState("picture/bacdefault.jpg"),l=(0,e.Z)(f,2),h=l[0],y=l[1],m=i.useState(!1),j=(0,e.Z)(m,2),O=j[0],S=j[1],g=i.useRef(null),v=i.useRef(null),w=i.useRef("");return i.useEffect((function(){o().subscribe("changeBG",(function(t,n){w.current!==n&&(w.current=n,clearTimeout(g.current),clearTimeout(v.current),S(!0),g.current=setTimeout((function(){y(n)}),250),v.current=setTimeout((function(){S(!1)}),500))}))}),[w]),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{className:a,src:h,alt:"bacPic","data-change":O}),(0,d.jsxs)("div",{className:s,id:"darker",onClick:function(t){!function(t){t.currentTarget===t.target&&o().publish("otherCardShow",-1)}(t)},children:[(0,d.jsx)("div",{className:p,"data-click":r,onClick:function(){return function(t){c(!t)}(r)},children:(0,d.jsx)("div",{children:(0,d.jsx)("span",{children:"\u6682\u65e0\u6d3b\u52a8"})})}),r?[{id:1,name:"\u4ed3\u5e93",picStr:"picture/warestore.jpg",path:"/wareHouse",intro:"\u7528\u4e8e\u50a8\u5b58\u88c5\u5907\u548c\u7269\u54c1\u3002\u4ed3\u5e93\u5927\u5c0f\u6709\u9650\uff0c\u53ef\u4ee5\u6269\u5145\u4f46\u8981\u4ed8\u51fa\u6602\u8d35\u7684\u4ee3\u4ef7\u3002"},{id:2,name:"\u5c0f\u9152\u9986",picStr:"picture/winkBar.jpg",path:"/winkBar",intro:"\u7528\u4e8e\u6062\u590d\u4f53\u529b\u3002\u4e00\u676f\u9152\u8db3\u4ee5\u8ba9\u4f60\u6e05\u9192\u4e00\u6574\u5929\uff0c\u8d5b\u9a6c\u548c\u5e78\u8fd0\u8f6c\u76d8\u6216\u8bb8\u4e5f\u662f\u8d5a\u94b1\u7684\u597d\u65b9\u6cd5\u3002"},{id:3,name:"\u8df3\u86a4\u5e02\u573a",picStr:"picture/swarmp.jpg",path:"/fleaMarket",intro:"\u7528\u4e8e\u4ea4\u6362\u7269\u54c1\u548c\u4e70\u5356\u3002\u4f60\u60f3\u4e70\u4ec0\u4e48\u6216\u8005\u4f60\u60f3\u5356\u4ec0\u4e48\uff1f"},{id:4,name:"\u85cf\u8eab\u5904",picStr:"picture/room.jpg",path:"/refuge",intro:"\u7528\u4e8e\u953b\u70bc\u89d2\u8272\u3002"},{id:5,name:"\u56fe\u9274",picStr:"picture/picjueg.jpg",path:"/atlas",intro:"\u7528\u4e8e\u9274\u8d4f\u5df2\u53d1\u73b0\u7684\u7269\u54c1\u548c\u88c5\u5907\u3002"},{id:6,name:"\u8bbe\u7f6e",picStr:"picture/setting.jpg",path:"/setting",intro:"\u8fdb\u884c\u6e38\u620f\u8bbe\u7f6e\u3002"}].map((function(t){return(0,d.jsx)(b,{item:t},t.id)})):null]})]})}},956:function(t,n,r){t=r.nmd(t),function(r,e){"use strict";var i={};r.PubSub?(i=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=i,function(t){var n={},r=-1,e="*";function i(t){var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!0;return!1}function c(t){return function(){throw t}}function o(t,n,r){try{t(n,r)}catch(e){setTimeout(c(e),0)}}function u(t,n,r){t(n,r)}function a(t,r,e,i){var c,a=n[r],s=i?u:o;if(Object.prototype.hasOwnProperty.call(n,r))for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&s(a[c],t,e)}function s(t,n,r){return function(){var i=String(t),c=i.lastIndexOf(".");for(a(t,t,n,r);-1!==c;)c=(i=i.substr(0,c)).lastIndexOf("."),a(t,i,n,r);a(t,e,n,r)}}function p(t){var r=String(t);return Boolean(Object.prototype.hasOwnProperty.call(n,r)&&i(n[r]))}function f(t){for(var n=String(t),r=p(n)||p(e),i=n.lastIndexOf(".");!r&&-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),r=p(n);return r}function l(t,n,r,e){var i=s(t="symbol"===typeof t?t.toString():t,n,e);return!!f(t)&&(!0===r?i():setTimeout(i,0),!0)}t.publish=function(n,r){return l(n,r,!1,t.immediateExceptions)},t.publishSync=function(n,r){return l(n,r,!0,t.immediateExceptions)},t.subscribe=function(t,e){if("function"!==typeof e)return!1;t="symbol"===typeof t?t.toString():t,Object.prototype.hasOwnProperty.call(n,t)||(n[t]={});var i="uid_"+String(++r);return n[t][i]=e,i},t.subscribeAll=function(n){return t.subscribe(e,n)},t.subscribeOnce=function(n,r){var e=t.subscribe(n,(function(){t.unsubscribe(e),r.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){n={}},t.clearSubscriptions=function(t){var r;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)&&delete n[r]},t.countSubscriptions=function(t){var r,e,i=0;for(r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)){for(e in n[r])i++;break}return i},t.getSubscriptions=function(t){var r,e=[];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t)&&e.push(r);return e},t.unsubscribe=function(r){var e,i,c,o=function(t){var r;for(r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&0===r.indexOf(t))return!0;return!1},u="string"===typeof r&&(Object.prototype.hasOwnProperty.call(n,r)||o(r)),a=!u&&"string"===typeof r,s="function"===typeof r,p=!1;if(!u){for(e in n)if(Object.prototype.hasOwnProperty.call(n,e)){if(i=n[e],a&&i[r]){delete i[r],p=r;break}if(s)for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&i[c]===r&&(delete i[c],p=!0)}return p}t.clearSubscriptions(r)}}(i)),void 0!==t&&t.exports&&(n=t.exports=i),n.PubSub=i,t.exports=n=i}("object"===typeof window&&window||this)}}]);
//# sourceMappingURL=395.ed29c804.chunk.js.map