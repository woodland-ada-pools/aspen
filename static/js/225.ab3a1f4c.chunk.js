(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[225],{190:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,t=(i=a(33))&&i.__esModule?i:{default:i};var r={ordinalNumber:function(e,n){var a=Number(e);if(a<=0||a>10)return a;var i=String((n||{}).unit),t=a-1;return["year","hour","minute","second"].indexOf(i)>=0?["\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4","\u05e9\u05e0\u05d9\u05d9\u05d4","\u05e9\u05dc\u05d9\u05e9\u05d9\u05ea","\u05e8\u05d1\u05d9\u05e2\u05d9\u05ea","\u05d7\u05de\u05d9\u05e9\u05d9\u05ea","\u05e9\u05d9\u05e9\u05d9\u05ea","\u05e9\u05d1\u05d9\u05e2\u05d9\u05ea","\u05e9\u05de\u05d9\u05e0\u05d9\u05ea","\u05ea\u05e9\u05d9\u05e2\u05d9\u05ea","\u05e2\u05e9\u05d9\u05e8\u05d9\u05ea"][t]:["\u05e8\u05d0\u05e9\u05d5\u05df","\u05e9\u05e0\u05d9","\u05e9\u05dc\u05d9\u05e9\u05d9","\u05e8\u05d1\u05d9\u05e2\u05d9","\u05d7\u05de\u05d9\u05e9\u05d9","\u05e9\u05d9\u05e9\u05d9","\u05e9\u05d1\u05d9\u05e2\u05d9","\u05e9\u05de\u05d9\u05e0\u05d9","\u05ea\u05e9\u05d9\u05e2\u05d9","\u05e2\u05e9\u05d9\u05e8\u05d9"][t]},era:(0,t.default)({values:{narrow:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],abbreviated:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],wide:["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u05e8\u05d1\u05e2\u05d5\u05df 1","\u05e8\u05d1\u05e2\u05d5\u05df 2","\u05e8\u05d1\u05e2\u05d5\u05df 3","\u05e8\u05d1\u05e2\u05d5\u05df 4"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["\u05d9\u05e0\u05d5\u05f3","\u05e4\u05d1\u05e8\u05f3","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05f3","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05f3","\u05e1\u05e4\u05d8\u05f3","\u05d0\u05d5\u05e7\u05f3","\u05e0\u05d5\u05d1\u05f3","\u05d3\u05e6\u05de\u05f3"],wide:["\u05d9\u05e0\u05d5\u05d0\u05e8","\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05d9\u05dc","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e4\u05d8\u05de\u05d1\u05e8","\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8","\u05e0\u05d5\u05d1\u05de\u05d1\u05e8","\u05d3\u05e6\u05de\u05d1\u05e8"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["\u05d0\u05f3","\u05d1\u05f3","\u05d2\u05f3","\u05d3\u05f3","\u05d4\u05f3","\u05d5\u05f3","\u05e9\u05f3"],short:["\u05d0\u05f3","\u05d1\u05f3","\u05d2\u05f3","\u05d3\u05f3","\u05d4\u05f3","\u05d5\u05f3","\u05e9\u05f3"],abbreviated:["\u05d9\u05d5\u05dd \u05d0\u05f3","\u05d9\u05d5\u05dd \u05d1\u05f3","\u05d9\u05d5\u05dd \u05d2\u05f3","\u05d9\u05d5\u05dd \u05d3\u05f3","\u05d9\u05d5\u05dd \u05d4\u05f3","\u05d9\u05d5\u05dd \u05d5\u05f3","\u05e9\u05d1\u05ea"],wide:["\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df","\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9","\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9","\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"},abbreviated:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"},wide:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d1\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"},abbreviated:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"},wide:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);
//# sourceMappingURL=225.ab3a1f4c.chunk.js.map