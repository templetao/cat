import{bE as y,bR as F,bx as d,bS as x,bt as k,bF as t,bU as l}from"./vendor.28e57c02.js";import{h as m,F as i,a as h,b as v,v as E,c as B}from"./index.d1c884a3.js";const S=(s,c)=>{var n;throw((n=s.response)==null?void 0:n.status)===422&&c(s.response.data),s},T="_tips_1a66x_1",V="_actions_1a66x_6",j="_removeTagsAndItems_1a66x_11",w="_button_1a66x_15",g={tips:T,actions:V,removeTagsAndItems:j,button:w},I=y({props:{id:Number},setup:(s,c)=>{const n=F(),e=d({id:void 0,name:"",sign:"",kind:n.query.kind.toString()}),a=d({}),p=x(),b=async o=>{o.preventDefault();const r=[{key:"name",type:"required",message:"\u5FC5\u586B"},{key:"name",type:"pattern",regex:/^.{1,4}$/,message:"\u53EA\u80FD\u586B 1 \u5230 4 \u4E2A\u5B57\u7B26"},{key:"sign",type:"required",message:"\u5FC5\u586B"}];Object.assign(a,{name:[],sign:[]}),Object.assign(a,E(e,r)),B(a)||(await(await e.id?m.patch(`/tags/${e.id}`,e,{_mock:"tagEdit",_autoLoading:!0}):m.post("/tags",e,{_mock:"tagCreate",_autoLoading:!0})).catch(_=>S(_,f=>Object.assign(a,f.errors))),p.back())};return k(async()=>{if(!s.id)return;const o=await m.get(`/tags/${s.id}`,{},{_mock:"tagShow"});Object.assign(e,o.data.resource)}),()=>t(v,{onSubmit:b},{default:()=>{var o,r;return[t(i,{label:"\u6807\u7B7E\u540D\uFF08\u6700\u591A 4 \u4E2A\u5B57\u7B26\uFF09",type:"text",modelValue:e.name,"onUpdate:modelValue":u=>e.name=u,error:(o=a.name)==null?void 0:o[0]},null),t(i,{label:"\u7B26\u53F7 "+e.sign,type:"emojiSelect",modelValue:e.sign,"onUpdate:modelValue":u=>e.sign=u,error:(r=a.sign)==null?void 0:r[0]},null),t(i,null,{default:()=>[t("p",{class:g.tips},[l("\u8BB0\u8D26\u65F6\u957F\u6309\u6807\u7B7E\u5373\u53EF\u8FDB\u884C\u7F16\u8F91")])]}),t(i,null,{default:()=>[t(h,{type:"submit",class:[g.button]},{default:()=>[l("\u786E\u5B9A")]})]})]}})}});export{I as T,g as s};
