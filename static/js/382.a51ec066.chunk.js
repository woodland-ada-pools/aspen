(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[382],{357:function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(t(34)),r=n(t(35));function n(i){return i&&i.__esModule?i:{default:i}}var d={ordinalNumber:(0,e.default)({matchPattern:/^(\d+)(\u0bb5\u0ba4\u0bc1)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0b95\u0bbf.\u0bae\u0bc1.|\u0b95\u0bbf.\u0baa\u0bbf.)/i,abbreviated:/^(\u0b95\u0bbf\.?\s?\u0bae\u0bc1\.?|\u0b95\u0bbf\.?\s?\u0baa\u0bbf\.?)/,wide:/^(\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1\s\u0bae\u0bc1\u0ba9\u0bcd|\u0b85\u0ba9\u0bcd\u0ba9\u0bcb\s\u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u0b95\u0bbf\.?\s?\u0bae\u0bc1\.?/,/\u0b95\u0bbf\.?\s?\u0baa\u0bbf\.?/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0b95\u0bbe\u0bb2\u0bbe.[1234]/i,wide:/^(\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd|\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd|\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd|\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd) \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/(1|\u0b95\u0bbe\u0bb2\u0bbe.1|\u0b92\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd)/i,/(2|\u0b95\u0bbe\u0bb2\u0bbe.2|\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd)/i,/(3|\u0b95\u0bbe\u0bb2\u0bbe.3|\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd)/i,/(4|\u0b95\u0bbe\u0bb2\u0bbe.4|\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd)/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(\u0b9c|\u0baa\u0bbf|\u0bae\u0bbe|\u0b8f|\u0bae\u0bc7|\u0b9c\u0bc2|\u0b86|\u0b9a\u0bc6|\u0b85|\u0ba8|\u0b9f\u0bbf)$/i,abbreviated:/^(\u0b9c\u0ba9.|\u0baa\u0bbf\u0baa\u0bcd.|\u0bae\u0bbe\u0bb0\u0bcd.|\u0b8f\u0baa\u0bcd.|\u0bae\u0bc7|\u0b9c\u0bc2\u0ba9\u0bcd|\u0b9c\u0bc2\u0bb2\u0bc8|\u0b86\u0b95.|\u0b9a\u0bc6\u0baa\u0bcd.|\u0b85\u0b95\u0bcd.|\u0ba8\u0bb5.|\u0b9f\u0bbf\u0b9a.)/i,wide:/^(\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf|\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf|\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd|\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd|\u0bae\u0bc7|\u0b9c\u0bc2\u0ba9\u0bcd|\u0b9c\u0bc2\u0bb2\u0bc8|\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd|\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd|\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd|\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd|\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0b9c$/i,/^\u0baa\u0bbf/i,/^\u0bae\u0bbe/i,/^\u0b8f/i,/^\u0bae\u0bc7/i,/^\u0b9c\u0bc2/i,/^\u0b9c\u0bc2/i,/^\u0b86/i,/^\u0b9a\u0bc6/i,/^\u0b85/i,/^\u0ba8/i,/^\u0b9f\u0bbf/i],any:[/^\u0b9c\u0ba9/i,/^\u0baa\u0bbf/i,/^\u0bae\u0bbe/i,/^\u0b8f/i,/^\u0bae\u0bc7/i,/^\u0b9c\u0bc2\u0ba9\u0bcd/i,/^\u0b9c\u0bc2\u0bb2\u0bc8/i,/^\u0b86/i,/^\u0b9a\u0bc6/i,/^\u0b85/i,/^\u0ba8/i,/^\u0b9f\u0bbf/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u0b9e\u0bbe|\u0ba4\u0bbf|\u0b9a\u0bc6|\u0baa\u0bc1|\u0bb5\u0bbf|\u0bb5\u0bc6|\u0b9a)/i,short:/^(\u0b9e\u0bbe|\u0ba4\u0bbf|\u0b9a\u0bc6|\u0baa\u0bc1|\u0bb5\u0bbf|\u0bb5\u0bc6|\u0b9a)/i,abbreviated:/^(\u0b9e\u0bbe\u0baf\u0bbf.|\u0ba4\u0bbf\u0b99\u0bcd.|\u0b9a\u0bc6\u0bb5\u0bcd.|\u0baa\u0bc1\u0ba4.|\u0bb5\u0bbf\u0baf\u0bbe.|\u0bb5\u0bc6\u0bb3\u0bcd.|\u0b9a\u0ba9\u0bbf)/i,wide:/^(\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1|\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd|\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd|\u0baa\u0bc1\u0ba4\u0ba9\u0bcd|\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd|\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf|\u0b9a\u0ba9\u0bbf)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0b9e\u0bbe/i,/^\u0ba4\u0bbf/i,/^\u0b9a\u0bc6/i,/^\u0baa\u0bc1/i,/^\u0bb5\u0bbf/i,/^\u0bb5\u0bc6/i,/^\u0b9a/i],any:[/^\u0b9e\u0bbe/i,/^\u0ba4\u0bbf/i,/^\u0b9a\u0bc6/i,/^\u0baa\u0bc1/i,/^\u0bb5\u0bbf/i,/^\u0bb5\u0bc6/i,/^\u0b9a/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(\u0bae\u0bc1.\u0baa|\u0baa\u0bbf.\u0baa|\u0ba8\u0bb3\u0bcd|\u0ba8\u0ba3\u0bcd|\u0b95\u0bbe\u0bb2\u0bc8|\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd|\u0bae\u0bbe\u0bb2\u0bc8|\u0b87\u0bb0\u0bb5\u0bc1)/i,any:/^(\u0bae\u0bc1.\u0baa|\u0baa\u0bbf.\u0baa|\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0ba8\u0bb3\u0bcd\u0bb3\u0bbf\u0bb0\u0bb5\u0bc1|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b95\u0bbe\u0bb2\u0bc8|\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd|\u0bae\u0bbe\u0bb2\u0bc8|\u0b87\u0bb0\u0bb5\u0bc1)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0bae\u0bc1/i,pm:/^\u0baa\u0bbf/i,midnight:/^\u0ba8\u0bb3\u0bcd/i,noon:/^\u0ba8\u0ba3\u0bcd/i,morning:/\u0b95\u0bbe\u0bb2\u0bc8/i,afternoon:/\u0bae\u0ba4\u0bbf\u0baf\u0bae\u0bcd/i,evening:/\u0bae\u0bbe\u0bb2\u0bc8/i,night:/\u0b87\u0bb0\u0bb5\u0bc1/i}},defaultParseWidth:"any"})};a.default=d,i.exports=a.default}}]);
//# sourceMappingURL=382.a51ec066.chunk.js.map