import{i as r,c as i,g as c,F as m,t as n}from"./index-c1b636a8.js";import{p as g,f as h}from"./index-aefa1402.js";const f=n('<div class="grid grid-cols-1 items-center text-center text-gray-200"><h1 class="text-3xl font-semibold text-left py-8">Blog'),p=n('<div class="grid gap-4 sm:grid-cols-[14rem_auto] text-left border-dashed border-y-1 border-gray-200 py-8 hover:underline"><p class="text-sm hidden sm:block font-light"></p><div><h2 class="font-semibold"></h2><h3 class="font-light text-sm py-2">'),x=()=>(()=>{const s=f();return s.firstChild,r(s,i(m,{get each(){return g.sort((e,t)=>Date.parse(t.created_at)-Date.parse(e.created_at))},children:e=>i(c,{get href(){return e.url},get children(){const t=p(),l=t.firstChild,o=l.nextSibling,a=o.firstChild,d=a.nextSibling;return r(l,()=>h(Date.parse(e.created_at),Date.now())),r(a,()=>e.title),r(d,()=>e.summary),t}})}),null),s})();export{x as Blog,x as default};
