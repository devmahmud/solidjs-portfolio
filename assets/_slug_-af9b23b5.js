import{c as a,m as i,A as f,e as r,t as s,u as x,i as n,g as c}from"./index-281e91d0.js";import{g,f as d}from"./index-aefa1402.js";import{N as _}from"./NotFound-43bb44a1.js";import{l as $}from"./index.browser-3b56d5e6.js";const h=s('<p class="py-1">'),b=s('<li class="ml-8 list-disc">'),y=s('<h1 class="pt-4 text-2xl">'),k=s('<h2 class="pt-4 py-2 text-xl text-gray-300">'),v=s('<h3 class="pt-2 text-md text-gray-300">'),D=s('<blockquote class="pl-4 text-gray-500 text-sm">'),N=s('<code class="text-sm bg-gray-900 p-0.5 px-1 rounded-md">'),P={a:e=>a(f,i({class:"text-pink-400"},e)),p:e=>(()=>{const t=h();return r(t,e,!1,!1),t})(),li:e=>(()=>{const t=b();return r(t,e,!1,!1),t})(),h1:e=>(()=>{const t=y();return r(t,e,!1,!1),t})(),h2:e=>(()=>{const t=k();return r(t,e,!1,!1),t})(),h3:e=>(()=>{const t=v();return r(t,e,!1,!1),t})(),blockquote:e=>(()=>{const t=D();return r(t,e,!1,!1),t})(),code:e=>(()=>{const t=N();return r(t,e,!1,!1),t})()};function m(e){return a($,{components:P,get children(){return e.text}})}const q=s('<div class="py-8"><h1 class="text-3xl font-semibold"></h1><p class="font-extralight text-xs pt-4">'),w=s('<div class="grid grid-cols-1 text-left items-center text-gray-200">'),H=()=>{const e=x(),t=g(e.slug),p=t==null?a(_,{get children(){return a(m,{get text(){return`The post \`/blog/${e.slug}\` does not exists`}})}}):[(()=>{const l=q(),o=l.firstChild,u=o.nextSibling;return n(o,()=>t.title),n(u,()=>d(Date.parse(t.created_at),Date.now())),n(l,a(c,{class:"font-extralight text-sm  hover:underline",target:"_blank",get href(){return t.author_url},get children(){return t.author}}),null),l})(),a(m,{get text(){return t.content}})];return(()=>{const l=w();return n(l,a(c,{class:"hover:underline text-gray-400 text-sm mt-8",href:"/blog",children:"< back"}),null),n(l,p,null),l})()};export{H as Home,H as default};
