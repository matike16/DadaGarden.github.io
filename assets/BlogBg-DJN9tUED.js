import{m as r,i as d,p,_,r as u,o as f,j as g,w as m,a as v}from"./app-DPoJ9CHN.js";const B=r({__name:"BlogBg",setup(c,{expose:n}){n();const o=()=>{if(!document.getElementById("dada_BlogBg")){const l=document.createElement("div");l.id="dada_BlogBg",document.body.appendChild(l),[{type:"circle",top:"10vh",left:"10vw"},{type:"triangle",top:"30vh",left:"80vw"},{type:"square",top:"60vh",left:"10vw"},{type:"circle1",top:"60vh",left:"80vw"}].forEach(t=>{const e=document.createElement("div");if(e.className="random-shape",e.style.top=t.top,e.style.left=t.left,e.style.animationDuration="30s",t.type==="circle")e.classList.add("circle");else if(t.type==="triangle"){const a=document.createElement("div");a.className="triangle",e.classList.add("triangleDiv"),e.appendChild(a)}else t.type==="square"?e.classList.add("square"):t.type==="circle1"&&e.classList.add("circle1");l.appendChild(e)})}};d(()=>{p(()=>{console.log("执行背景美化"),o()})});const s={BlogBg:o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),y={ref:"dada_BlogBg"};function h(c,n,o,s,l,i){const t=u("ClientOnly");return f(),g(t,null,{default:m(()=>[v("div",y,null,512)]),_:1})}const w=_(B,[["render",h],["__file","BlogBg.vue"]]);export{w as default};
