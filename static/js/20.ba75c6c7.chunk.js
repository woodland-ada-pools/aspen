(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[20,137,138,139,140,141],{108:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n){var d;n=n||{},d="string"===typeof t[e]?t[e]:1===a?t[e].one:2===a&&t[e].two?t[e].two:t[e].other.replace("{{count}}",a);if(n.addSuffix)return n.comparison>0?"mewn "+d:d+" yn \xf4l";return d};var t={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}};e.exports=a.default},109:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,d=(t=n(32))&&t.__esModule?t:{default:t};var r={date:(0,d.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,d.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,d.default)({formats:{full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},110:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n,d){return t[e]};var t={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"};e.exports=a.default},111:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,d=(t=n(33))&&t.__esModule?t:{default:t};var r={ordinalNumber:function(e,a){var n=Number(e);if(n<20)switch(n){case 0:return n+"fed";case 1:return n+"af";case 2:return n+"ail";case 3:case 4:return n+"ydd";case 5:case 6:return n+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return n+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return n+"eg"}else if(n>=50&&n<=60||80===n||n>=100)return n+"fed";return n+"ain"},era:(0,d.default)({values:{narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar \xf4l Crist"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:{narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},defaultWidth:"wide",formattingValues:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},112:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(34)),d=r(n(35));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,t.default)({matchPattern:/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,d.default)({matchPatterns:{narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar \xf4l crist|ar ol crist)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^c/i,/^(ar \xf4l crist|ar ol crist)/i],any:[/^c/i,/^o/i]},defaultParseWidth:"any"}),quarter:(0,d.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,d.default)({matchPatterns:{narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},defaultParseWidth:"any"}),day:(0,d.default)({matchPatterns:{narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,d.default)({matchPatterns:{narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},defaultParseWidth:"any"})};a.default=i,e.exports=a.default},411:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=u(n(108)),d=u(n(109)),r=u(n(110)),i=u(n(111)),o=u(n(112));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"cy",formatDistance:t.default,formatLong:d.default,formatRelative:r.default,localize:i.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=20.ba75c6c7.chunk.js.map