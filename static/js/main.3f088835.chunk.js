(this.webpackJsonpaspen=this.webpackJsonpaspen||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(8),s=a.n(n),o=a(26),r=a.n(o),i=(a(109),a(27)),l=a(28),d=a(30),u=a(29),h=(a(110),a(46)),j=a.p+"static/media/logo_no_text.a4bdcd9b.svg",b=a.p+"static/media/logo_text.5d147cf5.svg",m=a(92),p=a(15),O=a(102),f=a(49),x=a(37),v=a(74);function y(e){var t=e.href,a=e.children;return Object(c.jsx)("span",{className:"externalLink",children:Object(c.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",children:a})})}function g(e){var t=e.children;return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-content",children:t})})}a(119);var w=a(75),N=w.youtubeUrl,k=w.youtubeApiKey,C=w.youtubeChannelID,D=/bot|crawl|spider|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent);var S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={videos:[],attempted:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;(D?Promise.reject():fetch("https://www.googleapis.com/youtube/v3/search?key=".concat(k,"&channelId=").concat(C,"&part=snippet,id&order=date&maxResults=3")).then((function(e){return e.json()})).then((function(e){return(e.items||[]).filter((function(e){return"youtube#video"===e.id.kind}))})).then((function(e){return e}))).then((function(t){e.setState({videos:t,attempted:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.videos,a=e.attempted;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:"sectionHeader",children:"Our Channel"}),Object(c.jsx)("div",{className:"youtubeChannel",children:Object(c.jsxs)("div",{className:"columns",children:[Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/wF0adviOgSs",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("h3",{children:"Recent Videos"}),t.length>0&&Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"columns",children:[Object(c.jsx)("div",{className:"column is-narrow",children:Object(c.jsx)("img",{src:e.snippet.thumbnails.default.url})}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("div",{className:"videoTitle",children:Object(c.jsx)("a",{href:"https://www.youtube.com/v/".concat(e.id.videoId),target:"_blank",rel:"noreferrer noopener",children:e.snippet.title})}),Object(c.jsx)("div",{className:"videoDesc",children:e.snippet.description})]})]})})}))}),a&&0===t.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Whoops! Looks like there was a problem loading these videos. Never fear, you can visit our channel directly by clicking the button below!"}),Object(c.jsx)("button",{className:"button",children:Object(c.jsxs)(y,{href:N,children:[Object(c.jsx)(p.a,{icon:x.faYoutube})," Woodland Pools Channel"]})})]})]})]})})]})}}]),a}(n.Component),I=a(39),T=a.n(I),P=a(103),A=a(64),B=a(71),F=a.n(B),U=a(91).add,R=new Date(Date.UTC(2020,6,29,21,44,51,0)),E=R.getTime(),G=432e6;function H(e){return(e-E)%G===0}function Y(e){return H(e.getTime())}function z(e){return Y(e)||(e=M(e)),(e.getTime()-E)/G+208}function M(e){if(Y(e=L(e)))return e;for(var t=1;t<5;t++){var a=new Date(e.getTime()-864e5*t);if(H(a))return console.log("Found epoch boundary at ".concat(a.toISOString()),"Epoch number is ".concat(z(a))),a}}function W(e){Y(e=L(e))||(e=M(e));for(var t=[{date:e,number:z(e)}],a=0;a<4;a++)e=U(e,{days:5}),t.push({date:e,number:z(e)});return t}function L(e){var t={year:e.getFullYear(),month:e.getMonth(),day:e.getDate(),hours:21,minutes:44,seconds:51},a=t.year,c=t.month,n=t.day,s=t.hours,o=t.minutes,r=t.seconds;return new Date(Date.UTC(a,c,n,s,o,r,0))}var J=a(45),_=a(76),K=a(100),q=a(101),V=(a(121),a(243)),Q=a(34),X=a.n(Q),Z=a(94),$=a.n(Z),ee=a(96),te=a.n(ee),ae=a(95),ce=a.n(ae),ne=a(65),se=a.n(ne),oe=a(93),re=a.n(oe),ie=a(66),le=a.n(ie),de=a(67),ue=a.n(de),he=a(52),je=a.n(he),be=a(68),me=a.n(be),pe=a(97),Oe=a.n(pe),fe=a(98),xe=a.n(fe),ve=a(69),ye=a.n(ve),ge=a(70),we=a.n(ge),Ne={"zh-CN":se.a,"zh-TW":re.a,zh:se.a,"ru-RU":le.a,ru:le.a,"fr-FR":ue.a,fr:ue.a,"es-ES":je.a,"es-MX":je.a,es:je.a,"en-US":X.a,"en-GB":$.a,"en-IN":ce.a,"en-CA":te.a,en:X.a,"de-DE":me.a,de:me.a,"pt-BR":Oe.a,pt:xe.a,"it-IT":ye.a,it:ye.a,"ja-JP":we.a,ja:we.a};Object.entries(Ne).forEach(function(){var e=Object(A.a)(T.a.mark((function e(t){var a,c,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(P.a)(t,2),c=a[0],n=a[1],Object(B.registerLocale)(c,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var ke=new Date(Date.UTC(2100,12,31)),Ce=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={stakeDate:new Date,result:[],localeString:"en-US",locale:X.a,loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==navigator.languages)if((t=navigator.languages[0])&&Ne[t])try{this.setState({locale:Ne[t],localeString:t}),console.log("Locale was set to ".concat(t))}catch(a){console.log("Locale does not exist in date-fns",t)}else console.log("Locale not supported: "+t);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateStakeDate",value:function(e){var t=this,a=this.state.stakeDate;e=e||a;var c=this.state.locale,n=W(e);this.setState({loading:!0}),this.setState({stakeDate:e,formattedStakeDate:Object(J.a)(e,"P",{locale:c}),result:n}),setTimeout((function(){t.setState({loading:!1})}),500)}},{key:"renderEpochRow",value:function(e,t){var a=this.state,n=a.formattedStakeDate,s=a.result,o=a.locale,r=Object(J.a)(e.date,"P 'at' H:m zzzz",{locale:o}),i=Object(_.a)(e.date,new Date),l={0:{past:"You started delegating on ".concat(n),future:"You will start delegating on ".concat(n)},1:{past:"A snapshot of the stake pool was taken at the start of this epoch",future:"A snapshot of the stake pool will be taken at the start of this epoch"},2:{past:"Blocks may have been produced during this epoch with your delegation included",future:"Blocks may be produced during this epoch with your delegation included"},3:{past:"Rewards were calculated at the start of this epoch based on the blocks produced in the previous epoch, if any",future:"Rewards will be calculated at the start of this epoch based on the blocks produced in the previous epoch, if any"},4:{past:"If any blocks were produced by your stake pool in epoch ".concat(s[2].number,", your rewards payout should have occurred at the start of this epoch!"),future:"If any blocks were produced by your stake pool in epoch ".concat(s[2].number,", your rewards payout should occur at the start of this epoch!")}};return Object(c.jsxs)("div",{className:"resultRow",children:[Object(c.jsxs)("div",{className:"epochNumber",children:["Epoch ",e.number]}),Object(c.jsxs)("div",{className:"resultContent",children:[Object(c.jsxs)("div",{className:"epochHeader",children:[i?"Starts":"Started"," on ",r]}),Object(c.jsxs)("p",{children:[4===t&&Object(c.jsx)(p.a,{icon:K.faStar})," ",l[t][i?"future":"past"]]})]})]})}},{key:"renderPlaceholder",value:function(){return Object(c.jsxs)("div",{className:"placeholder",children:[Object(c.jsx)("div",{className:"placeholderIcon",children:Object(c.jsx)(p.a,{icon:f.faCalendar})}),Object(c.jsx)("div",{className:"placeholderText",children:"Select a date above to get started"})]})}},{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,n=t.close,s=this.state,o=s.stakeDate,r=s.result,i=s.localeString,l=s.loading;return Object(c.jsx)(V.a,{in:a,timeout:250,classNames:"fade",mountOnEnter:!0,unmountOnExit:!0,children:Object(c.jsxs)("div",{className:"modal fade is-active",children:[Object(c.jsx)("div",{className:"modal-background",onClick:n}),Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("button",{className:"modal-close is-large","aria-label":"close",onClick:n}),Object(c.jsxs)("div",{id:"payoutCalculator",className:"payoutCalculator",children:[Object(c.jsxs)("div",{className:"informationSection",children:[Object(c.jsx)("h2",{className:"sectionHeader",children:"Payout Date Estimator"}),Object(c.jsx)("div",{className:"disclaimer",children:'This tool provides a "best guess" as to when your rewards will be distributed based on the date you input. The estimate provided here is not guaranteed to be accurate nor a guarantee of any rewards. None of this information should be considered financial or investment advice.'}),Object(c.jsxs)("div",{className:"dateInput",children:[Object(c.jsx)("h4",{children:"Staking Start Date"}),Object(c.jsx)("small",{children:"When did you start or intend to start staking?"}),Object(c.jsxs)("div",{className:"columns is-mobile",children:[Object(c.jsx)("div",{className:"column is-narrow",children:Object(c.jsx)(F.a,{selected:o,onChange:function(t){return e.updateStakeDate(t)},className:"input",dateFormat:"P",locale:i,minDate:R,maxDate:ke,utcOffset:"0",disabled:l})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("button",{className:"button is-info",onClick:function(){return e.updateStakeDate()},disabled:l,children:"Go"})})]})]})]}),Object(c.jsxs)("div",{className:"results",children:[!l&&!r.length&&this.renderPlaceholder(),!l&&r.map((function(t,a){return e.renderEpochRow(t,a)})),l&&Object(c.jsx)("div",{className:"placeholder",children:Object(c.jsx)("div",{className:"placeholderIcon loading",children:Object(c.jsx)(p.a,{icon:q.faSpinner})})})]})]})]})]})})}}]),a}(n.Component),De=a(75),Se=De.youtubeUrl,Ie=De.twitterUrl,Te=De.poolID;function Pe(){return Object(c.jsx)("img",{src:j,className:"logo"})}function Ae(){return Object(c.jsx)("img",{src:b,className:"logoText"})}function Be(){return Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{className:"columns",children:[Object(c.jsx)("div",{className:"column logoColumn",children:Object(c.jsx)(Pe,{})}),Object(c.jsx)("div",{className:"column logoTextColumn",children:Object(c.jsx)(Ae,{})}),Object(c.jsx)("div",{className:"column socialColumn is-hidden-mobile",children:Object(c.jsxs)("div",{className:"columns",children:[Object(c.jsx)("div",{className:"column youtube",children:Object(c.jsx)(y,{href:Se,children:Object(c.jsx)(p.a,{icon:x.faYoutube})})}),Object(c.jsx)("div",{className:"column twitter",children:Object(c.jsx)(y,{href:Ie,children:Object(c.jsx)(p.a,{icon:v.faTwitter})})})]})})]}),Object(c.jsx)("div",{className:"mobileSocial is-hidden-tablet is-hidden-desktop is-hidden-fullhd",children:Object(c.jsxs)("div",{className:"columns",children:[Object(c.jsx)("div",{className:"column youtube",children:Object(c.jsx)(y,{href:Se,children:Object(c.jsx)(p.a,{icon:x.faYoutube})})}),Object(c.jsx)("div",{className:"column twitter",children:Object(c.jsx)(y,{href:Ie,children:Object(c.jsx)(p.a,{icon:v.faTwitter})})})]})})]})}var Fe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={copied:!1},e}return Object(l.a)(a,[{key:"onCopy",value:function(){var e=this;this.setState({copied:!0}),setTimeout((function(){return e.setState({copied:!1})}),7e3)}},{key:"render",value:function(){var e=this,t=this.state.copied;return Object(c.jsx)("div",{className:"poolID ".concat(t?"copied":""),children:Object(c.jsx)(m.CopyToClipboard,{text:Te,onCopy:function(){return e.onCopy()},children:Object(c.jsxs)("span",{className:"copyPoolIDBox",children:[Object(c.jsx)("span",{className:"copyPoolIDText",children:Te}),Object(c.jsx)("span",{className:"copyPoolIDBButton",children:t?Object(c.jsx)("span",{className:"copied",children:"Copied!"}):Object(c.jsx)(p.a,{icon:O.faCopy})})]})})})}}]),a}(h.Component),Ue=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={payoutCalculatorOpen:!1},e}return Object(l.a)(a,[{key:"openPayoutCalculator",value:function(){this.setState({payoutCalculatorOpen:!0})}},{key:"closePayoutCalculator",value:function(){this.setState({payoutCalculatorOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state.payoutCalculatorOpen;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Be,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"heroBoxes",children:Object(c.jsxs)("div",{className:"columns is-multiline",children:[Object(c.jsx)("div",{className:"column is-half-fullhd is-two-thirds-desktop is-full-tablet is-full-mobile",children:Object(c.jsxs)("div",{className:"heroInfoColumn heroDelegationInfo",children:[Object(c.jsx)("h2",{children:"Curious about staking?"}),Object(c.jsxs)("p",{children:["Not sure where to begin? Have a look at our series of videos on staking with ",Object(c.jsx)(y,{href:"https://www.youtube.com/watch?v=8u7ba3FIwi0",children:"Adalite"}),",\xa0",Object(c.jsx)(y,{href:"https://www.youtube.com/watch?v=Q1ZJS7KvwGc",children:"Yoroi"}),", or ",Object(c.jsx)(y,{href:"https://www.youtube.com/watch?v=nbYvXnfPiSM",children:"Daedalus"}),"!"]}),Object(c.jsxs)("p",{children:["Feel free to check us out on ",Object(c.jsx)(y,{href:"https://pooltool.io/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20",children:"PoolTool.io"})," or ",Object(c.jsx)(y,{href:"https://adapools.org/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20",children:"ADApools.org"})," for more detailed information about our stake pool."]}),Object(c.jsxs)("div",{className:"poolIDRow",children:["Ready to get started? You'll need our pool ID!",Object(c.jsx)("div",{className:"poolIDWrapper",children:Object(c.jsx)(Fe,{})})]})]})}),Object(c.jsx)("div",{className:"column is-half-fullhd is-one-third-desktop is-full-tablet is-full-mobile",children:Object(c.jsxs)("div",{className:"heroInfoColumn payoutInfo",children:[Object(c.jsx)("h2",{children:"When will I get my rewards?"}),Object(c.jsx)("p",{children:"So you've just started delegating to a stake pool (maybe even ours) - congratulations!"}),Object(c.jsx)("p",{children:"Now, when do you get paid? Click the button below to launch our payout date estimator and find out!"}),Object(c.jsx)("p",{className:"payoutButton",children:Object(c.jsxs)("button",{className:"button",onClick:function(){return e.openPayoutCalculator()},children:[Object(c.jsx)(p.a,{icon:f.faCalendar}),Object(c.jsx)("span",{children:"Payout Date Estimator"})]})})]})})]})}),Object(c.jsx)("div",{className:"mainContentWrapper",children:Object(c.jsx)("div",{className:"mainContent",children:Object(c.jsxs)("div",{className:"columns is-multiline",children:[Object(c.jsx)("div",{className:"column is-5-fullhd is-12-desktop is-12-tablet is-12-mobile",children:Object(c.jsxs)("div",{className:"columnContent",children:[Object(c.jsx)("h2",{className:"sectionHeader",children:"Our Mission"}),Object(c.jsx)("p",{children:"We strive to provide the Cardano community with the latest news, tutorials, and the information you need to grow your investment with confidence."}),Object(c.jsxs)("p",{children:["Check out our ",Object(c.jsx)(y,{href:Se,children:"Youtube channel"})," to learn more!"]}),Object(c.jsx)("h2",{className:"sectionHeader aboutUsHeader",children:"About Us"}),Object(c.jsx)("p",{children:"Our pool is run by two software engineers based in the United States working in the healthcare industry."}),Object(c.jsx)("p",{children:"The Aspen pool is configured with two relay nodes and a core node, continuous backups, and 24/7 monitoring."}),Object(c.jsxs)("div",{className:"columns nodeInformation",children:[Object(c.jsx)("div",{className:"column",children:Object(c.jsxs)(g,{children:[Object(c.jsx)("h3",{children:"Core Node"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"4 vCPUs"}),Object(c.jsx)("li",{children:"8GB of RAM"}),Object(c.jsx)("li",{children:"160GB SSD"}),Object(c.jsx)("li",{children:"5TB transfer & 1Gbps bandwidth"})]})]})}),Object(c.jsx)("div",{className:"column",children:Object(c.jsxs)(g,{children:[Object(c.jsx)("h3",{children:"Relay Nodes"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"1 vCPUs"}),Object(c.jsx)("li",{children:"4GB of RAM"}),Object(c.jsx)("li",{children:"80GB SSD"}),Object(c.jsx)("li",{children:"4TB transfer & 1Gbps bandwidth"})]})]})})]}),Object(c.jsxs)("div",{className:"poolInformation",children:[Object(c.jsx)("h3",{children:"At a Glance"}),Object(c.jsx)("iframe",{width:"100%",height:"400",frameBorder:"0",src:"https://js.adapools.org/widget.html?pool=05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20"})]})]})}),Object(c.jsx)("div",{className:"column rightColumn is-7-fullhd is-12-desktop is-12-tablet is-12-mobile",children:Object(c.jsx)("div",{className:"columnContent",children:Object(c.jsx)(S,{})})})]})})})]}),Object(c.jsx)(Ce,{isOpen:t,close:function(){return e.closePayoutCalculator()}})]})}}]),a}(h.Component),Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Ue,{})}),document.getElementById("root")),Re()},75:function(e){e.exports=JSON.parse('{"youtubeUrl":"https://www.youtube.com/channel/UCuJTfA0vHfG3Fy4_VtFrpYw","twitterUrl":"https://twitter.com/WoodlandPools","youtubeApiKey":"AIzaSyD1qVHQsFzoKHFjTchBZ0Kr1aPSI4Mr2pk","youtubeChannelID":"UCuJTfA0vHfG3Fy4_VtFrpYw","poolID":"pool1qku2yhky7sv4dfjfv42uyvauhehuqevk25aw952d7ulzqzx3jcu"}')}},[[240,1,2]]]);
//# sourceMappingURL=main.3f088835.chunk.js.map