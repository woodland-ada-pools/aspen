(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[296],{265:function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=s(t(35)),r=s(t(36));function s(i){return i&&i.__esModule?i:{default:i}}var n={ordinalNumber:(0,e.default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(p\.m\.\u0113|m\.\u0113)/i,abbreviated:/^(p\. m\. \u0113\.|m\. \u0113\.)/i,wide:/^(pirms m\u016bsu \u0113ras|m\u016bsu \u0113r\u0101)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|j\u0101)|otra(is|j\u0101)|tre\u0161a(is|j\u0101)|ceturta(is|j\u0101)) ceturksn(is|\u012b)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|j\u016bn\.|j\u016bl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janv\u0101r(is|\u012b)|febru\u0101r(is|\u012b)|mart[s\u0101]|apr\u012bl(is|\u012b)|maij[s\u0101]|j\u016bnij[s\u0101]|j\u016blij[s\u0101]|august[s\u0101]|septembr(is|\u012b)|oktobr(is|\u012b)|novembr(is|\u012b)|decembr(is|\u012b))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^j\u016bn/i,/^j\u016bl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(sv\u0113td\.|pirmd\.|otrd.\|tre\u0161d\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(sv\u0113tdien(a|\u0101)|pirmdien(a|\u0101)|otrdien(a|\u0101)|tre\u0161dien(a|\u0101)|ceturtdien(a|\u0101)|piektdien(a|\u0101)|sestdien(a|\u0101))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|dien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/,abbreviated:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|p\u0113cpusd\.|vakar(s|\u0101)|nakt(s|\u012b))/,wide:/^(am|pm|pusnakt(s|\u012b)|pusdienlaik(s|\u0101)|r\u012bt(s|\u0101)|p\u0113cpusdien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|p\u0113c)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})};a.default=n,i.exports=a.default}}]);
//# sourceMappingURL=296.c63941ea.chunk.js.map