(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[183],{154:function(a,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=n(e(34)),r=n(e(35));function n(a){return a&&a.__esModule?a:{default:a}}var o={ordinalNumber:(0,t.default)({matchPattern:/^(\d+)(.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(k.a.|k.o.)/i,abbreviated:/^(k.a.|k.o.)/i,wide:/^(kristo aurretik|kristo ondoren)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^k.a./i,/^k.o./i],abbreviated:[/^(k.a.)/i,/^(k.o.)/i],wide:[/^(kristo aurretik)/i,/^(kristo ondoren)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]H/i,wide:/^[1234](.)? hiruhilekoa/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[uomaei]/i,abbreviated:/^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,wide:/^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^u/i,/^o/i,/^m/i,/^a/i,/^m/i,/^e/i,/^u/i,/^a/i,/^i/i,/^u/i,/^a/i,/^a/i],any:[/^urt/i,/^ots/i,/^mar/i,/^api/i,/^mai/i,/^eka/i,/^uzt/i,/^abu/i,/^ira/i,/^urr/i,/^aza/i,/^abe/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[iaol]/i,short:/^(ig|al|as|az|og|or|lr)/i,abbreviated:/^(iga|ast|ast|ast|ost|ost|lar)/i,wide:/^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^a/i,/^a/i,/^a/i,/^o/i,/^o/i,/^l/i],short:[/^ig/i,/^al/i,/^as/i,/^az/i,/^og/i,/^or/i,/^lr/i],abbreviated:[/^iga/i,/^ast/i,/^ast/i,/^ast/i,/^ost/i,/^ost/i,/^lar/i],wide:[/^igandea/i,/^astelehena/i,/^asteartea/i,/^asteazkena/i,/^osteguna/i,/^ostirala/i,/^larunbata/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,any:/^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a/i,pm:/^p/i,midnight:/^ge/i,noon:/^eg/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i},any:{am:/^a/i,pm:/^p/i,midnight:/^gauerdia/i,noon:/^eguerdia/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i}},defaultParseWidth:"any"})};i.default=o,a.exports=i.default}}]);
//# sourceMappingURL=183.65dd1bd0.chunk.js.map