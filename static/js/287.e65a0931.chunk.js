(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[287],{255:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i(34)),n=r(i(35));function r(e){return e&&e.__esModule?e:{default:e}}var s={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Z\xe4itrechnung|no Christus|eiser Z\xe4itrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4e|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4erz|abr\xebll|mee|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smdf]/i,short:/^(so|m\xe9|d\xeb|m\xeb|do|fr|sa)/i,abbreviated:/^(son?|m\xe9i?|d\xebn?|m\xebt?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|m\xe9indeg|d\xebnschdeg|m\xebttwoch|donneschdeg|freideg|samschdeg)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^m\xe9/i,/^d\xeb/i,/^m\xeb/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(mo\.?|nom\xeb\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,abbreviated:/^(moi\.?|nom\xebt\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,wide:/^(moies|nom\xebttes|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^m/i,pm:/^n/i,midnight:/^M\xebtter/i,noon:/^m\xebttes/i,morning:/moies/i,afternoon:/nom\xebttes/i,evening:/owes/i,night:/nuets/i}},defaultParseWidth:"any"})};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=287.e65a0931.chunk.js.map