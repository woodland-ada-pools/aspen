(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[234],{200:function(a,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(e(36));function r(a){return a&&a.__esModule?a:{default:a}}var n={ordinalNumber:(0,r(e(35)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,t.default)({matchPatterns:{narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,wide:/^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|nova)/i]},defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,t.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(sij|velj|(o\u017eu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,wide:/^((sije\u010danj|sije\u010dnja|sijecanj|sijecnja)|(velja\u010da|velja\u010de|veljaca|veljace)|(o\u017eujak|o\u017eujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],abbreviated:[/^sij/i,/^velj/i,/^(o\u017eu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i],wide:[/^sij/i,/^velj/i,/^(o\u017eu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i]},defaultParseWidth:"wide"}),day:(0,t.default)({matchPatterns:{narrow:/^[npus\u010dc]/i,short:/^(ned|pon|uto|sri|(\u010det|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sri|(\u010det|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(\u010detvrtak|cetvrtak)|petak|subota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:{any:/^(am|pm|ponoc|pono\u0107|(po)?podne|navecer|nave\u010der|no\u0107u|poslije podne|ujutro)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(navece|nave\u010de)/i,night:/(nocu|no\u0107u)/i}},defaultParseWidth:"any"})};i.default=n,a.exports=i.default}}]);
//# sourceMappingURL=234.6dad55f7.chunk.js.map