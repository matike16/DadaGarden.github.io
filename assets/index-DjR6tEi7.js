import{l as p,h as f,s as h,_ as v,o as g,c as y,a as n}from"./app-CxAd9wk_.js";const k=p({__name:"index",setup(d,{expose:c}){c();let e;f(()=>{const r=document.querySelector(".hour"),_=document.querySelector(".min"),u=document.querySelector(".sec"),a=()=>{const o=new Date,i=o.getHours()*30,l=o.getMinutes()*6,m=o.getSeconds()*6;r.style.transform=`rotateZ(${i+l/12}deg)`,_.style.transform=`rotateZ(${l}deg)`,u.style.transform=`rotateZ(${m}deg)`};a(),e=setInterval(a,1e3)}),h(()=>{e&&clearInterval(e),e=null});const t={get clockInterval(){return e},set clockInterval(s){e=s}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),x={class:"clock"},$=n("div",{class:"hour"},null,-1),S=n("div",{class:"min"},null,-1),I=n("div",{class:"sec"},null,-1),B=[$,S,I];function q(d,c,e,t,s,r){return g(),y("div",x,B)}const b=v(k,[["render",q],["__file","index.vue"]]);export{b as default};
