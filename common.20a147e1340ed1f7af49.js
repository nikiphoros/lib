(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8HIF":function(t,a,e){"use strict";e.d(a,"a",function(){return n});var o=e("8Y7J");let n=(()=>{class t{constructor(t){this.eltRef=t,this.date=new Date}ngAfterViewInit(){this.eltRef.nativeElement.innerText=this.timeDiffCalc(new Date,new Date(this.date))}timeDiffCalc(t,a){let e=Math.abs(t-a)/1e3;const o=Math.floor(e/86400);e-=86400*o;const n=Math.floor(e/3600)%24;e-=3600*n;const s=Math.floor(e/60)%60;return e-=60*s,Math.floor(o/365)>0?1===Math.floor(o/365)?`${Math.floor(o/365)} year ago `:`${Math.floor(o/365)} years ago`:o>0?1===o?`${o} day ago `:`${o} days ago `:n>0?1===n?`${n} hour ago `:`${n} hours ago `:0===s||1===n?`${s} minute ago`:`${s} minutes ago`}}return t.\u0275fac=function(a){return new(a||t)(o.Hb(o.m))},t.\u0275dir=o.Cb({type:t,selectors:[["","lastupdatedDate",""]],inputs:{date:"date"}}),t})()},pMLa:function(t,a,e){"use strict";e.d(a,"a",function(){return o});class o{constructor(t){this.name=t&&t.name||"",this.slug=t&&t.slug||"",this.icon=t&&t.icon||"",this.date=t&&t.date||"",this.duration=t&&t.duration||"",this.paratext=t&&t.paratext||"",this.contributors=t&&t.contributors||[],this.languages=t&&t.languages||[]}}}}]);