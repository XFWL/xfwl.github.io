import{d as te,G as ae,N as h,$ as y,i as r,r as u,K as oe,o as b,c as B,h as l,w as t,x as s,y as k,g as F,u as w,R as ne,O as ie,P as re,Q as ue,z as de,a as se,S as ce,n as D,M as R}from"./index-7f2c2fc1.js";import{u as pe}from"./layoutSetting-4408d37c.js";const me={style:{"margin-left":"12px"}},fe={name:"Role"},ye=te({...fe,setup(ve){ae(()=>{p(a.value.page,a.value.limit)});const S=pe();function p(o,e,i=v.value){h(()=>y.acl.role.reqRoleList(o,e,i),m=>{a.value.total=m.data.total,U.value=m.data.records})}const v=r("");function E(){p(1,a.value.limit)}function K(){v.value="",D(()=>{p(1,a.value.limit)})}const U=r([]),_=r(!1),c=r({id:void 0,roleName:""}),x=r(),M=r({roleName:[{validator:(o,e,i)=>{e.trim().length<2?i(new Error("名字至少为两个字")):i()}}]});function z(o){c.value={id:void 0,roleName:""},_.value=!0,D(()=>{var e;(e=x.value)==null||e.resetFields(),o&&(c.value.id=o.id,c.value.roleName=o.roleName)})}function G(){var o;(o=x.value)==null||o.validate(e=>{e?h(()=>y.acl.role.reqAddAndUpdateRole(c.value),()=>{R.success(c.value.id?"更新角色成功":"添加角色成功"),_.value=!1,p(a.value.page,a.value.limit)}):R.error("表单有误，请检查")})}function L(o){console.log(o),h(()=>y.acl.role.reqDelAuthority(o.id),()=>{R.success("角色删除成功"),p(a.value.page,a.value.limit)})}const g=r(!1),N=r(),A=r([]),j={label:"name",children:"children"},V=r([]),$=r();function H(o){V.value=[],$.value=o.id,h(()=>y.acl.role.reqGetAuthority(o.id),e=>{A.value=e.data,g.value=!0,V.value=P(e.data,[])})}function P(o,e){for(const i of o)i.children.length>0&&P(i.children,e),i.children.length==0&&i.select&&e.push(i.id);return e}function O(){g.value=!1}function Q(){const o=N.value.getCheckedKeys(),e=N.value.getHalfCheckedKeys(),i=o.concat(e);h(()=>y.acl.role.reqSetAuthority($.value,i),()=>{R.success("分配权限成功"),g.value=!1,S.refreshFlag=!S.refreshFlag})}const a=r({page:1,total:0,limit:10});function J(){a.value.page=1,p(a.value.page,a.value.limit)}function W(){p(a.value.page,a.value.limit)}return(o,e)=>{const i=u("el-input"),m=u("el-form-item"),d=u("el-button"),q=u("el-form"),I=u("el-card"),f=u("el-table-column"),X=u("el-popconfirm"),Y=u("el-table"),Z=u("el-pagination"),ee=u("el-dialog"),le=u("el-drawer"),C=oe("my-show-button");return b(),B("div",null,[l(I,{style:{height:"74px"},shadow:"always"},{default:t(()=>[l(q,{inline:!0},{default:t(()=>[l(m,{label:"角色名字"},{default:t(()=>[l(i,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=n=>v.value=n),placeholder:"角色名字"},null,8,["modelValue"])]),_:1}),l(m,null,{default:t(()=>[l(d,{disabled:!v.value,type:"primary",onClick:E},{default:t(()=>[s("搜索")]),_:1},8,["disabled"]),l(d,{onClick:K},{default:t(()=>[s("重置")]),_:1})]),_:1})]),_:1})]),_:1}),l(I,{shadow:"always",style:{"margin-top":"15px"}},{default:t(()=>[k((b(),F(d,{type:"primary",icon:w(ne),onClick:e[1]||(e[1]=n=>z())},{default:t(()=>[s("添加角色")]),_:1},8,["icon"])),[[C,"btn.Role.add"]]),l(Y,{style:{margin:"15px 0"},data:U.value,border:"",stripe:""},{default:t(()=>[l(f,{type:"index",label:"#",align:"center",width:"100"}),l(f,{prop:"id",label:"id",align:"center","min-width":"150","show-overflow-tooltip":""}),l(f,{prop:"roleName",label:"角色名字",align:"center","min-width":"150","show-overflow-tooltip":""}),l(f,{prop:"createTime",label:"创建时间",align:"center","min-width":"150","show-overflow-tooltip":""}),l(f,{prop:"updateTime",label:"更新时间",align:"center","min-width":"150","show-overflow-tooltip":""}),l(f,{label:"操作",align:"center",fixed:"right",width:"350"},{default:t(({row:n})=>[k((b(),F(d,{type:"primary",icon:w(ie),onClick:T=>H(n)},{default:t(()=>[s("分配权限")]),_:2},1032,["icon","onClick"])),[[C,"btn.Role.assgin"]]),k((b(),F(d,{type:"warning",icon:w(re),onClick:T=>z(n)},{default:t(()=>[s("编辑")]),_:2},1032,["icon","onClick"])),[[C,"btn.Role.update"]]),k((b(),B("span",me,[l(X,{title:`确定删除 ${n.roleName} ?`,width:"350",onConfirm:T=>L(n)},{reference:t(()=>[l(d,{type:"danger",icon:w(ue)},{default:t(()=>[s("删除")]),_:1},8,["icon"])]),_:2},1032,["title","onConfirm"])])),[[C,"btn.Role.remove"]])]),_:1})]),_:1},8,["data"]),k(l(Z,{onSizeChange:J,onCurrentChange:W,total:a.value.total,currentPage:a.value.page,"onUpdate:currentPage":e[2]||(e[2]=n=>a.value.page=n),"page-size":a.value.limit,"onUpdate:pageSize":e[3]||(e[3]=n=>a.value.limit=n),"page-sizes":[10,15,20],layout:" prev, pager, next, jumper, ->, sizes, total,",background:"","pager-count":7},null,8,["total","currentPage","page-size"]),[[de,a.value.total>10]])]),_:1}),l(ee,{title:c.value.id?"更新角色":"添加角色",modelValue:_.value,"onUpdate:modelValue":e[6]||(e[6]=n=>_.value=n),width:"550px"},{footer:t(()=>[se("span",null,[l(d,{onClick:e[5]||(e[5]=n=>_.value=!1)},{default:t(()=>[s("取消")]),_:1}),l(d,{type:"primary",onClick:G},{default:t(()=>[s("确定")]),_:1})])]),default:t(()=>[l(q,{model:c.value,ref_key:"roleFormRef",ref:x,rules:M.value},{default:t(()=>[l(m,{label:"角色名字",prop:"roleName"},{default:t(()=>[l(i,{modelValue:c.value.roleName,"onUpdate:modelValue":e[4]||(e[4]=n=>c.value.roleName=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),l(le,{title:"分配权限",modelValue:g.value,"onUpdate:modelValue":e[7]||(e[7]=n=>g.value=n),direction:"rtl",size:"500px"},{footer:t(()=>[l(d,{onClick:O},{default:t(()=>[s("取消")]),_:1}),l(d,{type:"primary",onClick:Q},{default:t(()=>[s("确定")]),_:1})]),default:t(()=>[l(w(ce),{"node-key":"id",ref_key:"tree",ref:N,props:j,data:A.value,"show-checkbox":!0,"highlight-current":!0,"default-expand-all":"","default-checked-keys":V.value},null,8,["data","default-checked-keys"])]),_:1},8,["modelValue"])])}}});export{ye as default};
