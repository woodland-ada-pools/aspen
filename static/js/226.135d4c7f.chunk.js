(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[226],{193:function(i,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(e(34)),r=n(e(35));function n(i){return i&&i.__esModule?i:{default:i}}var d=["\u05e8\u05d0","\u05e9\u05e0","\u05e9\u05dc","\u05e8\u05d1","\u05d7","\u05e9\u05d9","\u05e9\u05d1","\u05e9\u05de","\u05ea","\u05e2"],s={ordinalNumber:(0,t.default)({matchPattern:/^(\d+|(\u05e8\u05d0\u05e9\u05d5\u05df|\u05e9\u05e0\u05d9|\u05e9\u05dc\u05d9\u05e9\u05d9|\u05e8\u05d1\u05d9\u05e2\u05d9|\u05d7\u05de\u05d9\u05e9\u05d9|\u05e9\u05d9\u05e9\u05d9|\u05e9\u05d1\u05d9\u05e2\u05d9|\u05e9\u05de\u05d9\u05e0\u05d9|\u05ea\u05e9\u05d9\u05e2\u05d9|\u05e2\u05e9\u05d9\u05e8\u05d9|\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4|\u05e9\u05e0\u05d9\u05d9\u05d4|\u05e9\u05dc\u05d9\u05e9\u05d9\u05ea|\u05e8\u05d1\u05d9\u05e2\u05d9\u05ea|\u05d7\u05de\u05d9\u05e9\u05d9\u05ea|\u05e9\u05d9\u05e9\u05d9\u05ea|\u05e9\u05d1\u05d9\u05e2\u05d9\u05ea|\u05e9\u05de\u05d9\u05e0\u05d9\u05ea|\u05ea\u05e9\u05d9\u05e2\u05d9\u05ea|\u05e2\u05e9\u05d9\u05e8\u05d9\u05ea))/i,parsePattern:/^(\d+|\u05e8\u05d0|\u05e9\u05e0|\u05e9\u05dc|\u05e8\u05d1|\u05d7|\u05e9\u05d9|\u05e9\u05d1|\u05e9\u05de|\u05ea|\u05e2)/i,valueCallback:function(i){var a=parseInt(i,10);return isNaN(a)?d.indexOf(i)+1:a}}),era:(0,r.default)({matchPatterns:{narrow:/^\u05dc(\u05e1\u05e4\u05d9\u05e8\u05d4|\u05e4\u05e0\u05d4\u05f4\u05e1)/i,abbreviated:/^\u05dc(\u05e1\u05e4\u05d9\u05e8\u05d4|\u05e4\u05e0\u05d4\u05f4\u05e1)/i,wide:/^\u05dc(\u05e4\u05e0\u05d9 \u05d4)?\u05e1\u05e4\u05d9\u05e8\u05d4/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u05dc\u05e4/i,/^\u05dc\u05e1/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^\u05e8\u05d1\u05e2\u05d5\u05df [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^\d+/i,abbreviated:/^(\u05d9\u05e0\u05d5|\u05e4\u05d1\u05e8|\u05de\u05e8\u05e5|\u05d0\u05e4\u05e8|\u05de\u05d0\u05d9|\u05d9\u05d5\u05e0\u05d9|\u05d9\u05d5\u05dc\u05d9|\u05d0\u05d5\u05d2|\u05e1\u05e4\u05d8|\u05d0\u05d5\u05e7|\u05e0\u05d5\u05d1|\u05d3\u05e6\u05de)\u05f3?/i,wide:/^(\u05d9\u05e0\u05d5\u05d0\u05e8|\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8|\u05de\u05e8\u05e5|\u05d0\u05e4\u05e8\u05d9\u05dc|\u05de\u05d0\u05d9|\u05d9\u05d5\u05e0\u05d9|\u05d9\u05d5\u05dc\u05d9|\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8|\u05e1\u05e4\u05d8\u05de\u05d1\u05e8|\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8|\u05e0\u05d5\u05d1\u05de\u05d1\u05e8|\u05d3\u05e6\u05de\u05d1\u05e8)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1$/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^\u05d9\u05e0/i,/^\u05e4/i,/^\u05de\u05e8/i,/^\u05d0\u05e4/i,/^\u05de\u05d0/i,/^\u05d9\u05d5\u05e0/i,/^\u05d9\u05d5\u05dc/i,/^\u05d0\u05d5\u05d2/i,/^\u05e1/i,/^\u05d0\u05d5\u05e7/i,/^\u05e0/i,/^\u05d3/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05e9]\u05f3/i,short:/^[\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05e9]\u05f3/i,abbreviated:/^(\u05e9\u05d1\u05ea|\u05d9\u05d5\u05dd (\u05d0|\u05d1|\u05d2|\u05d3|\u05d4|\u05d5)\u05f3)/i,wide:/^\u05d9\u05d5\u05dd (\u05e8\u05d0\u05e9\u05d5\u05df|\u05e9\u05e0\u05d9|\u05e9\u05dc\u05d9\u05e9\u05d9|\u05e8\u05d1\u05d9\u05e2\u05d9|\u05d7\u05de\u05d9\u05e9\u05d9|\u05e9\u05d9\u05e9\u05d9|\u05e9\u05d1\u05ea)/i},defaultMatchWidth:"wide",parsePatterns:{abbreviated:[/\u05d0\u05f3$/i,/\u05d1\u05f3$/i,/\u05d2\u05f3$/i,/\u05d3\u05f3$/i,/\u05d4\u05f3$/i,/\u05d5\u05f3$/i,/^\u05e9/i],wide:[/\u05df$/i,/\u05e0\u05d9$/i,/\u05dc\u05d9\u05e9\u05d9$/i,/\u05e2\u05d9$/i,/\u05de\u05d9\u05e9\u05d9$/i,/\u05e9\u05d9\u05e9\u05d9$/i,/\u05ea$/i],any:[/^\u05d0/i,/^\u05d1/i,/^\u05d2/i,/^\u05d3/i,/^\u05d4/i,/^\u05d5/i,/^\u05e9/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(\u05d0\u05d7\u05e8 \u05d4|\u05d1)?(\u05d7\u05e6\u05d5\u05ea|\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05d5\u05e7\u05e8|\u05e2\u05e8\u05d1|\u05dc\u05d9\u05dc\u05d4|\u05d0\u05d7\u05d4\u05f4\u05e6|\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u05dc\u05e4/i,pm:/^\u05d0\u05d7\u05d4/i,midnight:/^\u05d7/i,noon:/^\u05e6/i,morning:/\u05d1\u05d5\u05e7\u05e8/i,afternoon:/\u05d1\u05e6|\u05d0\u05d7\u05e8/i,evening:/\u05e2\u05e8\u05d1/i,night:/\u05dc\u05d9\u05dc\u05d4/i}},defaultParseWidth:"any"})};a.default=s,i.exports=a.default}}]);
//# sourceMappingURL=226.135d4c7f.chunk.js.map