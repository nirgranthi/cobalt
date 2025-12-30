import{F as t}from"./cobalt/CRlX8TpR.js";import{t as e}from"./cobalt/sLrbt0Jw.js";import{s as r,u as a}from"./cobalt/Hp68DFFA.js";import{createDialog as c}from"./cobalt/BrKf4TUx.js";const p=async()=>{if(t(r).processing.seenCustomWarning)return;let o;const n=new Promise((i,s)=>o={resolve:i,reject:s}).catch(()=>({}));c({id:"security-api-custom",type:"small",icon:"warn-red",title:t(e)("dialog.safety.title"),bodyText:t(e)("dialog.safety.custom_instance.body"),leftAligned:!0,buttons:[{text:t(e)("button.cancel"),main:!1,action:()=>{o.reject()}},{text:t(e)("button.continue"),color:"red",main:!0,timeout:5e3,action:()=>{o.resolve(),a({processing:{seenCustomWarning:!0}})}}]}),await n};export{p as customInstanceWarning};
//cobalt/# sourceMappingURL=CfUlVKG4.js.map



