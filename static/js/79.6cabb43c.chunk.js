(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[79],{330:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,u,r){var n=s[e];if("function"===typeof n)return n(t,u,r);return n};var r,n=(r=u(834))&&r.__esModule?r:{default:r};var o=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function a(e){return 4===e?"'vo' eeee 'o' p":"'v "+o[e]+" o' p"}var s={lastWeek:function(e,t,u){var r=e.getUTCDay();return(0,n.default)(e,t,u)?a(r):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minul\xfa "+t+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(r)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,u){var r=e.getUTCDay();return(0,n.default)(e,t,u)?a(r):function(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'bud\xfacu' "+t+" 'o' p";default:return"'bud\xfaci' eeee 'o' p"}}(r)},other:"P"};e.exports=t.default},834:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,u){(0,n.default)(2,arguments);var o=(0,r.default)(e,u),a=(0,r.default)(t,u);return o.getTime()===a.getTime()};var r=o(u(44)),n=o(u(4));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=79.6cabb43c.chunk.js.map