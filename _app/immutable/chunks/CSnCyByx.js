import i from"./cobalt/Br0kX-ZH.js";import{currentApiURL as u}from"./cobalt/CCKKBMJm.js";let t;const c=async()=>{const s=`${u()}/cobalt/session`;let e={};const n=i.getResponse();n&&(e={"cf-turnstile-response":n});const a=await fetch(s,{method:"POST",redirect:"manual",signal:AbortSignal.timeout(1e4),headers:e}).then(r=>r.json()).catch(r=>{var o;if((o=r==null?void 0:r.message)!=null&&o.includes("timed out"))return{status:"error",error:{code:"error.api.timed_out"}}});return i.reset(),a},d=async()=>{const s=()=>Math.floor(new Date().getTime()/cobalt/1e3);if(t!=null&&t.token&&(t==null?void 0:t.exp)-2>s())return t;const e=await c();return e?("status"in e||(e.exp=s()+e.exp,t=e),e):{status:"error",error:{code:"error.api.unreachable"}}},l=()=>t=void 0;export{d as getSession,c as requestSession,l as resetSession};
//cobalt/# sourceMappingURL=CSnCyByx.js.map



