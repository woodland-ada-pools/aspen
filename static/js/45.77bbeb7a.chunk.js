(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[45,273,274,275,276,277],{243:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a){var r;a=a||{},r="string"===typeof u[t]?u[t]:n(1===e?u[t].one:u[t].other,a);return r.replace("{{count}}",e)};var u={lessThanXSeconds:{one:{default:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"},other:{default:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"}},xSeconds:{one:{default:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd",future:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0ca8\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",future:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd\u200c\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0ccd \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},halfAMinute:{other:{default:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",future:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0c85\u0cb0\u0ccd\u0ca7 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},lessThanXMinutes:{one:{default:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"},other:{default:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",future:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6",past:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c95\u0ccd\u0c95\u0cbf\u0c82\u0ca4 \u0c95\u0ca1\u0cbf\u0cae\u0cc6"}},xMinutes:{one:{default:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",future:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca8\u0cbf\u0cae\u0cbf\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXHours:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6\u0caf\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0c97\u0c82\u0c9f\u0cc6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xHours:{one:{default:"1 \u0c97\u0c82\u0c9f\u0cc6",future:"1 \u0c97\u0c82\u0c9f\u0cc6\u0caf\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0c97\u0c82\u0c9f\u0cc6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cc1",future:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0c97\u0c82\u0c9f\u0cc6\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xDays:{one:{default:"1 \u0ca6\u0cbf\u0ca8",future:"1 \u0ca6\u0cbf\u0ca8\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca6\u0cbf\u0ca8\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca6\u0cbf\u0ca8\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXMonths:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xMonths:{one:{default:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",future:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},aboutXYears:{one:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cc1",future:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cb8\u0cc1\u0cae\u0cbe\u0cb0\u0cc1 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},xYears:{one:{default:"1 \u0cb5\u0cb0\u0ccd\u0cb7",future:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"},other:{default:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cc1",future:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cb9\u0cbf\u0c82\u0ca6\u0cc6"}},overXYears:{one:{default:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6",future:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6",past:"1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6 \u0cae\u0cc7\u0cb2\u0cc6"},other:{default:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6",future:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6",past:"{{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3 \u0cae\u0cc7\u0cb2\u0cc6"}},almostXYears:{one:{default:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",future:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 1 \u0cb5\u0cb0\u0ccd\u0cb7\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf"},other:{default:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",future:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf",past:"\u0cac\u0cb9\u0cc1\u0ca4\u0cc7\u0c95 {{count}} \u0cb5\u0cb0\u0ccd\u0cb7\u0c97\u0cb3\u0cb2\u0ccd\u0cb2\u0cbf"}}};function n(t,e){return e.addSuffix?e.comparison>0?t.future:t.past:t.default}t.exports=e.default},244:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,n=(u=a(32))&&u.__esModule?u:{default:u};var r={date:(0,n.default)({formats:{full:"EEEE, MMMM d, y",long:"MMMM d, y",medium:"MMM d, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},245:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,n){return u[t]};var u={lastWeek:"'\u0c95\u0cb3\u0cc6\u0ca6' eeee p '\u0c95\u0ccd\u0c95\u0cc6'",yesterday:"'\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6' p '\u0c95\u0ccd\u0c95\u0cc6'",today:"'\u0c87\u0c82\u0ca6\u0cc1' p '\u0c95\u0ccd\u0c95\u0cc6'",tomorrow:"'\u0ca8\u0cbe\u0cb3\u0cc6' p '\u0c95\u0ccd\u0c95\u0cc6'",nextWeek:"eeee p '\u0c95\u0ccd\u0c95\u0cc6'",other:"P"};t.exports=e.default},246:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,n=(u=a(33))&&u.__esModule?u:{default:u};var r={ordinalNumber:function(t,e){return Number(t)+"\u0ca8\u0cc7"},era:(0,n.default)({values:{narrow:["\u0c95\u0ccd\u0cb0\u0cbf.\u0caa\u0cc2","\u0c95\u0ccd\u0cb0\u0cbf.\u0cb6"],abbreviated:["\u0c95\u0ccd\u0cb0\u0cbf.\u0caa\u0cc2","\u0c95\u0ccd\u0cb0\u0cbf.\u0cb6"],wide:["\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0caa\u0cc2\u0cb0\u0ccd\u0cb5","\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0cb6\u0c95"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0ca4\u0ccd\u0cb0\u0cc8 1","\u0ca4\u0ccd\u0cb0\u0cc8 2","\u0ca4\u0ccd\u0cb0\u0cc8 3","\u0ca4\u0ccd\u0cb0\u0cc8 4"],wide:["1\u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95","2\u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95","3\u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95","4\u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,n.default)({values:{narrow:["\u0c9c","\u0cab\u0cc6","\u0cae\u0cbe","\u0c8f","\u0cae\u0cc7","\u0c9c\u0cc2","\u0c9c\u0cc1","\u0c86","\u0cb8\u0cc6","\u0c85","\u0ca8","\u0ca1\u0cbf"],abbreviated:["\u0c9c\u0ca8","\u0cab\u0cc6\u0cac\u0ccd\u0cb0","\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd","\u0c8f\u0caa\u0ccd\u0cb0\u0cbf","\u0cae\u0cc7","\u0c9c\u0cc2\u0ca8\u0ccd","\u0c9c\u0cc1\u0cb2\u0cc8","\u0c86\u0c97","\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82","\u0c85\u0c95\u0ccd\u0c9f\u0ccb","\u0ca8\u0cb5\u0cc6\u0c82","\u0ca1\u0cbf\u0cb8\u0cc6\u0c82"],wide:["\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf","\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf","\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd","\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd","\u0cae\u0cc7","\u0c9c\u0cc2\u0ca8\u0ccd","\u0c9c\u0cc1\u0cb2\u0cc8","\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd","\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd","\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd","\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd","\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["\u0cad\u0cbe","\u0cb8\u0ccb","\u0cae\u0c82","\u0cac\u0cc1","\u0c97\u0cc1","\u0cb6\u0cc1","\u0cb6"],short:["\u0cad\u0cbe\u0ca8\u0cc1","\u0cb8\u0ccb\u0cae","\u0cae\u0c82\u0c97\u0cb3","\u0cac\u0cc1\u0ca7","\u0c97\u0cc1\u0cb0\u0cc1","\u0cb6\u0cc1\u0c95\u0ccd\u0cb0","\u0cb6\u0ca8\u0cbf"],abbreviated:["\u0cad\u0cbe\u0ca8\u0cc1","\u0cb8\u0ccb\u0cae","\u0cae\u0c82\u0c97\u0cb3","\u0cac\u0cc1\u0ca7","\u0c97\u0cc1\u0cb0\u0cc1","\u0cb6\u0cc1\u0c95\u0ccd\u0cb0","\u0cb6\u0ca8\u0cbf"],wide:["\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0","\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0","\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0","\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0","\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0","\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0","\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",pm:"\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8",midnight:"\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},abbreviated:{am:"\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",pm:"\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8",midnight:"\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},wide:{am:"\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",pm:"\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8",midnight:"\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0caa\u0cc2",pm:"\u0c85",midnight:"\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},abbreviated:{am:"\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",pm:"\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8",midnight:"\u0cae\u0ca7\u0ccd\u0caf \u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},wide:{am:"\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",pm:"\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8",midnight:"\u0cae\u0ca7\u0ccd\u0caf \u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf",noon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",morning:"\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6",afternoon:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9",evening:"\u0cb8\u0c82\u0c9c\u0cc6",night:"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},247:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(a(34)),n=r(a(35));function r(t){return t&&t.__esModule?t:{default:t}}var i={ordinalNumber:(0,u.default)({matchPattern:/^(\d+)(\u0ca8\u0cc7|\u0ca8\u0cc6)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u0c95\u0ccd\u0cb0\u0cbf.\u0caa\u0cc2|\u0c95\u0ccd\u0cb0\u0cbf.\u0cb6)/i,abbreviated:/^(\u0c95\u0ccd\u0cb0\u0cbf\.?\s?\u0caa\u0cc2\.?|\u0c95\u0ccd\u0cb0\u0cbf\.?\s?\u0cb6\.?|\u0caa\u0ccd\u0cb0\.?\s?\u0cb6\.?)/i,wide:/^(\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0caa\u0cc2\u0cb0\u0ccd\u0cb5|\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0cb6\u0c95|\u0caa\u0ccd\u0cb0\u0cb8\u0c95\u0ccd\u0ca4 \u0cb6\u0c95)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0caa\u0cc2/i,/^(\u0cb6|\u0caa\u0ccd\u0cb0)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0ca4\u0ccd\u0cb0\u0cc8[1234]|\u0ca4\u0ccd\u0cb0\u0cc8 [1234]| [1234]\u0ca4\u0ccd\u0cb0\u0cc8/i,wide:/^[1234](\u0ca8\u0cc7)? \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(\u0c9c\u0cc2|\u0c9c\u0cc1|\u0c9c|\u0cab\u0cc6|\u0cae\u0cbe|\u0c8f|\u0cae\u0cc7|\u0c86|\u0cb8\u0cc6|\u0c85|\u0ca8|\u0ca1\u0cbf)/i,abbreviated:/^(\u0c9c\u0ca8|\u0cab\u0cc6\u0cac\u0ccd\u0cb0|\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd|\u0c8f\u0caa\u0ccd\u0cb0\u0cbf|\u0cae\u0cc7|\u0c9c\u0cc2\u0ca8\u0ccd|\u0c9c\u0cc1\u0cb2\u0cc8|\u0c86\u0c97|\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82|\u0c85\u0c95\u0ccd\u0c9f\u0ccb|\u0ca8\u0cb5\u0cc6\u0c82|\u0ca1\u0cbf\u0cb8\u0cc6\u0c82)/i,wide:/^(\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf|\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf|\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd|\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd|\u0cae\u0cc7|\u0c9c\u0cc2\u0ca8\u0ccd|\u0c9c\u0cc1\u0cb2\u0cc8|\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd|\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd|\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd|\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd|\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c9c$/i,/^\u0cab\u0cc6/i,/^\u0cae\u0cbe/i,/^\u0c8f/i,/^\u0cae\u0cc7/i,/^\u0c9c\u0cc2/i,/^\u0c9c\u0cc1$/i,/^\u0c86/i,/^\u0cb8\u0cc6/i,/^\u0c85/i,/^\u0ca8/i,/^\u0ca1\u0cbf/i],any:[/^\u0c9c\u0ca8/i,/^\u0cab\u0cc6/i,/^\u0cae\u0cbe/i,/^\u0c8f/i,/^\u0cae\u0cc7/i,/^\u0c9c\u0cc2\u0ca8\u0ccd/i,/^\u0c9c\u0cc1\u0cb2\u0cc8/i,/^\u0c86/i,/^\u0cb8\u0cc6/i,/^\u0c85/i,/^\u0ca8/i,/^\u0ca1\u0cbf/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(\u0cad\u0cbe|\u0cb8\u0ccb|\u0cae|\u0cac\u0cc1|\u0c97\u0cc1|\u0cb6\u0cc1|\u0cb6)/i,short:/^(\u0cad\u0cbe\u0ca8\u0cc1|\u0cb8\u0ccb\u0cae|\u0cae\u0c82\u0c97\u0cb3|\u0cac\u0cc1\u0ca7|\u0c97\u0cc1\u0cb0\u0cc1|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0|\u0cb6\u0ca8\u0cbf)/i,abbreviated:/^(\u0cad\u0cbe\u0ca8\u0cc1|\u0cb8\u0ccb\u0cae|\u0cae\u0c82\u0c97\u0cb3|\u0cac\u0cc1\u0ca7|\u0c97\u0cc1\u0cb0\u0cc1|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0|\u0cb6\u0ca8\u0cbf)/i,wide:/^(\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0|\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0|\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0|\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0|\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0|\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0cad\u0cbe/i,/^\u0cb8\u0ccb/i,/^\u0cae/i,/^\u0cac\u0cc1/i,/^\u0c97\u0cc1/i,/^\u0cb6\u0cc1/i,/^\u0cb6/i],any:[/^\u0cad\u0cbe/i,/^\u0cb8\u0ccb/i,/^\u0cae/i,/^\u0cac\u0cc1/i,/^\u0c97\u0cc1/i,/^\u0cb6\u0cc1/i,/^\u0cb6/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u0caa\u0cc2|\u0c85|\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9|\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6|\u0cb8\u0c82\u0c9c\u0cc6|\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf)/i,any:/^(\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8|\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8|\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9|\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6|\u0cb8\u0c82\u0c9c\u0cc6|\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0caa\u0cc2/i,pm:/^\u0c85/i,midnight:/\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf/i,noon:/\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9/i,morning:/\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6/i,afternoon:/\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9/i,evening:/\u0cb8\u0c82\u0c9c\u0cc6/i,night:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf/i}},defaultParseWidth:"any"})};e.default=i,t.exports=e.default},446:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=d(a(243)),n=d(a(244)),r=d(a(245)),i=d(a(246)),o=d(a(247));function d(t){return t&&t.__esModule?t:{default:t}}var f={code:"kn",formatDistance:u.default,formatLong:n.default,formatRelative:r.default,localize:i.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=f,t.exports=e.default}}]);
//# sourceMappingURL=45.77bbeb7a.chunk.js.map