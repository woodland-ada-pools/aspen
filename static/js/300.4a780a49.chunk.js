(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[300],{270:function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(t(36));function n(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,n(t(35)).default)({matchPattern:/^(\d+)(-?[\u0432\u0440\u043c\u0442][\u0438])?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,e.default)({matchPatterns:{narrow:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u043f\u0440\u0435\u0434 \u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043f/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,e.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u0432\u0440\u0442]?\u0438?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,e.default)({matchPatterns:{abbreviated:/^(\u0458\u0430\u043d|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0458|\u0458\u0443\u043d|\u0458\u0443\u043b|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0435\u043c|\u0434\u0435\u043a)/i,wide:/^(\u0458\u0430\u043d\u0443\u0430\u0440\u0438|\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0438\u043b|\u043c\u0430\u0458|\u0458\u0443\u043d\u0438|\u0458\u0443\u043b\u0438|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438|\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438|\u043d\u043e\u0435\u043c\u0432\u0440\u0438|\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0458\u0430/i,/^\u0424/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0458/i,/^\u0458\u0443\u043d/i,/^\u0458\u0443\u043b/i,/^\u0430\u0432/i,/^\u0441\u0435/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e/i,/^\u0434\u0435/i]},defaultParseWidth:"any"}),day:(0,e.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0435|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0435|\u043f\u0435|\u0441\u0430)/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0442\u043e|\u0441\u0440\u0435|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u0430\u0431)/i,wide:/^(\u043d\u0435\u0434\u0435\u043b\u0430|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u0435\u0434\u0430|\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a|\u043f\u0435\u0442\u043e\u043a|\u0441\u0430\u0431\u043e\u0442\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d[\u0435\u0434]/i,/^\u043f[\u043e\u043d]/i,/^\u0432\u0442/i,/^\u0441\u0440/i,/^\u0447[\u0435\u0442]/i,/^\u043f[\u0435\u0442]/i,/^\u0441[\u0430\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,e.default)({matchPatterns:{any:/^(\u043f\u0440\u0435\u0442\u043f|\u043f\u043e\u043f\u043b|\u043f\u043e\u043b\u043d\u043e\u045c|\u0443\u0442\u0440\u043e|\u043f\u043b\u0430\u0434\u043d\u0435|\u0432\u0435\u0447\u0435\u0440|\u043d\u043e\u045c)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435/i,pm:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,midnight:/\u043f\u043e\u043b\u043d\u043e\u045c/i,noon:/\u043d\u0430\u043f\u043b\u0430\u0434\u043d\u0435/i,morning:/\u043d\u0430\u0443\u0442\u0440\u043e/i,afternoon:/\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435/i,evening:/\u043d\u0430\u0432\u0435\u0447\u0435\u0440/i,night:/\u043d\u043e\u045c\u0435/i}},defaultParseWidth:"any"})};i.default=r,a.exports=i.default}}]);
//# sourceMappingURL=300.4a780a49.chunk.js.map