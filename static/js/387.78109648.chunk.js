(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[387],{360:function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(t(35)),r=n(t(36));function n(i){return i&&i.__esModule?i:{default:i}}var d={ordinalNumber:(0,e.default)({matchPattern:/^(\d+)(\u0c35)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0c15\u0c4d\u0c30\u0c40\.\u0c2a\u0c42\.|\u0c15\u0c4d\u0c30\u0c40\.\u0c36\.)/i,abbreviated:/^(\u0c15\u0c4d\u0c30\u0c40\.?\s?\u0c2a\u0c42\.?|\u0c2a\u0c4d\u0c30\.?\s?\u0c36\.?\s?\u0c2a\u0c42\.?|\u0c15\u0c4d\u0c30\u0c40\.?\s?\u0c36\.?|\u0c38\u0c3e\.?\s?\u0c36\.?)/i,wide:/^(\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41 \u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c02|\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c36\u0c15\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c02|\u0c15\u0c4d\u0c30\u0c40\u0c38\u0c4d\u0c24\u0c41 \u0c36\u0c15\u0c02|\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c36\u0c15\u0c02)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u0c2a\u0c42|\u0c36)/i,/^\u0c38\u0c3e/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0c24\u0c4d\u0c30\u0c48[1234]/i,wide:/^[1234](\u0c35)? \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c3f\u0c15\u0c02/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(\u0c1c\u0c42|\u0c1c\u0c41|\u0c1c|\u0c2b\u0c3f|\u0c2e\u0c3e|\u0c0f|\u0c2e\u0c47|\u0c06|\u0c38\u0c46|\u0c05|\u0c28|\u0c21\u0c3f)/i,abbreviated:/^(\u0c1c\u0c28|\u0c2b\u0c3f\u0c2c\u0c4d\u0c30|\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f|\u0c0f\u0c2a\u0c4d\u0c30\u0c3f|\u0c2e\u0c47|\u0c1c\u0c42\u0c28\u0c4d|\u0c1c\u0c41\u0c32\u0c48|\u0c06\u0c17|\u0c38\u0c46\u0c2a\u0c4d|\u0c05\u0c15\u0c4d\u0c1f\u0c4b|\u0c28\u0c35|\u0c21\u0c3f\u0c38\u0c46)/i,wide:/^(\u0c1c\u0c28\u0c35\u0c30\u0c3f|\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f|\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f|\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d|\u0c2e\u0c47|\u0c1c\u0c42\u0c28\u0c4d|\u0c1c\u0c41\u0c32\u0c48|\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41|\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d|\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d|\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d|\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c1c/i,/^\u0c2b\u0c3f/i,/^\u0c2e\u0c3e/i,/^\u0c0f/i,/^\u0c2e\u0c47/i,/^\u0c1c\u0c42/i,/^\u0c1c\u0c41/i,/^\u0c06/i,/^\u0c38\u0c46/i,/^\u0c05/i,/^\u0c28/i,/^\u0c21\u0c3f/i],any:[/^\u0c1c\u0c28/i,/^\u0c2b\u0c3f/i,/^\u0c2e\u0c3e/i,/^\u0c0f/i,/^\u0c2e\u0c47/i,/^\u0c1c\u0c42\u0c28\u0c4d/i,/^\u0c1c\u0c41\u0c32\u0c48/i,/^\u0c06\u0c17/i,/^\u0c38\u0c46/i,/^\u0c05/i,/^\u0c28/i,/^\u0c21\u0c3f/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u0c06|\u0c38\u0c4b|\u0c2e|\u0c2c\u0c41|\u0c17\u0c41|\u0c36\u0c41|\u0c36)/i,short:/^(\u0c06\u0c26\u0c3f|\u0c38\u0c4b\u0c2e|\u0c2e\u0c02|\u0c2c\u0c41\u0c27|\u0c17\u0c41\u0c30\u0c41|\u0c36\u0c41\u0c15\u0c4d\u0c30|\u0c36\u0c28\u0c3f)/i,abbreviated:/^(\u0c06\u0c26\u0c3f|\u0c38\u0c4b\u0c2e|\u0c2e\u0c02|\u0c2c\u0c41\u0c27|\u0c17\u0c41\u0c30\u0c41|\u0c36\u0c41\u0c15\u0c4d\u0c30|\u0c36\u0c28\u0c3f)/i,wide:/^(\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02|\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02|\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02|\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02|\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02|\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02|\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c06/i,/^\u0c38\u0c4b/i,/^\u0c2e/i,/^\u0c2c\u0c41/i,/^\u0c17\u0c41/i,/^\u0c36\u0c41/i,/^\u0c36/i],any:[/^\u0c06\u0c26\u0c3f/i,/^\u0c38\u0c4b\u0c2e/i,/^\u0c2e\u0c02/i,/^\u0c2c\u0c41\u0c27/i,/^\u0c17\u0c41\u0c30\u0c41/i,/^\u0c36\u0c41\u0c15\u0c4d\u0c30/i,/^\u0c36\u0c28\u0c3f/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02|\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f)/i,any:/^(\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c05\u0c30\u0c4d\u0c27\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02|\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0c2a\u0c42\u0c30\u0c4d\u0c35\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,pm:/^\u0c05\u0c2a\u0c30\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,midnight:/^\u0c05\u0c30\u0c4d\u0c27/i,noon:/^\u0c2e\u0c3f\u0c1f\u0c4d\u0c1f/i,morning:/\u0c09\u0c26\u0c2f\u0c02/i,afternoon:/\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02/i,evening:/\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/i,night:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f/i}},defaultParseWidth:"any"})};a.default=d,i.exports=a.default}}]);
//# sourceMappingURL=387.78109648.chunk.js.map