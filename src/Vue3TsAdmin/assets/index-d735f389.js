import{d as S,l as I,L as m,i as k,r as n,o as B,c as C,h as o,w as s,x as z,M as E,A as N,B as R,a as i,_ as U}from"./index-ad306f01.js";const p=r=>(N("data-v-1ff1b9c4"),r=r(),R(),r),L={class:"login_div"},M=p(()=>i("div",{class:"form_bg"},null,-1)),P=p(()=>i("h1",null,"Hello",-1)),q=p(()=>i("h2",null,"欢迎来到硅谷甄选",-1)),A=S({__name:"index",setup(r){const g=I(),l=m({username:"admin",password:"atguigu123"}),x=(a,e,t)=>{e==""?t(new Error("请输入用户名")):t()},w=(a,e,t)=>{e==""?t(new Error("请输入密码")):t()},u=k(),v=m({username:[{validator:x}],password:[{validator:w}]});function h(a){a&&a.validate(e=>{if(e)g.reqLogin(l);else return E.error("输入框内容有误"),!1})}return(a,e)=>{const t=n("el-col"),c=n("SvgIcon"),f=n("el-input"),d=n("el-form-item"),V=n("el-button"),b=n("el-form"),y=n("el-row");return B(),C("div",L,[o(y,null,{default:s(()=>[o(t,{span:12,xs:0,offset:0}),o(t,{span:12,xs:24,offset:0},{default:s(()=>[o(b,{ref_key:"formRef",ref:u,rules:v,class:"login_form",model:l},{default:s(()=>[M,P,q,o(d,{size:"large",prop:"username"},{default:s(()=>[o(f,{modelValue:l.username,"onUpdate:modelValue":e[0]||(e[0]=_=>l.username=_)},{prefix:s(()=>[o(c,{name:"user",width:"20px",height:"20px",fill:"gray"})]),_:1},8,["modelValue"])]),_:1}),o(d,{size:"large",prop:"password"},{default:s(()=>[o(f,{modelValue:l.password,"onUpdate:modelValue":e[1]||(e[1]=_=>l.password=_),"show-password":""},{prefix:s(()=>[o(c,{name:"lock",width:"20px",height:"20px",fill:"gray"})]),_:1},8,["modelValue"])]),_:1}),o(d,{size:"large"},{default:s(()=>[o(V,{type:"primary",class:"login_btn",onClick:e[2]||(e[2]=_=>h(u.value))},{default:s(()=>[z("登录")]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})]),_:1})])}}});const H=U(A,[["__scopeId","data-v-1ff1b9c4"]]);export{H as default};
