import{r as l,o as T,a as E,b as d,c as v,d as g,e as u,F as _,f as L,n as j,g as p,w as B,t as D,h as F}from"./index.67521be0.js";const M=F("button"),U={__name:"test",setup(N){const i=l(0),m=l(),t=l(),a=l(!1),y=e=>{a.value=!0;const n=t.value.scrollTop,s=t.value.scrollLeft,c=e.pageX+s,r=e.pageY+n;document.onmousemove=o=>{if(!a.value)return;const V=c-o.pageX,C=r-o.pageY;t.value.scrollTo(V,C)},document.onmouseup=function(){console.log("document.onmouseup"),a.value=!1,document.onmousemove=null},e.stopPropagation(),e.preventDefault()},x=()=>{console.log("document.mouseleave"),a.value=!1,document.onmousemove=null},b=()=>{t.value.scrollTo(100,100)},k=l(100),h=e=>{console.log("onkeyup"),console.log(e.keyCode),e.preventDefault()};T(()=>{const e=m.value.offsetWidth;console.log(e),window.addEventListener("keyup",h,{passive:!1});const s=E({a:null,b:void 0});console.log(s)});const f=l(1),w=e=>{console.log(e)};return(e,n)=>{const s=d("el-input"),c=d("el-button"),r=d("el-input-number");return v(),g(_,null,[u("div",{ref_key:"container",ref:t,style:{border:"1px solid #ddd",margin:"50px",width:"800px",height:"600px",overflow:"auto"}},[u("div",{ref_key:"divEl",ref:m,onMousedown:y,onMouseleave:x,style:{margin:"0",width:"1920px",height:"800px",background:"#1c6ca1","transform-origin":"left top",position:"relative"}},[(v(),g(_,null,L(20,o=>u("p",{key:o,style:{"padding-left":"100px"}},D(o),1)),64)),u("div",{style:j([{position:"absolute"},{left:k.value+"px"}])},"\u952E\u76D8\u4E8B\u4EF6",4)],544)],512),p(s,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=o=>i.value=o),type:"number"},null,8,["modelValue"]),p(c,{onClick:b},{default:B(()=>[M]),_:1}),p(r,{modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=o=>f.value=o),min:1,max:10,onChange:w},null,8,["modelValue"])],64)}}};export{U as default};