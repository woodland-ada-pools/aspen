(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[60,368,369,370,371,372],{336:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var a;n=n||{},a="string"===typeof i[t]?i[t]:1===e?n.addSuffix?n.comparison>0?i[t].one.withPrepositionIn:i[t].one.withPrepositionAgo:i[t].one.standalone:e%10>1&&e%10<5&&"1"!==String(e).substr(-2,1)?i[t].dual.replace("{{count}}",e):i[t].other.replace("{{count}}",e);if(n.addSuffix)return n.comparison>0?"\u0437\u0430 "+a:"\u043f\u0440\u0435 "+a;return a};var i={lessThanXSeconds:{one:{standalone:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionAgo:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionIn:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443"},dual:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},xSeconds:{one:{standalone:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430",withPrepositionAgo:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0435",withPrepositionIn:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443"},dual:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0435",other:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},halfAMinute:"\u043f\u043e\u043b\u0430 \u043c\u0438\u043d\u0443\u0442\u0435",lessThanXMinutes:{one:{standalone:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionAgo:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionIn:"\u043c\u0430\u045a\u0435 \u043e\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0443"},dual:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0435",other:"\u043c\u0430\u045a\u0435 \u043e\u0434 {{count}} \u043c\u0438\u043d\u0443\u0442\u0430"},xMinutes:{one:{standalone:"1 \u043c\u0438\u043d\u0443\u0442\u0430",withPrepositionAgo:"1 \u043c\u0438\u043d\u0443\u0442\u0435",withPrepositionIn:"1 \u043c\u0438\u043d\u0443\u0442\u0443"},dual:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0435",other:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0430"},aboutXHours:{one:{standalone:"\u043e\u043a\u043e 1 \u0441\u0430\u0442",withPrepositionAgo:"\u043e\u043a\u043e 1 \u0441\u0430\u0442",withPrepositionIn:"\u043e\u043a\u043e 1 \u0441\u0430\u0442"},dual:"\u043e\u043a\u043e {{count}} \u0441\u0430\u0442\u0430",other:"\u043e\u043a\u043e {{count}} \u0441\u0430\u0442\u0438"},xHours:{one:{standalone:"1 \u0441\u0430\u0442",withPrepositionAgo:"1 \u0441\u0430\u0442",withPrepositionIn:"1 \u0441\u0430\u0442"},dual:"{{count}} \u0441\u0430\u0442\u0430",other:"{{count}} \u0441\u0430\u0442\u0438"},xDays:{one:{standalone:"1 \u0434\u0430\u043d",withPrepositionAgo:"1 \u0434\u0430\u043d",withPrepositionIn:"1 \u0434\u0430\u043d"},dual:"{{count}} \u0434\u0430\u043d\u0430",other:"{{count}} \u0434\u0430\u043d\u0430"},aboutXWeeks:{one:{standalone:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionAgo:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionIn:"\u043e\u043a\u043e 1 \u043d\u0435\u0434\u0435\u0459\u0443"},dual:"\u043e\u043a\u043e {{count}} \u043d\u0435\u0434\u0435\u0459\u0435",other:"\u043e\u043a\u043e {{count}} \u043d\u0435\u0434\u0435\u0459\u0435"},xWeeks:{one:{standalone:"1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionAgo:"1 \u043d\u0435\u0434\u0435\u0459\u0443",withPrepositionIn:"1 \u043d\u0435\u0434\u0435\u0459\u0443"},dual:"{{count}} \u043d\u0435\u0434\u0435\u0459\u0435",other:"{{count}} \u043d\u0435\u0434\u0435\u0459\u0435"},aboutXMonths:{one:{standalone:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446",withPrepositionAgo:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446",withPrepositionIn:"\u043e\u043a\u043e 1 \u043c\u0435\u0441\u0435\u0446"},dual:"\u043e\u043a\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0430",other:"\u043e\u043a\u043e {{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},xMonths:{one:{standalone:"1 \u043c\u0435\u0441\u0435\u0446",withPrepositionAgo:"1 \u043c\u0435\u0441\u0435\u0446",withPrepositionIn:"1 \u043c\u0435\u0441\u0435\u0446"},dual:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0430",other:"{{count}} \u043c\u0435\u0441\u0435\u0446\u0438"},aboutXYears:{one:{standalone:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u043e\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u043e\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043e\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},xYears:{one:{standalone:"1 \u0433\u043e\u0434\u0438\u043d\u0430",withPrepositionAgo:"1 \u0433\u043e\u0434\u0438\u043d\u0435",withPrepositionIn:"1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},overXYears:{one:{standalone:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u043f\u0440\u0435\u043a\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u043f\u0440\u0435\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u043f\u0440\u0435\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"},almostXYears:{one:{standalone:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionAgo:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443",withPrepositionIn:"\u0433\u043e\u0442\u043e\u0432\u043e 1 \u0433\u043e\u0434\u0438\u043d\u0443"},dual:"\u0433\u043e\u0442\u043e\u0432\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0435",other:"\u0433\u043e\u0442\u043e\u0432\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0430"}};t.exports=e.default},337:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=(i=n(34))&&i.__esModule?i:{default:i};var o={date:(0,a.default)({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} '\u0443' {{time}}",long:"{{date}} '\u0443' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=o,t.exports=e.default},338:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,a){var o=i[t];if("function"===typeof o)return o(e);return o};var i={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u043d\u0435\u0434\u0435\u0459\u0435 \u0443' p";case 3:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u0441\u0440\u0435\u0434\u0435 \u0443' p";case 6:return"'\u043f\u0440\u043e\u0448\u043b\u0435 \u0441\u0443\u0431\u043e\u0442\u0435 \u0443' p";default:return"'\u043f\u0440\u043e\u0448\u043b\u0438' EEEE '\u0443' p"}},yesterday:"'\u0458\u0443\u0447\u0435 \u0443' p",today:"'\u0434\u0430\u043d\u0430\u0441 \u0443' p",tomorrow:"'\u0441\u0443\u0442\u0440\u0430 \u0443' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0435 \u043d\u0435\u0434\u0435\u0459\u0435 \u0443' p";case 3:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0443 \u0441\u0440\u0435\u0434\u0443 \u0443' p";case 6:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0443 \u0441\u0443\u0431\u043e\u0442\u0443 \u0443' p";default:return"'\u0441\u043b\u0435\u0434\u0435\u045b\u0438' EEEE '\u0443' p"}},other:"P"};t.exports=e.default},339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=(i=n(35))&&i.__esModule?i:{default:i};var o={ordinalNumber:function(t){var e=Number(t);return String(e).concat(".")},era:(0,a.default)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u0410\u0414"],abbreviated:["\u043f\u0440. \u0425\u0440.","\u043f\u043e. \u0425\u0440."],wide:["\u041f\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430","\u041f\u043e\u0441\u043b\u0435 \u0425\u0440\u0438\u0441\u0442\u0430"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. \u043a\u0432.","2. \u043a\u0432.","3. \u043a\u0432.","4. \u043a\u0432."],wide:["1. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3. \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4. \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,a.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0431","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0432","\u0434\u0435\u0446"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440","\u043e\u043a\u0442\u043e\u0431\u0430\u0440","\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["\u0458\u0430\u043d","\u0444\u0435\u0431","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0432","\u0434\u0435\u0446"],wide:["\u0458\u0430\u043d\u0443\u0430\u0440","\u0444\u0435\u0431\u0440\u0443\u0430\u0440","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0458","\u0458\u0443\u043d","\u0458\u0443\u043b","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440","\u043e\u043a\u0442\u043e\u0431\u0430\u0440","\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440","\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u041d","\u041f","\u0423","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0443\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0443\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0443\u0442\u043e","\u0441\u0440\u0435","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u0443\u0431"],wide:["\u043d\u0435\u0434\u0435\u0459\u0430","\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a","\u0443\u0442\u043e\u0440\u0430\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a","\u043f\u0435\u0442\u0430\u043a","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},abbreviated:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},wide:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0410\u041c",pm:"\u041f\u041c",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},abbreviated:{am:"\u0410\u041c",pm:"\u041f\u041c",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"},wide:{am:"AM",pm:"PM",midnight:"\u043f\u043e\u043d\u043e\u045b",noon:"\u043f\u043e\u0434\u043d\u0435",morning:"\u0443\u0458\u0443\u0442\u0440\u0443",afternoon:"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435",evening:"\u0443\u0432\u0435\u0447\u0435",night:"\u043d\u043e\u045b\u0443"}},defaultFormattingWidth:"wide"})};e.default=o,t.exports=e.default},340:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(37));function a(t){return t&&t.__esModule?t:{default:t}}var o={ordinalNumber:(0,a(n(36)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(\u043f\u0440\.\u043d\.\u0435\.|\u0410\u0414)/i,abbreviated:/^(\u043f\u0440\.\s?\u0425\u0440\.|\u043f\u043e\.\s?\u0425\u0440\.)/i,wide:/^(\u041f\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043f\u0440\u0435 \u043d\u043e\u0432\u0435 \u0435\u0440\u0435|\u041f\u043e\u0441\u043b\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043d\u043e\u0432\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f\u0440/i,/^(\u043f\u043e|\u043d\u043e\u0432\u0430)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?\u043a\u0432\.?/i,wide:/^[1234]\. \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0431|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0432|\u0434\u0435\u0446)/i,wide:/^((\u0458\u0430\u043d\u0443\u0430\u0440|\u0458\u0430\u043d\u0443\u0430\u0440\u0430)|(\u0444\u0435\u0431\u0440\u0443\u0430\u0440|\u0444\u0435\u0431\u0440\u0443\u0430\u0440\u0430)|(\u043c\u0430\u0440\u0442|\u043c\u0430\u0440\u0442\u0430)|(\u0430\u043f\u0440\u0438\u043b|\u0430\u043f\u0440\u0438\u043b\u0430)|(\u043c\u0458\u0430|\u043c\u0430\u0458\u0430)|(\u0458\u0443\u043d|\u0458\u0443\u043d\u0430)|(\u0458\u0443\u043b|\u0458\u0443\u043b\u0430)|(\u0430\u0432\u0433\u0443\u0441\u0442|\u0430\u0432\u0433\u0443\u0441\u0442\u0430)|(\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440|\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0440\u0430)|(\u043e\u043a\u0442\u043e\u0431\u0430\u0440|\u043e\u043a\u0442\u043e\u0431\u0440\u0430)|(\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440|\u043d\u043e\u0432\u0435\u043c\u0431\u0440\u0430)|(\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440|\u0434\u0435\u0446\u0435\u043c\u0431\u0440\u0430))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],any:[/^\u0458\u0430/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[\u043f\u0443\u0441\u0447\u043d]/i,short:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u0459\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a|\u0443\u0442\u043e\u0440\u0430\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a|\u043f\u0435\u0442\u0430\u043a|\u0441\u0443\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043f/i,/^\u0443/i,/^\u0441/i,/^\u0447/i,/^\u043d/i],any:[/^\u043d\u0435\u0434/i,/^\u043f\u043e\u043d/i,/^\u0443\u0442\u043e/i,/^\u0441\u0440\u0435/i,/^\u0447\u0435\u0442/i,/^\u043f\u0435\u0442/i,/^\u0441\u0443\u0431/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(\u0430\u043c|\u043f\u043c|\u043f\u043e\u043d\u043e\u045b|(\u043f\u043e)?\u043f\u043e\u0434\u043d\u0435|\u0443\u0432\u0435\u0447\u0435|\u043d\u043e\u045b\u0443|\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435|\u0443\u0458\u0443\u0442\u0440\u0443)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u043f\u043e\u043d\u043e/i,noon:/^\u043f\u043e\u0434/i,morning:/\u0443\u0458\u0443\u0442\u0440\u0443/i,afternoon:/(\u043f\u043e\u0441\u043b\u0435\s|\u043f\u043e)+\u043f\u043e\u0434\u043d\u0435/i,evening:/(\u0443\u0432\u0435\u0447\u0435)/i,night:/(\u043d\u043e\u045b\u0443)/i}},defaultParseWidth:"any"})};e.default=o,t.exports=e.default},463:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(336)),a=u(n(337)),o=u(n(338)),r=u(n(339)),d=u(n(340));function u(t){return t&&t.__esModule?t:{default:t}}var s={code:"sr",formatDistance:i.default,formatLong:a.default,formatRelative:o.default,localize:r.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=s,t.exports=e.default}}]);
//# sourceMappingURL=60.7886dfb2.chunk.js.map