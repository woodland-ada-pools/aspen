(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[192],{165:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=(t=i(33))&&t.__esModule?t:{default:t};var u={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},l={narrow:u.narrow,abbreviated:u.abbreviated,wide:u.wide.map((function(a){return a+"ta"}))},r={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},o={narrow:r.narrow,short:r.short,abbreviated:r.abbreviated,wide:r.wide.map((function(a){return a+"na"}))};var d={ordinalNumber:function(a){return Number(a)+"."},era:(0,n.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,n.default)({values:u,formattingValues:l,defaultWidth:"wide"}),day:(0,n.default)({values:r,formattingValues:o,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=192.1a17faf2.chunk.js.map