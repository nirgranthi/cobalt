import{F as o}from"./cobalt/CRlX8TpR.js";import{currentApiURL as i}from"./cobalt/CCKKBMJm.js";import{c as a,t as u,a as c,b as d}from"./cobalt/Cry0ynU7.js";const f=async()=>{const t=`${i()}/cobalt/`;return await fetch(t,{redirect:"manual",signal:AbortSignal.timeout(1e4)}).then(r=>r.json()).catch(r=>{var n;if((n=r==null?void 0:r.message)!=null&&n.includes("timed out"))return{status:"error",error:{code:"error.api.timed_out"}}})},l=()=>{!o(u)&&o(c)&&!o(d)&&window.location.reload()},g=async()=>{var r,n,s;const t=o(a);if(t&&t.origin===i())return l(),!0;const e=await f();return!e||!("cobalt"in e)||"status"in e?!1:(a.set({info:e,origin:i()}),o(u)&&t&&((n=(r=t==null?void 0:t.info)==null?void 0:r.cobalt)==null?void 0:n.turnstileSitekey)!==((s=e==null?void 0:e.cobalt)==null?void 0:s.turnstileSitekey)&&window.location.reload(),l(),!0)};export{g as getServerInfo};
//cobalt/# sourceMappingURL=DRrgzElb.js.map



