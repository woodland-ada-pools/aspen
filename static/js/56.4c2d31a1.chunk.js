(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[56,340,341,342,343,344],{306:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){var o;t=t||{},o="string"===typeof i[e]?i[e]:1===a?i[e].one:i[e].other.replace("{{count}}",a);if(t.addSuffix)return t.comparison>0?"daqui a "+o:"h\xe1 "+o;return o};var i={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};e.exports=a.default},307:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=(i=t(32))&&i.__esModule?i:{default:i};var n={date:(0,o.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=n,e.exports=a.default},308:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t,o){return i[e]};var i={lastWeek:"'na \xfaltima' eeee '\xe0s' p",yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};e.exports=a.default},309:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=(i=t(33))&&i.__esModule?i:{default:i};var n={ordinalNumber:function(e){return Number(e)+"\xba"},era:(0,o.default)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","s\xe1b"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xe1b"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})};a.default=n,e.exports=a.default},310:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(34)),o=n(t(35));function n(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(\xba|\xaa)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba|\xaa)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,wide:/^(domingo|segunda-?\s?feira|ter\xe7a-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[\xe1a]/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[\xe3a]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},457:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=s(t(306)),o=s(t(307)),n=s(t(308)),d=s(t(309)),r=s(t(310));function s(e){return e&&e.__esModule?e:{default:e}}var u={code:"pt",formatDistance:i.default,formatLong:o.default,formatRelative:n.default,localize:d.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=u,e.exports=a.default}}]);
//# sourceMappingURL=56.4c2d31a1.chunk.js.map