(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[378],{353:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n=e[o].default?u(e[o],a):u(1===t?e[o].one:e[o].other,a);return n.replace("{{count}}",t)};var e={lessThanXSeconds:{one:{default:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xSeconds:{one:{default:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf",in:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0baf\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},halfAMinute:{default:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",in:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b85\u0bb0\u0bc8 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},lessThanXMinutes:{one:{default:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb1\u0bc8\u0bb5\u0bbe\u0b95",in:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd",ago:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xMinutes:{one:{default:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",in:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXHours:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"}},xHours:{one:{default:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",in:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xDays:{one:{default:"1 \u0ba8\u0bbe\u0bb3\u0bcd",in:"1 \u0ba8\u0bbe\u0bb3\u0bbf\u0bb2\u0bcd",ago:"1 \u0ba8\u0bbe\u0bb3\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXWeeks:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xWeeks:{one:{default:"1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd",in:"1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXMonths:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xMonths:{one:{default:"1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",in:"1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd",ago:"1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",in:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},aboutXYears:{one:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b9a\u0bc1\u0bae\u0bbe\u0bb0\u0bcd {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},xYears:{one:{default:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},overXYears:{one:{default:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc7\u0bb2\u0bcd",in:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bc7\u0bb2\u0bbe\u0b95",ago:"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bc7\u0bb2\u0bbe\u0b95",in:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"{{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}},almostXYears:{one:{default:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",in:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0b86\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd",ago:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f 1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"},other:{default:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",in:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd",ago:"\u0b95\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0b9f\u0bcd\u0b9f {{count}} \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"}}};function u(o,t){return t.addSuffix?t.comparison>0?o.in:o.ago:o.default}o.exports=t.default}}]);
//# sourceMappingURL=378.02f7c938.chunk.js.map