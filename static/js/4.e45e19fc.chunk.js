(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[4,74,269,270,271,272],{236:function(e,t,i){"use strict";function n(e,t){if(void 0!==e.one&&1===t)return e.one;var i=t%10,n=t%100;return 1===i&&11!==n?e.singularNominative.replace("{{count}}",t):i>=2&&i<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function a(e){return function(t,i){return i.addSuffix?i.comparison>0?e.future?n(e.future,t):n(e.regular,t)+" \u043a\u0435\u0439\u0456\u043d":e.past?n(e.past,t):n(e.regular,t)+" \u0431\u04b1\u0440\u044b\u043d":n(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){return i=i||{},u[e](t,i)};var u={lessThanXSeconds:a({regular:{one:"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u0431\u0456\u0440 \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xSeconds:a({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0456\u0448\u0456\u043d\u0434\u0435":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d":"\u0436\u0430\u0440\u0442\u044b \u043c\u0438\u043d\u0443\u0442"},lessThanXMinutes:a({regular:{one:"1 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437"},future:{one:"\u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c ",singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u043c"}}),xMinutes:a({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"},future:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXHours:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xHours:a({regular:{singularNominative:"{{count}} \u0441\u0430\u0493\u0430\u0442",singularGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442",pluralGenitive:"{{count}} \u0441\u0430\u0493\u0430\u0442"}}),xDays:a({regular:{singularNominative:"{{count}} \u043a\u04af\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d"},future:{singularNominative:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"}}),aboutXWeeks:{one:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d 1 \u0430\u043f\u0442\u0430",other:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u043f\u0442\u0430"},xWeeks:{one:"1 \u0430\u043f\u0442\u0430",other:"{{count}} \u0430\u043f\u0442\u0430"},aboutXMonths:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xMonths:a({regular:{singularNominative:"{{count}} \u0430\u0439",singularGenitive:"{{count}} \u0430\u0439",pluralGenitive:"{{count}} \u0430\u0439"}}),aboutXYears:a({regular:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b"},future:{singularNominative:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"\u0448\u0430\u043c\u0430\u043c\u0435\u043d {{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),xYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b",singularGenitive:"{{count}} \u0436\u044b\u043b",pluralGenitive:"{{count}} \u0436\u044b\u043b"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}}),overXYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u0430\u0441\u0442\u0430\u043c"}}),almostXYears:a({regular:{singularNominative:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0493\u0430 \u0436\u0430\u049b\u044b\u043d"},future:{singularNominative:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",singularGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",pluralGenitive:"{{count}} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"}})};e.exports=t.default},237:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=i(32))&&n.__esModule?n:{default:n};var u={date:(0,a.default)({formats:{full:"EEEE, do MMMM y '\u0436.'",long:"do MMMM y '\u0436.'",medium:"d MMM y '\u0436.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},238:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,n){var a=o[e];if("function"===typeof a)return a(t,i,n);return a};var n,a=(n=i(833))&&n.__esModule?n:{default:n};var u=["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456\u0434\u0435","\u0436\u04b1\u043c\u0430\u0434\u0430","\u0441\u0435\u043d\u0431\u0456\u0434\u0435"];function r(e){return"'"+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}var o={lastWeek:function(e,t,i){var n=e.getUTCDay();return(0,a.default)(e,t,i)?r(n):function(e){return"'\u04e9\u0442\u043a\u0435\u043d "+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(n)},yesterday:"'\u043a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",today:"'\u0431\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",tomorrow:"'\u0435\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",nextWeek:function(e,t,i){var n=e.getUTCDay();return(0,a.default)(e,t,i)?r(n):function(e){return"'\u043a\u0435\u043b\u0435\u0441\u0456 "+u[e]+" \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'"}(n)},other:"P"};e.exports=t.default},239:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=i(33))&&n.__esModule?n:{default:n};var u={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"};var r={ordinalNumber:function(e){var t=Number(e);return t+(u[t]||u[t%10]||u[t>=100?100:null])},era:(0,a.default)({values:{narrow:["\u0431.\u0437.\u0434.","\u0431.\u0437."],abbreviated:["\u0431.\u0437.\u0434.","\u0431.\u0437."],wide:["\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d","\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0448\u0456 \u0442\u043e\u049b.","2-\u0448\u0456 \u0442\u043e\u049b.","3-\u0448\u0456 \u0442\u043e\u049b.","4-\u0448\u0456 \u0442\u043e\u049b."],wide:["1-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","2-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","3-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d","4-\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultWidth:"wide",formattingValues:{narrow:["\u049a","\u0410","\u041d","\u0421","\u041c","\u041c","\u0428","\u0422","\u049a","\u049a","\u049a","\u0416"],abbreviated:["\u049b\u0430\u04a3","\u0430\u049b\u043f","\u043d\u0430\u0443","\u0441\u04d9\u0443","\u043c\u0430\u043c","\u043c\u0430\u0443","\u0448\u0456\u043b","\u0442\u0430\u043c","\u049b\u044b\u0440","\u049b\u0430\u0437","\u049b\u0430\u0440","\u0436\u0435\u043b"],wide:["\u049b\u0430\u04a3\u0442\u0430\u0440","\u0430\u049b\u043f\u0430\u043d","\u043d\u0430\u0443\u0440\u044b\u0437","\u0441\u04d9\u0443\u0456\u0440","\u043c\u0430\u043c\u044b\u0440","\u043c\u0430\u0443\u0441\u044b\u043c","\u0448\u0456\u043b\u0434\u0435","\u0442\u0430\u043c\u044b\u0437","\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a","\u049b\u0430\u0437\u0430\u043d","\u049b\u0430\u0440\u0430\u0448\u0430","\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u0416","\u0414","\u0421","\u0421","\u0411","\u0416","\u0421"],short:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],abbreviated:["\u0436\u0441","\u0434\u0441","\u0441\u0441","\u0441\u0440","\u0431\u0441","\u0436\u043c","\u0441\u0431"],wide:["\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456","\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456","\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456","\u0436\u04b1\u043c\u0430","\u0441\u0435\u043d\u0431\u0456"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441",morning:"\u0442\u0430\u04a3",afternoon:"\u043a\u04af\u043d",evening:"\u043a\u0435\u0448",night:"\u0442\u04af\u043d"},wide:{am:"\u0422\u0414",pm:"\u0422\u041a",midnight:"\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430",noon:"\u0442\u04af\u0441\u0442\u0435",morning:"\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3",afternoon:"\u043a\u04af\u043d\u0434\u0456\u0437",evening:"\u043a\u0435\u0448\u0442\u0435",night:"\u0442\u04af\u043d\u0434\u0435"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},240:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(i(34)),a=u(i(35));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(-?(\u0448\u0456|\u0448\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,abbreviated:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,wide:/^(\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0434\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0431/i,/^\u0437/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b.?/i,wide:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b\u0441\u0430\u043d/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(\u049b|\u0430|\u043d|\u0441|\u043c|\u043c\u0430\u0443|\u0448|\u0442|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436)/i,abbreviated:/^(\u049b\u0430\u04a3|\u0430\u049b\u043f|\u043d\u0430\u0443|\u0441\u04d9\u0443|\u043c\u0430\u043c|\u043c\u0430\u0443|\u0448\u0456\u043b|\u0442\u0430\u043c|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436\u0435\u043b)/i,wide:/^(\u049b\u0430\u04a3\u0442\u0430\u0440|\u0430\u049b\u043f\u0430\u043d|\u043d\u0430\u0443\u0440\u044b\u0437|\u0441\u04d9\u0443\u0456\u0440|\u043c\u0430\u043c\u044b\u0440|\u043c\u0430\u0443\u0441\u044b\u043c|\u0448\u0456\u043b\u0434\u0435|\u0442\u0430\u043c\u044b\u0437|\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a|\u049b\u0430\u0437\u0430\u043d|\u049b\u0430\u0440\u0430\u0448\u0430|\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i],abbreviated:[/^\u049b\u0430\u04a3/i,/^\u0430\u049b\u043f/i,/^\u043d\u0430\u0443/i,/^\u0441\u04d9\u0443/i,/^\u043c\u0430\u043c/i,/^\u043c\u0430\u0443/i,/^\u0448\u0456\u043b/i,/^\u0442\u0430\u043c/i,/^\u049b\u044b\u0440/i,/^\u049b\u0430\u0437/i,/^\u049b\u0430\u0440/i,/^\u0436\u0435\u043b/i],any:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^(\u0436|\u0434|\u0441|\u0441|\u0431|\u0436|\u0441)/i,short:/^(\u0436\u0441|\u0434\u0441|\u0441\u0441|\u0441\u0440|\u0431\u0441|\u0436\u043c|\u0441\u0431)/i,wide:/^(\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456|\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456|\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0436\u04b1\u043c\u0430|\u0441\u0435\u043d\u0431\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0436/i,/^\u0434/i,/^\u0441/i,/^\u0441/i,/^\u0431/i,/^\u0436/i,/^\u0441/i],short:[/^\u0436\u0441/i,/^\u0434\u0441/i,/^\u0441\u0441/i,/^\u0441\u0440/i,/^\u0431\u0441/i,/^\u0436\u043c/i,/^\u0441\u0431/i],any:[/^\u0436[\u0435\u043a]/i,/^\u0434[\u04af\u0439]/i,/^\u0441e[\u0439]/i,/^\u0441\u04d9[\u0440]/i,/^\u0431[\u0435\u0439]/i,/^\u0436[\u04b1\u043c]/i,/^\u0441\u0435[\u043d]/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,wide:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,any:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0422\u0414/i,pm:/^\u0422\u041a/i,midnight:/^\u0442\u04af\u043d \u043e\u0440\u0442\u0430/i,noon:/^\u043a\u04af\u043d\u0434\u0456\u0437/i,morning:/\u0442\u0430\u04a3/i,afternoon:/\u0442\u04af\u0441/i,evening:/\u043a\u0435\u0448/i,night:/\u0442\u04af\u043d/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},443:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(i(236)),a=l(i(237)),u=l(i(238)),r=l(i(239)),o=l(i(240));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"kk",formatDistance:n.default,formatLong:a.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d,e.exports=t.default},833:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){(0,a.default)(2,arguments);var u=(0,n.default)(e,i),r=(0,n.default)(t,i);return u.getTime()===r.getTime()};var n=u(i(43)),a=u(i(4));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=4.e45e19fc.chunk.js.map