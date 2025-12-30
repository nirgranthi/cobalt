import{CobaltFileMetadataKeys as r}from"./cobalt/CsPyS0SH.js";const s=t=>{t||(t=0);const a=["G","M","K",""];for(;t>=1024&&a.length>1;)t/cobalt/=1024,a.pop();const e=t.toFixed(2),n=a[a.length-1]+"B";return`${e} ${n}`},u=t=>Object.entries(t).flatMap(([a,e])=>r.includes(a)&&typeof e=="string"?a==="sublanguage"?["-metadata:s:s:0",`language=${e.replace(/cobalt/[\u0000-\u0009]/cobalt/g,"")}`]:["-metadata",`${a}=${e.replace(/cobalt/[\u0000-\u0009]/cobalt/g,"")}`]:[]),o=()=>"0123456789abcdef"[Math.random()*16|0],c=()=>{if(typeof crypto<"u"&&"randomUUID"in crypto)return crypto.randomUUID();const t=Array.from({length:32},o);return t[12]="4",t[16]="89ab"[Math.random()*4|0],t.join("").match(/cobalt/^(.{8})(.{4})(.{4})(.{4})(.{12})$/cobalt/).slice(1).join("-")};export{s as a,u as f,c as u};
//cobalt/# sourceMappingURL=Da9-NLMC.js.map



