(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[239],{205:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(a(36)),s=r(a(37));function r(e){return e&&e.__esModule?e:{default:e}}var n={ordinalNumber:(0,t.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,s.default)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk el\u0151tt|id\u0151sz\xe1m\xedt\xe1sunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/el\u0151tt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:(0,s.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.\xe9v/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyed\xe9v/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,s.default)({matchPatterns:{narrow:/^[jfma\xe1sond]|sz/i,abbreviated:/^(jan\.?|febr\.?|m\xe1rc\.?|\xe1pr\.?|m\xe1j\.?|j\xfan\.?|j\xfal\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(janu\xe1r|febru\xe1r|m\xe1rcius|\xe1prilis|m\xe1jus|j\xfanius|j\xfalius|augusztus|szeptember|okt\xf3ber|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|\xe1/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe1r/i,/^\xe1p/i,/^m\xe1j/i,/^j\xfan/i,/^j\xfal/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,s.default)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vas\xe1rnap|h\xe9tf\u0151|kedd|szerda|cs\xfct\xf6rt\xf6k|p\xe9ntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:(0,s.default)({matchPatterns:{any:/^((de|du)\.?|\xe9jf\xe9l|d\xe9lut\xe1n|d\xe9l|reggel|este|\xe9jjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^\xe9jf/i,noon:/^d\xe9/i,morning:/reg/i,afternoon:/^d\xe9lu\.?/i,evening:/es/i,night:/\xe9jj/i}},defaultParseWidth:"any"})};i.default=n,e.exports=i.default}}]);
//# sourceMappingURL=239.cfb94780.chunk.js.map