(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[7,77,331,332,333,334],{301:function(e,t,n){"use strict";function i(e,t,n){n=n||"regular";var i=function(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&n>10)return e.other;var i=n%10;return i>=2&&i<=4?e.twoFour:e.other}(e,t);return(i[n]||i).replace("{{count}}",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=o[e];if(!(n=n||{}).addSuffix)return i(a,t);return n.comparison>0?"za "+i(a,t,"future"):i(a,t,"past")+" temu"};var o={lessThanXSeconds:{one:{regular:"mniej ni\u017c sekunda",past:"mniej ni\u017c sekund\u0119",future:"mniej ni\u017c sekund\u0119"},twoFour:"mniej ni\u017c {{count}} sekundy",other:"mniej ni\u017c {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekund\u0119",future:"sekund\u0119"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"p\xf3\u0142 minuty",twoFour:"p\xf3\u0142 minuty",other:"p\xf3\u0142 minuty"},lessThanXMinutes:{one:{regular:"mniej ni\u017c minuta",past:"mniej ni\u017c minut\u0119",future:"mniej ni\u017c minut\u0119"},twoFour:"mniej ni\u017c {{count}} minuty",other:"mniej ni\u017c {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minut\u0119",future:"minut\u0119"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"oko\u0142o godziny",past:"oko\u0142o godziny",future:"oko\u0142o godzin\u0119"},twoFour:"oko\u0142o {{count}} godziny",other:"oko\u0142o {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzin\u0119",future:"godzin\u0119"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzie\u0144",past:"dzie\u0144",future:"1 dzie\u0144"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"oko\u0142o tygodnia",twoFour:"oko\u0142o {{count}} tygodni",other:"oko\u0142o {{count}} tygodni"},xWeeks:{one:"tydzie\u0144",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"oko\u0142o miesi\u0105c",twoFour:"oko\u0142o {{count}} miesi\u0105ce",other:"oko\u0142o {{count}} miesi\u0119cy"},xMonths:{one:"miesi\u0105c",twoFour:"{{count}} miesi\u0105ce",other:"{{count}} miesi\u0119cy"},aboutXYears:{one:"oko\u0142o rok",twoFour:"oko\u0142o {{count}} lata",other:"oko\u0142o {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};e.exports=t.default},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(33))&&i.__esModule?i:{default:i};var a={date:(0,o.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=a,e.exports=t.default},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){var o=c[e];if("function"===typeof o)return o(e,t,n,i);return o};var i,o=(i=n(827))&&i.__esModule?i:{default:i};var a={masculine:"ostatni",feminine:"ostatnia"},r={masculine:"ten",feminine:"ta"},u={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},d={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function s(e,t,n,i){var s=t.getUTCDay();return function(e,t,n,i){if((0,o.default)(t,n,i))return r;if("lastWeek"===e)return a;if("nextWeek"===e)return u;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,i)[d[s]]}function l(e,t,n,i){var o=s(e,t,n,i);return"'".concat(o,"' eeee 'o' p")}var c={lastWeek:l,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:l,other:"P"};e.exports=t.default},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(34))&&i.__esModule?i:{default:i};var a={ordinalNumber:function(e){var t=Number(e);return String(t)},era:(0,o.default)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed nasz\u0105 er\u0105","naszej ery"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015bnia","pa\u017adziernika","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["N","P","W","\u015a","C","P","S"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","\u015b","c","p","s"],short:["nie","pon","wto","\u015bro","czw","pi\u0105","sob"],abbreviated:["niedz.","pon.","wt.","\u015br.","czw.","pt.","sob."],wide:["niedziela","poniedzia\u0142ek","wtorek","\u015broda","czwartek","pi\u0105tek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"p\xf3\u0142n.",noon:"po\u0142",morning:"rano",afternoon:"popo\u0142.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"p\xf3\u0142noc",noon:"po\u0142udnie",morning:"rano",afternoon:"popo\u0142udnie",evening:"wiecz\xf3r",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o p\xf3\u0142n.",noon:"w po\u0142.",morning:"rano",afternoon:"po po\u0142.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o p\xf3\u0142nocy",noon:"w po\u0142udnie",morning:"rano",afternoon:"po po\u0142udniu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})};t.default=a,e.exports=t.default},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(35)),o=a(n(36));function a(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(\u0105|a)\s*er(\u0105|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(\u0142|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(\u017a|z)|lis|gru)/i,wide:/^(stycznia|stycze(\u0144|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(\u0144|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(\u0144|n)|wrze(\u015b|s)nia|wrzesie(\u0144|n)|pa(\u017a|z)dziernika|pa(\u017a|z)dziernik|listopada|listopad|grudnia|grudzie(\u0144|n))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[npw\u015bcs]/i,short:/^(nie|pon|wto|(\u015b|s)ro|czw|pi(\u0105|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(\u015b|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(\u0142|l)ek|wtorek|(\u015b|s)roda|czwartek|pi(\u0105|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^\u015b/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(\u015b|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(^a$|^p$|p\xf3(\u0142|l)n\.?|o\s*p\xf3(\u0142|l)n\.?|po(\u0142|l)\.?|w\s*po(\u0142|l)\.?|po\s*po(\u0142|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|p\xf3(\u0142|l)noc|o\s*p\xf3(\u0142|l)nocy|po(\u0142|l)udnie|w\s*po(\u0142|l)udnie|popo(\u0142|l)udnie|po\s*po(\u0142|l)udniu|rano|wiecz\xf3r|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/p\xf3(\u0142|l)n/i,noon:/po(\u0142|l)/i,morning:/rano/i,afternoon:/po\s*po(\u0142|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(301)),o=d(n(302)),a=d(n(303)),r=d(n(304)),u=d(n(305));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"pl",formatDistance:i.default,formatLong:o.default,formatRelative:a.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default},827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,o.default)(2,arguments);var a=(0,i.default)(e,n),r=(0,i.default)(t,n);return a.getTime()===r.getTime()};var i=a(n(45)),o=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=7.f7a92a64.chunk.js.map