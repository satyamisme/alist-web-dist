import{u as T,a as $,aI as M,bk as l,c as y,cg as C,e,X as o,B as c,R as S,ch as v,ci as B,cj as d,m as g,ck as u,cl as F,cm as n,bq as h,n as R,V as x}from"./index.2ea96c44.js";import{o as D}from"./index.3e839e3c.js";import{D as H}from"./DeletePopover.548c3b68.js";import{W as I}from"./Wether.38d6017b.js";const j=()=>{const r=T();D("manage.sidemenu.metas");const{to:i}=$(),[m,p]=M(()=>l.get("/admin/meta/list")),[f,b]=y([]),a=async()=>{const t=await p();h(t,s=>b(s.content))};a();const[w,k]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(x,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return m()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(B,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(F,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(I,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await k(t.id);h(s,()=>{R.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{j as default};
