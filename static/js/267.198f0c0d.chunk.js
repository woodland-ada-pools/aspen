(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[267],{234:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,t=(i=a(33))&&i.__esModule?i:{default:i};var d={ordinalNumber:function(e,n){var a=Number(e);return 1===a?a+"-\u10da\u10d8":a+"-\u10d4"},era:(0,t.default)({values:{narrow:["\u10e9.\u10ec-\u10db\u10d3\u10d4","\u10e9.\u10ec"],abbreviated:["\u10e9\u10d5.\u10ec-\u10db\u10d3\u10d4","\u10e9\u10d5.\u10ec"],wide:["\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4","\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u10da\u10d8 \u10d9\u10d5","2-\u10d4 \u10d9\u10d5","3-\u10d4 \u10d9\u10d5","4-\u10d4 \u10d9\u10d5"],wide:["1-\u10da\u10d8 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","2-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","3-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","4-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:{narrow:["\u10d8\u10d0","\u10d7\u10d4","\u10db\u10d0","\u10d0\u10de","\u10db\u10e1","\u10d5\u10dc","\u10d5\u10da","\u10d0\u10d2","\u10e1\u10d4","\u10dd\u10e5","\u10dc\u10dd","\u10d3\u10d4"],abbreviated:["\u10d8\u10d0\u10dc","\u10d7\u10d4\u10d1","\u10db\u10d0\u10e0","\u10d0\u10de\u10e0","\u10db\u10d0\u10d8","\u10d8\u10d5\u10dc","\u10d8\u10d5\u10da","\u10d0\u10d2\u10d5","\u10e1\u10d4\u10e5","\u10dd\u10e5\u10e2","\u10dc\u10dd\u10d4","\u10d3\u10d4\u10d9"],wide:["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8","\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8","\u10db\u10d0\u10e0\u10e2\u10d8","\u10d0\u10de\u10e0\u10d8\u10da\u10d8","\u10db\u10d0\u10d8\u10e1\u10d8","\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8","\u10d8\u10d5\u10da\u10d8\u10e1\u10d8","\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd","\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8","\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["\u10d9\u10d5","\u10dd\u10e0","\u10e1\u10d0","\u10dd\u10d7","\u10ee\u10e3","\u10de\u10d0","\u10e8\u10d0"],short:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],abbreviated:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],wide:["\u10d9\u10d5\u10d8\u10e0\u10d0","\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8","\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"}},defaultFormattingWidth:"wide"})};n.default=d,e.exports=n.default}}]);
//# sourceMappingURL=267.198f0c0d.chunk.js.map