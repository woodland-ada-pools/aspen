(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[372],{340:function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=r(t(37));function r(a){return a&&a.__esModule?a:{default:a}}var n={ordinalNumber:(0,r(t(36)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,e.default)({matchPatterns:{narrow:/^(\u043f\u0440\.\u043d\.\u0435\.|\u0410\u0414)/i,abbreviated:/^(\u043f\u0440\.\s?\u0425\u0440\.|\u043f\u043e\.\s?\u0425\u0440\.)/i,wide:/^(\u041f\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043f\u0440\u0435 \u043d\u043e\u0432\u0435 \u0435\u0440\u0435|\u041f\u043e\u0441\u043b\u0435 \u0425\u0440\u0438\u0441\u0442\u0430|\u043d\u043e\u0432\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f\u0440/i,/^(\u043f\u043e|\u043d\u043e\u0432\u0430)/i]},defaultParseWidth:"any"}),quarter:(0,e.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?\u043a\u0432\.?/i,wide:/^[1234]\. \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,e.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0431|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0432|\u0434\u0435\u0446)/i,wide:/^((\u0458\u0430\u043d\u0443\u0430\u0440|\u0458\u0430\u043d\u0443\u0430\u0440\u0430)|(\u0444\u0435\u0431\u0440\u0443\u0430\u0440|\u0444\u0435\u0431\u0440\u0443\u0430\u0440\u0430)|(\u043c\u0430\u0440\u0442|\u043c\u0430\u0440\u0442\u0430)|(\u0430\u043f\u0440\u0438\u043b|\u0430\u043f\u0440\u0438\u043b\u0430)|(\u043c\u0458\u0430|\u043c\u0430\u0458\u0430)|(\u0458\u0443\u043d|\u0458\u0443\u043d\u0430)|(\u0458\u0443\u043b|\u0458\u0443\u043b\u0430)|(\u0430\u0432\u0433\u0443\u0441\u0442|\u0430\u0432\u0433\u0443\u0441\u0442\u0430)|(\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440|\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0440\u0430)|(\u043e\u043a\u0442\u043e\u0431\u0430\u0440|\u043e\u043a\u0442\u043e\u0431\u0440\u0430)|(\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440|\u043d\u043e\u0432\u0435\u043c\u0431\u0440\u0430)|(\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440|\u0434\u0435\u0446\u0435\u043c\u0431\u0440\u0430))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],any:[/^\u0458\u0430/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:(0,e.default)({matchPatterns:{narrow:/^[\u043f\u0443\u0441\u0447\u043d]/i,short:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0443\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0443\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u0459\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a|\u0443\u0442\u043e\u0440\u0430\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a|\u043f\u0435\u0442\u0430\u043a|\u0441\u0443\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043f/i,/^\u0443/i,/^\u0441/i,/^\u0447/i,/^\u043d/i],any:[/^\u043d\u0435\u0434/i,/^\u043f\u043e\u043d/i,/^\u0443\u0442\u043e/i,/^\u0441\u0440\u0435/i,/^\u0447\u0435\u0442/i,/^\u043f\u0435\u0442/i,/^\u0441\u0443\u0431/i]},defaultParseWidth:"any"}),dayPeriod:(0,e.default)({matchPatterns:{any:/^(\u0430\u043c|\u043f\u043c|\u043f\u043e\u043d\u043e\u045b|(\u043f\u043e)?\u043f\u043e\u0434\u043d\u0435|\u0443\u0432\u0435\u0447\u0435|\u043d\u043e\u045b\u0443|\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043d\u0435|\u0443\u0458\u0443\u0442\u0440\u0443)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u043f\u043e\u043d\u043e/i,noon:/^\u043f\u043e\u0434/i,morning:/\u0443\u0458\u0443\u0442\u0440\u0443/i,afternoon:/(\u043f\u043e\u0441\u043b\u0435\s|\u043f\u043e)+\u043f\u043e\u0434\u043d\u0435/i,evening:/(\u0443\u0432\u0435\u0447\u0435)/i,night:/(\u043d\u043e\u045b\u0443)/i}},defaultParseWidth:"any"})};i.default=n,a.exports=i.default}}]);
//# sourceMappingURL=372.bf77952d.chunk.js.map