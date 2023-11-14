import{_ as p,G as f,r as g,o as n,c as y,w as h,a,t as i,b as o,F as c,d as r,e as v,p as w,f as C}from"./index.87401552.js";const u=["B","kiB","MiB","GiB"],d=t=>{let e=0;for(;t>1e3&&e<u.length;)t/=1e3,e++;return Intl.NumberFormat(void 0,{maximumFractionDigits:2}).format(t||0)+` ${u[e]}/s`},I={name:"rTorrent",props:{item:Object},components:{Generic:f},data:()=>({dl:null,ul:null,count:null,error:null}),computed:{downRate:function(){return d(this.dl)},upRate:function(){return d(this.ul)}},created(){const t=parseInt(this.item.rateInterval,10)||0,e=parseInt(this.item.torrentInterval,10)||0;t>0&&setInterval(()=>this.fetchRates(),t),e>0&&setInterval(()=>this.fetchCount(),e),this.fetchRates(),this.fetchCount()},methods:{fetchRates:async function(){this.getRate("throttle.global_up.rate").then(t=>this.ul=t).catch(()=>this.error=!0),this.getRate("throttle.global_down.rate").then(t=>this.dl=t).catch(()=>this.error=!0)},fetchCount:async function(){this.getCount().catch(()=>this.error=!0)},getRate:async function(t){return this.getXml(t).then(e=>parseInt(e.getElementsByTagName("value")[0].firstChild.textContent,10))},getCount:async function(){return this.getXml("download_list").then(t=>{const e=t.getElementsByTagName("array");this.count=e?e[0].getElementsByTagName("value").length:0})},getXml:async function(t){const e={"Content-Type":"text/xml"};return this.item.username&&this.item.password&&(e.Authorization=`${this.item.username}:${this.item.password}`),fetch(`${this.item.xmlrpc.replace(/\/$/,"")}/RPC2`,{method:"POST",headers:e,body:`<methodCall><methodName>${t}</methodName></methodCall>`}).then(s=>{if(!s.ok)throw Error(s.statusText);return s.text()}).then(s=>Promise.resolve(new DOMParser().parseFromString(s,"text/xml")))}}},m=t=>(w("data-v-da29e937"),t=t(),C(),t),R={class:"title is-4"},x={class:"subtitle is-6"},B={key:0,class:"error"},k={class:"down"},N=m(()=>a("i",{class:"fas fa-download"},null,-1)),T={class:"up"},b=m(()=>a("i",{class:"fas fa-upload"},null,-1)),E={key:0,class:"count"};function S(t,e,s,$,F,l){const _=g("Generic");return n(),y(_,{item:s.item},{content:h(()=>[a("p",R,i(s.item.name),1),a("p",x,[t.error?(n(),o("span",B,"An error has occurred.")):(n(),o(c,{key:1},[a("span",k,[N,r(" "+i(l.downRate),1)]),a("span",T,[b,r(" "+i(l.upRate),1)])],64))])]),indicator:h(()=>[t.error?v("",!0):(n(),o("span",E,[r(i(t.count)+" ",1),t.count===1?(n(),o(c,{key:0},[r("torrent")],64)):(n(),o(c,{key:1},[r("torrents")],64))]))]),_:1},8,["item"])}const P=p(I,[["render",S],["__scopeId","data-v-da29e937"]]);export{P as default};
