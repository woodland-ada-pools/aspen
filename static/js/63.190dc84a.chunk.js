(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[63,383,384,385,386,387],{356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a,i=(n=n||{}).addSuffix?o[e].withPreposition:o[e].standalone;a="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",t);if(n.addSuffix)return n.comparison>0?a+"\u0c32\u0c4b":a+" \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02";return a};var o={lessThanXSeconds:{standalone:{one:"\u0c38\u0c46\u0c15\u0c28\u0c41 \u0c15\u0c28\u0c4d\u0c28\u0c3e \u0c24\u0c15\u0c4d\u0c15\u0c41\u0c35",other:"{{count}} \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32 \u0c15\u0c28\u0c4d\u0c28\u0c3e \u0c24\u0c15\u0c4d\u0c15\u0c41\u0c35"},withPreposition:{one:"\u0c38\u0c46\u0c15\u0c28\u0c41",other:"{{count}} \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32"}},xSeconds:{standalone:{one:"\u0c12\u0c15 \u0c38\u0c46\u0c15\u0c28\u0c41",other:"{{count}} \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32"},withPreposition:{one:"\u0c12\u0c15 \u0c38\u0c46\u0c15\u0c28\u0c41",other:"{{count}} \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32"}},halfAMinute:{standalone:"\u0c05\u0c30 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",withPreposition:"\u0c05\u0c30 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02"},lessThanXMinutes:{standalone:{one:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02 \u0c15\u0c28\u0c4d\u0c28\u0c3e \u0c24\u0c15\u0c4d\u0c15\u0c41\u0c35",other:"{{count}} \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32 \u0c15\u0c28\u0c4d\u0c28\u0c3e \u0c24\u0c15\u0c4d\u0c15\u0c41\u0c35"},withPreposition:{one:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",other:"{{count}} \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32"}},xMinutes:{standalone:{one:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",other:"{{count}} \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",other:"{{count}} \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32"}},aboutXHours:{standalone:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c17\u0c02\u0c1f",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c17\u0c02\u0c1f\u0c32\u0c41"},withPreposition:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c17\u0c02\u0c1f",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c17\u0c02\u0c1f\u0c32"}},xHours:{standalone:{one:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",other:"{{count}} \u0c17\u0c02\u0c1f\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",other:"{{count}} \u0c17\u0c02\u0c1f\u0c32"}},xDays:{standalone:{one:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",other:"{{count}} \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",other:"{{count}} \u0c30\u0c4b\u0c1c\u0c41\u0c32"}},aboutXWeeks:{standalone:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c35\u0c3e\u0c30\u0c02",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c35\u0c3e\u0c30\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c35\u0c3e\u0c30\u0c02",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c35\u0c3e\u0c30\u0c3e\u0c32\u0c32"}},xWeeks:{standalone:{one:"\u0c12\u0c15 \u0c35\u0c3e\u0c30\u0c02",other:"{{count}} \u0c35\u0c3e\u0c30\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c35\u0c3e\u0c30\u0c02",other:"{{count}} \u0c35\u0c3e\u0c30\u0c3e\u0c32\u0c32"}},aboutXMonths:{standalone:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c28\u0c46\u0c32",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c28\u0c46\u0c32\u0c32\u0c41"},withPreposition:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c28\u0c46\u0c32",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c28\u0c46\u0c32\u0c32"}},xMonths:{standalone:{one:"\u0c12\u0c15 \u0c28\u0c46\u0c32",other:"{{count}} \u0c28\u0c46\u0c32\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c28\u0c46\u0c32",other:"{{count}} \u0c28\u0c46\u0c32\u0c32"}},aboutXYears:{standalone:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 \u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"\u0c38\u0c41\u0c2e\u0c3e\u0c30\u0c41 {{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32"}},xYears:{standalone:{one:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"{{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"{{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32"}},overXYears:{standalone:{one:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02 \u0c2a\u0c48\u0c17\u0c3e",other:"{{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c15\u0c41 \u0c2a\u0c48\u0c17\u0c3e"},withPreposition:{one:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"{{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32"}},almostXYears:{standalone:{one:"\u0c26\u0c3e\u0c26\u0c3e\u0c2a\u0c41 \u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"\u0c26\u0c3e\u0c26\u0c3e\u0c2a\u0c41 {{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},withPreposition:{one:"\u0c26\u0c3e\u0c26\u0c3e\u0c2a\u0c41 \u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",other:"\u0c26\u0c3e\u0c26\u0c3e\u0c2a\u0c41 {{count}} \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32"}}};e.exports=t.default},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(34))&&o.__esModule?o:{default:o};var i={date:(0,a.default)({formats:{full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} {{time}}'\u0c15\u0c3f'",long:"{{date}} {{time}}'\u0c15\u0c3f'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){return o[e]};var o={lastWeek:"'\u0c17\u0c24' eeee p",yesterday:"'\u0c28\u0c3f\u0c28\u0c4d\u0c28' p",today:"'\u0c08 \u0c30\u0c4b\u0c1c\u0c41' p",tomorrow:"'\u0c30\u0c47\u0c2a\u0c41' p",nextWeek:"'\u0c24\u0c26\u0c41\u0c2a\u0c30\u0c3f' eeee p",other:"P"};e.exports=t.default},359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(35))&&o.__esModule?o:{default:o};var i={ordinalNumber:function(e,t){return Number(e)+"\u0c35"},era:(0,a.default)({values:{narrow:["\u0c15\u0c4d\u0c30\u0c40.\u0c2a\u0c42.","\u0c15\u0c4d\u0c30\u0c40.\u0c36."],abbreviated:["\u0c15\u0c4d\u0c30\u0c40.\u0c2a\u0c42.","\u0c15\u0c4d\u0c30\u0c40.\u0c36."],wide:["\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41 \u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c02","\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41\u0c36\u0c15\u0c02"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0c24\u0c4d\u0c30\u0c481","\u0c24\u0c4d\u0c30\u0c482","\u0c24\u0c4d\u0c30\u0c483","\u0c24\u0c4d\u0c30\u0c484"],wide:["1\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02","2\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02","3\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02","4\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["\u0c1c","\u0c2b\u0c3f","\u0c2e\u0c3e","\u0c0f","\u0c2e\u0c47","\u0c1c\u0c42","\u0c1c\u0c41","\u0c06","\u0c38\u0c46","\u0c05","\u0c28","\u0c21\u0c3f"],abbreviated:["\u0c1c\u0c28","\u0c2b\u0c3f\u0c2c\u0c4d\u0c30","\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f","\u0c0f\u0c2a\u0c4d\u0c30\u0c3f","\u0c2e\u0c47","\u0c1c\u0c42\u0c28\u0c4d","\u0c1c\u0c41\u0c32\u0c48","\u0c06\u0c17","\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02","\u0c05\u0c15\u0c4d\u0c1f\u0c4b","\u0c28\u0c35\u0c02","\u0c21\u0c3f\u0c38\u0c46\u0c02"],wide:["\u0c1c\u0c28\u0c35\u0c30\u0c3f","\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f","\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f","\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d","\u0c2e\u0c47","\u0c1c\u0c42\u0c28\u0c4d","\u0c1c\u0c41\u0c32\u0c48","\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41","\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d","\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d","\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d","\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d"]},defaultWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u0c06","\u0c38\u0c4b","\u0c2e","\u0c2c\u0c41","\u0c17\u0c41","\u0c36\u0c41","\u0c36"],short:["\u0c06\u0c26\u0c3f","\u0c38\u0c4b\u0c2e","\u0c2e\u0c02\u0c17\u0c33","\u0c2c\u0c41\u0c27","\u0c17\u0c41\u0c30\u0c41","\u0c36\u0c41\u0c15\u0c4d\u0c30","\u0c36\u0c28\u0c3f"],abbreviated:["\u0c06\u0c26\u0c3f","\u0c38\u0c4b\u0c2e","\u0c2e\u0c02\u0c17\u0c33","\u0c2c\u0c41\u0c27","\u0c17\u0c41\u0c30\u0c41","\u0c36\u0c41\u0c15\u0c4d\u0c30","\u0c36\u0c28\u0c3f"],wide:["\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02","\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02","\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02","\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02","\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02","\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02","\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},abbreviated:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},wide:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},abbreviated:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},wide:{am:"\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02",pm:"\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02",midnight:"\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f",noon:"\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",morning:"\u0c09\u0c26\u0c2f\u0c02",afternoon:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02",evening:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02",night:"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(36)),a=i(n(37));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,o.default)({matchPattern:/^(\d+)(\u0c35)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^(\u0c15\u0c4d\u0c30\u0c40\.\u0c2a\u0c42\.|\u0c15\u0c4d\u0c30\u0c40\.\u0c36\.)/i,abbreviated:/^(\u0c15\u0c4d\u0c30\u0c40\.?\s?\u0c2a\u0c42\.?|\u0c2a\u0c4d\u0c30\.?\s?\u0c36\.?\s?\u0c2a\u0c42\.?|\u0c15\u0c4d\u0c30\u0c40\.?\s?\u0c36\.?|\u0c38\u0c3e\.?\s?\u0c36\.?)/i,wide:/^(\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41 \u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c02|\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c36\u0c15\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c02|\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41 \u0c36\u0c15\u0c02|\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c36\u0c15\u0c02)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u0c2a\u0c42|\u0c36)/i,/^\u0c38\u0c3e/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0c24\u0c4d\u0c30\u0c48[1234]/i,wide:/^[1234](\u0c35)? \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(\u0c1c\u0c42|\u0c1c\u0c41|\u0c1c|\u0c2b\u0c3f|\u0c2e\u0c3e|\u0c0f|\u0c2e\u0c47|\u0c06|\u0c38\u0c46|\u0c05|\u0c28|\u0c21\u0c3f)/i,abbreviated:/^(\u0c1c\u0c28|\u0c2b\u0c3f\u0c2c\u0c4d\u0c30|\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f|\u0c0f\u0c2a\u0c4d\u0c30\u0c3f|\u0c2e\u0c47|\u0c1c\u0c42\u0c28\u0c4d|\u0c1c\u0c41\u0c32\u0c48|\u0c06\u0c17|\u0c38\u0c46\u0c2a\u0c4d|\u0c05\u0c15\u0c4d\u0c1f\u0c4b|\u0c28\u0c35|\u0c21\u0c3f\u0c38\u0c46)/i,wide:/^(\u0c1c\u0c28\u0c35\u0c30\u0c3f|\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f|\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f|\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d|\u0c2e\u0c47|\u0c1c\u0c42\u0c28\u0c4d|\u0c1c\u0c41\u0c32\u0c48|\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41|\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d|\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d|\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d|\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c1c/i,/^\u0c2b\u0c3f/i,/^\u0c2e\u0c3e/i,/^\u0c0f/i,/^\u0c2e\u0c47/i,/^\u0c1c\u0c42/i,/^\u0c1c\u0c41/i,/^\u0c06/i,/^\u0c38\u0c46/i,/^\u0c05/i,/^\u0c28/i,/^\u0c21\u0c3f/i],any:[/^\u0c1c\u0c28/i,/^\u0c2b\u0c3f/i,/^\u0c2e\u0c3e/i,/^\u0c0f/i,/^\u0c2e\u0c47/i,/^\u0c1c\u0c42\u0c28\u0c4d/i,/^\u0c1c\u0c41\u0c32\u0c48/i,/^\u0c06\u0c17/i,/^\u0c38\u0c46/i,/^\u0c05/i,/^\u0c28/i,/^\u0c21\u0c3f/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^(\u0c06|\u0c38\u0c4b|\u0c2e|\u0c2c\u0c41|\u0c17\u0c41|\u0c36\u0c41|\u0c36)/i,short:/^(\u0c06\u0c26\u0c3f|\u0c38\u0c4b\u0c2e|\u0c2e\u0c02|\u0c2c\u0c41\u0c27|\u0c17\u0c41\u0c30\u0c41|\u0c36\u0c41\u0c15\u0c4d\u0c30|\u0c36\u0c28\u0c3f)/i,abbreviated:/^(\u0c06\u0c26\u0c3f|\u0c38\u0c4b\u0c2e|\u0c2e\u0c02|\u0c2c\u0c41\u0c27|\u0c17\u0c41\u0c30\u0c41|\u0c36\u0c41\u0c15\u0c4d\u0c30|\u0c36\u0c28\u0c3f)/i,wide:/^(\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02|\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02|\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02|\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02|\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02|\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02|\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c06/i,/^\u0c38\u0c4b/i,/^\u0c2e/i,/^\u0c2c\u0c41/i,/^\u0c17\u0c41/i,/^\u0c36\u0c41/i,/^\u0c36/i],any:[/^\u0c06\u0c26\u0c3f/i,/^\u0c38\u0c4b\u0c2e/i,/^\u0c2e\u0c02/i,/^\u0c2c\u0c41\u0c27/i,/^\u0c17\u0c41\u0c30\u0c41/i,/^\u0c36\u0c41\u0c15\u0c4d\u0c30/i,/^\u0c36\u0c28\u0c3f/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^(\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02|\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f)/i,any:/^(\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02|\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,pm:/^\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,midnight:/^\u0c05\u0c30\u0c4d\u0c27/i,noon:/^\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f/i,morning:/\u0c09\u0c26\u0c2f\u0c02/i,afternoon:/\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,evening:/\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/i,night:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(356)),a=u(n(357)),i=u(n(358)),r=u(n(359)),d=u(n(360));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"te",formatDistance:o.default,formatLong:a.default,formatRelative:i.default,localize:r.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=63.190dc84a.chunk.js.map