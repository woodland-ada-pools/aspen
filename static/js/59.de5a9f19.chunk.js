(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[59,363,364,365,366,367],{341:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var a;o=o||{},a="string"===typeof n[e]?n[e]:1===t?o.addSuffix?o.comparison>0?n[e].one.withPrepositionIn:n[e].one.withPrepositionAgo:n[e].one.standalone:t%10>1&&t%10<5&&"1"!==String(t).substr(-2,1)?n[e].dual.replace("{{count}}",t):n[e].other.replace("{{count}}",t);if(o.addSuffix)return o.comparison>0?"za "+a:"pre "+a;return a};var n={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 nedelju",withPrepositionAgo:"oko 1 nedelju",withPrepositionIn:"oko 1 nedelju"},dual:"oko {{count}} nedelje",other:"oko {{count}} nedelje"},xWeeks:{one:{standalone:"1 nedelju",withPrepositionAgo:"1 nedelju",withPrepositionIn:"1 nedelju"},dual:"{{count}} nedelje",other:"{{count}} nedelje"},aboutXMonths:{one:{standalone:"oko 1 mesec",withPrepositionAgo:"oko 1 mesec",withPrepositionIn:"oko 1 mesec"},dual:"oko {{count}} meseca",other:"oko {{count}} meseci"},xMonths:{one:{standalone:"1 mesec",withPrepositionAgo:"1 mesec",withPrepositionIn:"1 mesec"},dual:"{{count}} meseca",other:"{{count}} meseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}};e.exports=t.default},342:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=o(34))&&n.__esModule?n:{default:n};var i={date:(0,a.default)({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},343:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,a){var i=n[e];if("function"===typeof i)return i(t);return i};var n={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'pro\u0161le nedelje u' p";case 3:return"'pro\u0161le srede u' p";case 6:return"'pro\u0161le subote u' p";default:return"'pro\u0161li' EEEE 'u' p"}},yesterday:"'ju\u010de u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'slede\u0107e nedelje u' p";case 3:return"'slede\u0107u sredu u' p";case 6:return"'slede\u0107u subotu u' p";default:return"'slede\u0107i' EEEE 'u' p"}},other:"P"};e.exports=t.default},344:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=o(35))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e){var t=Number(e);return String(t).concat(".")},era:(0,a.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Pre Hrista","Posle Hrista"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["N","P","U","S","\u010c","P","S"],short:["ned","pon","uto","sre","\u010det","pet","sub"],abbreviated:["ned","pon","uto","sre","\u010det","pet","sub"],wide:["nedelja","ponedeljak","utorak","sreda","\u010detvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uve\u010de",night:"no\u0107u"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uve\u010de",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uve\u010de",night:"no\u0107u"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},345:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(37));function a(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,a(o(36)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|nova)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[npus\u010dc]/i,short:/^(ned|pon|uto|sre|(\u010det|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(\u010det|cet)|pet|sub)/i,wide:/^(nedelja|ponedeljak|utorak|sreda|(\u010detvrtak|cetvrtak)|petak|subota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(am|pm|ponoc|pono\u0107|(po)?podne|uvece|uve\u010de|no\u0107u|posle podne|ujutru)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(posle\s|po)+podne/i,evening:/(uvece|uve\u010de)/i,night:/(nocu|no\u0107u)/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},464:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(o(341)),a=d(o(342)),i=d(o(343)),u=d(o(344)),r=d(o(345));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"sr-Latn",formatDistance:n.default,formatLong:a.default,formatRelative:i.default,localize:u.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=59.de5a9f19.chunk.js.map