(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[9,79,354,355,356,357],{326:function(e,t,a){"use strict";function o(e,t,a){var o=function(e,t){return 1===t?e.one:t>=2&&t<=4?e.twoFour:e.other}(e,t);return(o[a]||o).replace("{{count}}",t)}function r(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="pribli\u017ene"),t.length>0?t+" ":""}function n(e){var t="";return"lessThan"===e&&(t="menej ne\u017e"),"over"===e&&(t="viac ne\u017e"),t.length>0?t+" ":""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var i=function(e){return["lessThan","about","over","almost"].filter((function(t){return!!e.match(new RegExp("^"+t))}))[0]}(e)||"",d=(l=e.substring(i.length),l.charAt(0).toLowerCase()+l.slice(1)),s=u[d];var l;if(!a.addSuffix)return r(i)+n(i)+o(s,t,"regular");return a.comparison>0?r(i)+"o "+n(i)+o(s,t,"future"):r(i)+"pred "+n(i)+o(s,t,"past")};var u={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xWeeks:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};e.exports=t.default},327:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=a(32))&&o.__esModule?o:{default:o};var n={date:(0,r.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},328:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,o){var r=i[e];if("function"===typeof r)return r(t,a,o);return r};var o,r=(o=a(833))&&o.__esModule?o:{default:o};var n=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function u(e){return 4===e?"'vo' eeee 'o' p":"'v "+n[e]+" o' p"}var i={lastWeek:function(e,t,a){var o=e.getUTCDay();return(0,r.default)(e,t,a)?u(o):function(e){var t=n[e];switch(e){case 0:case 3:case 6:return"'minul\xfa "+t+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(o)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var o=e.getUTCDay();return(0,r.default)(e,t,a)?u(o):function(e){var t=n[e];switch(e){case 0:case 4:case 6:return"'bud\xfacu' "+t+" 'o' p";default:return"'bud\xfaci' eeee 'o' p"}}(o)},other:"P"};e.exports=t.default},329:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=a(33))&&o.__esModule?o:{default:o};var n={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,r.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]}}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. \u0161tvr\u0165rok","2. \u0161tvr\u0165rok","3. \u0161tvr\u0165rok","4. \u0161tvr\u0165rok"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1ra","febru\xe1ra","marca","apr\xedla","m\xe1ja","j\xfana","j\xfala","augusta","septembra","okt\xf3bra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["n","p","u","s","\u0161","p","s"],short:["ne","po","ut","st","\u0161t","pi","so"],abbreviated:["ne","po","ut","st","\u0161t","pi","so"],wide:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"r\xe1no",afternoon:"popoludnie",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"r\xe1no",afternoon:"popoludn\xed",evening:"ve\u010der",night:"v noci"}},defaultFormattingWidth:"wide"})};t.default=n,e.exports=t.default},330:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(34)),r=n(a(35));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,o.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[\u0161s][\xedi]m letopo[\u010dc]tom|po Kristovi|n[\xe1a][\u0161s]ho letopo[\u010dc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [\u0161s]tvr[\u0165t]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[\xe1a]j|j[\xfau]n|j[\xfau]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[\xe1a]ra?|febru[\xe1a]ra?|(marec|marca)|apr[\xedi]la?|m[\xe1a]ja?|j[\xfau]na?|j[\xfau]la?|augusta?|(september|septembra)|(okt[\xf3o]ber|okt[\xf3o]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[\xe1a]j/i,/^j[\xfau]n/i,/^j[\xfau]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[npus\u0161p]/i,short:/^(ne|po|ut|st|\u0161t|pi|so)/i,abbreviated:/^(ne|po|ut|st|\u0161t|pi|so)/i,wide:/^(nede[\u013el]a|pondelok|utorok|streda|[\u0161s]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^\u0161/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(\u0161t|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[\xe1a]no|popoludn(ie|\xed|i)|ve[\u010dc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[\xe1a]no/i,afternoon:/^pop/i,evening:/^ve[\u010dc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},461:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(a(326)),r=d(a(327)),n=d(a(328)),u=d(a(329)),i=d(a(330));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"sk",formatDistance:o.default,formatLong:r.default,formatRelative:n.default,localize:u.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default},833:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,r.default)(2,arguments);var n=(0,o.default)(e,a),u=(0,o.default)(t,a);return n.getTime()===u.getTime()};var o=n(a(43)),r=n(a(4));function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=9.36c37d71.chunk.js.map