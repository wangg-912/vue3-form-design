import{d as B,v as C,r as u,u as E,C as S,a as y,b as q,h as r,o as D,c as N,l as I,m as n,w as c,x as L,a1 as R,X as U,E as j,B as F,S as M}from"./index-3679850f.js";const z={class:"design-flow-container"},O={class:"tools"},X=B({__name:"index",setup(P){C().changeBreadcrumb([{label:"系统工具"},{label:"流程设计"}]);const f=u(),i=u(),d=E(),m=S(),s=u(d.query.tabs||"info"),g=u({list:[{type:"input",control:{modelValue:"",placeholder:"请输入流程名称"},config:{},name:"name",item:{label:"流程名称"},customRules:[{type:"required",message:"请输入流程名称",trigger:"blur"}]},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"designList",method:"post",debug:!0,label:"name",value:"id",beforeRequest:e=>(e.type=1,e)},name:"source",item:{label:"流程表单",rules:[{required:!0,message:"请选择流程表单",trigger:"blur"}]}},{type:"switch",control:{modelValue:1,activeValue:1,inactiveValue:0},options:[],config:{optionsType:2},name:"status",item:{label:"状态"}},{type:"component",control:{modelValue:"",colorPicker:!0},config:{componentName:"DiyIconfont"},name:"icon",item:{label:"流程图标"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"flow"},name:"category",item:{label:"所在分组"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",label:"name",value:"id"},name:"roleId",item:{label:"角色权限",showLabel:!1}},{type:"textarea",control:{modelValue:""},config:{span:24},name:"remark",item:{label:"备注说明",showLabel:!1}}],form:{class:"form-row-2",labelWidth:"110px",size:"default"}}),l=y(()=>d.query.id),_=y(()=>l.value?2:1),v=e=>{e.paneName},V=()=>{f.value.submit()},w=e=>{var t,o,a;return l.value&&(e.id=l.value),e.icon&&(e.icon=(t=e.icon)==null?void 0:t.join(",")),e.type=3,(o=i.value)!=null&&o.getValue&&(e.data=U((a=i.value)==null?void 0:a.getValue())),e},h=e=>(e.icon&&(e.icon=e.icon.split(",")),i.value.setValue(j(e.data)),e),k=(e,t)=>{if(e==="success")if(s.value==="info"){if(s.value="flow",!l.value){const o=t.data.insertId;m.push({path:"/design/flow",query:{id:o,tabs:"flow"}}),F(()=>{p()})}}else m.push({path:"/design/flow/list"});if(e==="validate"&&s.value==="flow"){let o;try{for(const a in t)if(!o){o=t[a][0].message;break}M.error(o)}catch{}}},p=()=>{l.value&&f.value.getData({id:l.value})};return q(()=>{p()}),(e,t)=>{const o=r("el-button"),a=r("ak-form"),b=r("el-tab-pane"),T=r("el-tabs");return D(),N("div",z,[I("div",O,[n(o,{type:"primary",onClick:V},{default:c(()=>[L("保存")]),_:1})]),n(T,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=x=>s.value=x),class:"flow-tabs",onTabClick:v},{default:c(()=>[n(b,{label:"基础信息",name:"info",class:"tabs-info"},{default:c(()=>[n(a,{ref_key:"formEl",ref:f,formData:g.value,type:_.value,addUrl:"designSave",editUrl:"designEdit",requestUrl:"designById",beforeSubmit:w,afterSubmit:k,afterResponse:h},null,8,["formData","type"])]),_:1}),n(b,{label:"审批流程",name:"flow"},{default:c(()=>[n(R,{ref_key:"flowEl",ref:i},null,512)]),_:1})]),_:1},8,["modelValue"])])}}});export{X as default};