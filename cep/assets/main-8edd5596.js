"use strict"if (typeof exports === 'undefined') { var exports = {}; };const e=typeof cep_node !== 'undefined'?cep_node.require(cep_node.global["__dir"+"name"] + "/assets/styled-components.browser.esm-8e864f8c.js"):require("../assets/styled-components.browser.esm-8e864f8c.js"),Ne=new e.CSInterface,$e=Ne.getHostEnvironment(),Be=$e.appSkinInfo.baseFontSize,Ve=e.React.createContext({font:Be}),Je=e.styled.select`
  background-color: #2c2c2c;
  color: #cacaca;
  width: 100%;
  margin-right: 5px;
  height: 30px;
  overflow-y: auto;
`,qe=e.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35px;
  margin-top: 10px;
  overflow: 'hidden';
`,He=()=>{const[n,t]=e.reactExports.useState([]),[v,s]=e.reactExports.useState("Model List"),M=async m=>{console.log("Updating all lists");const u=[{url:"http://localhost:8000/get_sd_models",callback:t}];try{const b=u.map(_=>fetch(_.url,{method:"POST"}).then(R=>R.json())),P=await Promise.all(b);if(m.cancelled)return;P.forEach((_,R)=>{if(console.log(`Result from ${u[R].url}:`,_),Array.isArray(_)){const i=_.map(w=>({title:w.title,model_name:w.model_name,hash:w.hash}));u[R].callback(i)}else console.error(`Response from ${u[R].url} is not an array.`)})}catch(b){m.cancelled||console.error("Error fetching data:",b)}},p={cancelled:!1};e.reactExports.useEffect(()=>(M(p),()=>{p.cancelled=!0}),[]);const j=async m=>{try{const b=await(await fetch("http://localhost:8000/swapModel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sd_model_checkpoint:m})})).json();console.log("Response from API:",b)}catch(u){console.error("Error sending selected model to API:",u)}},x=m=>{const u=m.target.value;s(u),j(u)};return e.jsx(qe,{children:e.jsx(Je,{value:v,onChange:x,children:n.map(m=>e.jsx("option",{value:m.hash,children:m.title||m.model_name},m.hash))})})},Re=e.reactExports.createContext({prompt:"",setPrompt:()=>{},negativePrompt:"",setNegativePrompt:()=>{}}),Ke=()=>{const{prompt:n,setPrompt:t,negativePrompt:v,setNegativePrompt:s}=e.reactExports.useContext(Re),M=j=>{t(j.target.value)},p=j=>{s(j.target.value)};return e.jsxs("div",{style:{margin:"10px 0",overflow:"hidden"},children:[e.jsx("input",{type:"text",value:n,onChange:M,placeholder:"Prompt",style:{width:"90vw",padding:"5px",overflow:"hidden"}}),e.jsx("input",{type:"text",value:v,onChange:p,placeholder:"Negative Prompt",style:{width:"90vw",padding:"5px",marginTop:"10px"}})]})},Oe=e.reactExports.createContext({seed:"-1",setSeed:()=>{}}),Le="../assets/seedreset-e57e8ab9.png",Ae="../assets/seedresetpress-6592a0a4.png",Fe="../assets/seedget-0cbf52da.png",ze="../assets/seedgetpress-d10324af.png",Xe=()=>{const{seed:n,setSeed:t}=e.reactExports.useContext(Oe),[v,s]=e.reactExports.useState(!1),[M,p]=e.reactExports.useState(!1),j=()=>{t("-1")},x=async P=>{const _=await e.evalTS("getseed",[]);t(_)},m={width:"35px",height:"35px",position:"relative",zIndex:1,backgroundColor:"#232323",borderColor:"#232323",marginRight:"5px"},u={width:"100%",height:"100%",objectFit:"contain"},b={display:"flex",flexDirection:"row",alignItems:"center",padding:"5px",width:"100%",overflow:"hidden"};return e.jsxs("div",{style:b,children:[e.jsx("input",{type:"text",value:n,onChange:P=>t(P.target.value),placeholder:"Seed",style:{width:"95%",marginRight:"10px",padding:"5px"}}),e.jsx("button",{onMouseDown:()=>s(!0),onMouseUp:()=>s(!1),onMouseLeave:()=>s(!1),onClick:j,style:m,title:"Reset seed to default value.",children:e.jsx("img",{src:v?Ae:Le,alt:"Reset Seed",style:u})}),e.jsx("button",{onMouseDown:()=>p(!0),onMouseUp:()=>p(!1),onMouseLeave:()=>p(!1),onClick:x,style:m,title:"Set Seed to Seed # of selected layer.",children:e.jsx("img",{src:M?ze:Fe,alt:"Get Seed",style:u})})]})},Ue=e.reactExports.createContext({activeOverride:"",setActiveOverride:()=>{},overrideSettings:{},setOverrideSettings:()=>{},Preprocessor:[],setPreprocessor:()=>{},CnModelList:[],setCnModelList:()=>{}}),je=["Controlnet 1","Controlnet 2","Controlnet 3","Controlnet 4","Controlnet 5"],Qe=e.styled.select`
  background-color: #2c2c2c;
  color: #cacaca;
  width: 85vw;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
  overflow-y: auto;
`,Ie=e.styled.select`
  background-color: #2c2c2c;
  color: #cacaca;
  width: 45vw;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px;
  height: 30px;
  overflow-y: auto;
`,Ee=e.styled.div`
  display: flex;
  align-items: center;
  padding: 5px,
  width: 90%,
  overflow: 'hidden',
  margin-top: 5px;
  margin-left: 1px;
`,We=()=>{var P,_,R;const{activeOverride:n,setActiveOverride:t,overrideSettings:v,setOverrideSettings:s,Preprocessor:M,setPreprocessor:p,CnModelList:j,setCnModelList:x}=e.reactExports.useContext(Ue);je.reduce((i,w)=>(i[w]=e.reactExports.useState({}),i),{});const m=async()=>{const i=[{url:"http://localhost:8000/controlnet/module_list",callback:p},{url:"http://localhost:8000/controlnet/model_list",callback:x}];try{const w=i.map(S=>fetch(S.url,{method:"POST"}).then(N=>N.json()));(await Promise.all(w)).forEach((S,N)=>{if(N===0){if(S.module_list&&Array.isArray(S.module_list)){const V=S.module_list.map(J=>({module_name:J}));p(V)}}else if(N===1&&S.model_list&&Array.isArray(S.model_list)){const V=S.model_list.map(J=>({model_name:J}));x(V)}})}catch(w){console.error("Error fetching data:",w)}};e.reactExports.useEffect(()=>{m()},[]);const u=i=>{const{name:w,checked:G}=i.target;s(S=>({...S,[n]:{...S[n]||{},[w]:G}}))},b=i=>{const{name:w,value:G}=i.target;s(S=>({...S,[n]:{...S[n]||{},[w]:G}}))};return e.jsxs("div",{children:[e.jsxs(Ee,{children:[e.jsxs(Qe,{onChange:i=>t(i.target.value),children:[e.jsx("option",{children:"Select Override"}),je.map(i=>e.jsx("option",{value:i,children:i},i))]}),n&&e.jsx("label",{children:e.jsx("input",{type:"checkbox",name:"enabled",checked:((P=v[n])==null?void 0:P.enabled)||!1,onChange:u})})]}),n&&e.jsxs(Ee,{children:[e.jsxs(Ie,{name:"module",value:((_=v[n])==null?void 0:_.module)||"",onChange:b,children:[e.jsx("option",{children:"Select Module"}),M.map(i=>e.jsx("option",{value:i.module_name,children:i.module_name},i.module_name))]}),e.jsxs(Ie,{name:"model",value:((R=v[n])==null?void 0:R.model)||"",onChange:b,children:[e.jsx("option",{children:"Select Model"}),j.map(i=>e.jsx("option",{value:i.model_name,children:i.model_name},i.model_name))]})]})]})},De=e.reactExports.createContext({SDURL:"http://127.0.0.1:7860/",setURL:()=>{}}),Ye=()=>{const{SDURL:n,setURL:t}=e.reactExports.useContext(De),[v,s]=e.reactExports.useState(!1),[M,p]=e.reactExports.useState(!1),j=()=>{t("http://127.0.0.1:7860/")},x=async P=>{try{if(!(await fetch("http://localhost:8000//change_url",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sd_url:n})})).ok)throw new Error("Failed to change URL")}catch(_){console.error(_)}},m={width:"35px",height:"35px",position:"relative",zIndex:1,backgroundColor:"#232323",borderColor:"#232323",marginRight:"5px"},u={width:"100%",height:"100%",objectFit:"contain"},b={display:"flex",flexDirection:"row",alignItems:"center",padding:"5px",width:"100%",overflow:"hidden"};return e.jsxs("div",{style:b,children:[e.jsx("input",{type:"text",value:n,onChange:P=>t(P.target.value),placeholder:"http://127.0.0.1:7860/",style:{width:"95%",marginRight:"10px",padding:"5px"}}),e.jsx("button",{onMouseDown:()=>s(!0),onMouseUp:()=>s(!1),onMouseLeave:()=>s(!1),onClick:j,style:m,title:"Reset URL to default value.",children:e.jsx("img",{src:v?Ae:Le,alt:"Reset URL",style:u})}),e.jsx("button",{onMouseDown:()=>p(!0),onMouseUp:()=>p(!1),onMouseLeave:()=>p(!1),onClick:x,style:m,title:"Set new API URL. (collab or --nowebui users)",children:e.jsx("img",{src:M?ze:Fe,alt:"Set URL",style:u})})]})},L=n=>n===""||n.trim().length===0?void 0:e.fs.readFileSync(n).toString("base64"),Me=(n,t,v,s,M,p)=>{const[j,x,m,u,b,P,_,R,i,w,G,S,N,V,J,q,Q,te,W,oe,H,z,U,ne,K,A,se,O,$,Y,Z,D,o,c,C,T,a,g,r,d,l,h,f,y,k,I,E,B,ge,me,ue,re,le,he,ie,ce,fe,ve,xe]=n,X={id_task:M,prompt:t,negative_prompt:v,width:j,height:x,steps:u,sampler_name:m,restore_faces:b,cfg_scale:P,seed:s};_!=="None"&&(X.script_name=_);const ae=[{enabled:R,module:i,model:w,low_vram:G,weight:S,guidance_start:N,guidance_end:V,pixel_perfect:!0,control_mode:J,input_image:q!==""?L(q):void 0},{enabled:Q,module:te,model:W,low_vram:oe,weight:H,guidance_start:z,guidance_end:U,pixel_perfect:!0,control_mode:ne,input_image:K!==""?L(K):void 0},{enabled:A,module:se,model:O,low_vram:$,weight:Y,guidance_start:Z,guidance_end:D,pixel_perfect:!0,control_mode:o,input_image:c!==""?L(c):void 0},{enabled:C,module:T,model:a,low_vram:g,weight:r,guidance_start:d,guidance_end:l,pixel_perfect:!0,control_mode:h,input_image:f!==""?L(f):void 0},{enabled:y,module:k,model:I,low_vram:E,weight:B,guidance_start:ge,guidance_end:me,pixel_perfect:!0,control_mode:ue,input_image:re!==""?L(re):void 0}].map(F=>{if(F.enabled&&F.input_image===void 0){const{input_image:ye,...de}=F;return de}return F}).filter(F=>F.enabled);return X.alwayson_scripts={},ae.length>0&&(X.alwayson_scripts.controlnet={args:ae}),le&&(X.alwayson_scripts["Tiled VAE"]={args:[{enabled:le,encoder_tile_size:ie,decoder_tile_size:ce,vae_to_gpu:he,fast_decoder:xe,fast_encoder:fe,color_fix:ve}]}),X},Te=(n,t,v,s,M,p,j)=>{const[x,m,u,b,P,_,R,i,w,G,S,N,V,J,q,Q,te,W,oe,H,z,U,ne,K,A,se,O,$,Y,Z,D,o,c,C,T,a,g,r,d,l,h,f,y,k,I,E,B,ge,me,ue,re,le,he,ie,ce,fe,ve,xe,X,_e,ae]=n,F={images:{path:p},id_task:M,prompt:t,negative_prompt:v,resize_mode:x,sampler_name:P,restore_faces:R,steps:_,cfg_scale:i,denoising_strength:m,seed:s,width:u,height:b,mode:3};w!=="None"&&(F.script_name=w);const de=[{enabled:G,module:S,model:N,low_vram:V,weight:J,guidance_start:q,guidance_end:Q,pixel_perfect:!0,control_mode:te,input_image:W!==""?L(W):void 0},{enabled:oe,module:H,model:z,low_vram:U,weight:ne,guidance_start:K,guidance_end:A,pixel_perfect:!0,control_mode:se,input_image:O!==""?L(O):void 0},{enabled:$,module:Y,model:Z,low_vram:D,weight:o,guidance_start:c,guidance_end:C,pixel_perfect:!0,control_mode:T,input_image:a!==""?L(a):void 0},{enabled:g,module:r,model:d,low_vram:l,weight:h,guidance_start:f,guidance_end:y,pixel_perfect:!0,control_mode:k,input_image:I!==""?L(I):void 0},{enabled:E,module:B,model:ge,low_vram:me,weight:ue,guidance_start:re,guidance_end:le,pixel_perfect:!0,control_mode:he,input_image:ie!==""?L(ie):void 0}].map(ee=>{if(ee.enabled&&ee.input_image===void 0){const{input_image:Ce,...be}=ee;return be}return ee}).filter(ee=>ee.enabled);return F.alwayson_scripts={},de.length>0&&(F.alwayson_scripts.controlnet={args:de}),ce&&(F.alwayson_scripts["Tiled VAE"]={args:[{enabled:ce,encoder_tile_size:ve,decoder_tile_size:xe,vae_to_gpu:fe,fast_decoder:ae,fast_encoder:X,color_fix:_e}]}),F},Se=(n,t,v,s,M,p,j,x)=>{const[m,u,b,P,_,R,i,w,G,S,N,V,J,q,Q,te,W,oe,H,z,U,ne,K,A,se,O,$,Y,Z,D,o,c,C,T,a,g,r,d,l,h,f,y,k,I,E,B,ge,me,ue,re,le,he,ie,ce,fe,ve,xe,X,_e,ae,F,ye,de,ee,Ce,be]=n,we={images:{path:p},mask:{path:j},id_task:M,prompt:t,negative_prompt:v,resize_mode:m,sampler_name:S,restore_faces:V,steps:N,cfg_scale:J,denoising_strength:u,seed:s,width:b,height:P,mode:4,mask_mode:_,masked_content:R,inpaint_area:i,only_masked_padding:w,mask_blur:G};q!=="None"&&(we.script_name=q);const Pe=[{enabled:Q,module:te,model:W,low_vram:oe,weight:H,guidance_start:z,guidance_end:U,pixel_perfect:!0,control_mode:ne,input_image:K!==""?L(K):void 0},{enabled:A,module:se,model:O,low_vram:$,weight:Y,guidance_start:Z,guidance_end:D,pixel_perfect:!0,control_mode:o,input_image:c!==""?L(c):void 0},{enabled:C,module:T,model:a,low_vram:g,weight:r,guidance_start:d,guidance_end:l,pixel_perfect:!0,control_mode:h,input_image:f!==""?L(f):void 0},{enabled:y,module:k,model:I,low_vram:E,weight:B,guidance_start:ge,guidance_end:me,pixel_perfect:!0,control_mode:ue,input_image:re!==""?L(re):void 0},{enabled:le,module:he,model:ie,low_vram:ce,weight:fe,guidance_start:ve,guidance_end:xe,pixel_perfect:!0,control_mode:X,input_image:_e!==""?L(_e):void 0}].map(pe=>{if(pe.enabled&&pe.input_image===void 0){const{input_image:wt,...Ge}=pe;return Ge}return pe}).filter(pe=>pe.enabled);return we.alwayson_scripts={},Pe.length>0&&(we.alwayson_scripts.controlnet={args:Pe}),ae&&(we.alwayson_scripts["Tiled VAE"]={args:[{enabled:ae,encoder_tile_size:ye,decoder_tile_size:de,vae_to_gpu:F,fast_decoder:be,fast_encoder:ee,color_fix:Ce}]}),we},{spawn:ke}=e.child_process,Ze=e.path.join(__dirname,"Python","main.py"),et=e.path.join(__dirname,"Python","imports.py");function tt(){const n=ke("python",[et]);n.stdout.on("data",t=>{console.log(`stdout: ${t}`)}),n.stderr.on("data",t=>{console.error(`stderr: ${t}`)}),n.on("close",t=>{console.log(`imports.py process exited with code ${t}`);const v=ke("python",[Ze]);v.stdout.on("data",s=>{console.log(`stdout: ${s}`)}),v.stderr.on("data",s=>{console.error(`stderr: ${s}`)}),v.on("close",s=>{console.log(`main.py process exited with code ${s}`)})})}const ot=({src:n})=>{const t={width:"250px",height:"250px",position:"relative",overflow:"hidden"},v={width:"100%",height:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",objectFit:"contain"};return e.jsx("div",{style:t,children:e.jsx("img",{src:n,alt:"Response",style:v})})},nt="../assets/modelsbutton-7a806741.png",st="../assets/promptbutton-0427d6a9.png",rt="../assets/seedbutton-78a7d9d2.png",at="../assets/generate-027320b4.png",lt="../assets/settingsbutton-ba1a946f.png",it="../assets/addeffectbutton-a6d85ff2.png",ct="../assets/prepbutton-ba6939d3.png",dt="../assets/modelsbuttonPressed-91127802.png",pt="../assets/promptbuttonPressed-44e774c6.png",gt="../assets/seedbuttonPressed-f7886fac.png",mt="../assets/generatePressed-20d17881.png",ut="../assets/settingsPressed-a036880b.png",ht="../assets/addeffectpressed-60b4043b.png",ft="../assets/preppress-37c7dff1.png",vt=new e.CSInterface;tt();const xt=()=>{const{font:n}=e.reactExports.useContext(Ve),[t,v]=e.reactExports.useState(null),[s,M]=e.reactExports.useState(""),[p,j]=e.reactExports.useState(""),[x,m]=e.reactExports.useState("-1"),[u,b]=e.reactExports.useState(""),[P,_]=e.reactExports.useState({}),[R,i]=e.reactExports.useState([]),[w,G]=e.reactExports.useState([]),[S,N]=e.reactExports.useState("http://127.0.0.1.7860/"),[V,J]=e.reactExports.useState(0),[q,Q]=e.reactExports.useState(!1),[te,W]=e.reactExports.useState(""),[oe,H]=e.reactExports.useState(!1),z=o=>({backgroundColor:o?"#161616":"#232323",border:"none",outline:"none",boxShadow:"none",fontSize:`${n}px`,padding:"3px",margin:"0 5px",width:"30px",height:"30px",position:"relative",zIndex:o?2:1}),U={width:"100%",height:"100%",objectFit:"contain"},ne={position:"relative",backgroundColor:"#232323",display:"flex",flexDirection:"row",alignItems:"center",marginTop:"5px",marginBottom:"5px",padding:"3px",width:"95vw",alignSelf:"center",justifyContent:"center",overflow:"hidden"},K={position:"absolute",left:0,top:0,bottom:0,alignItems:"center",backgroundColor:"#5DD7FB",width:q?`${V}vw`:"0vw",zIndex:0};async function A(o,c,C){se("http://localhost:7860/sdapi/v1/progress");try{const r=(await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).imagePath,d=await e.evalTS("importImageAtFrame",r,c)}catch(a){console.error(a)}finally{Q(!1),H(!1)}}async function se(o){Q(!0),H(!0);try{for(;;){const C=await(await fetch(o)).json();console.log(JSON.stringify(C));const{progress:T,eta_relative:a,current_image:g}=C;if(J(T*75),W(`data:image/png;base64,${g}`),T===1){H(!1);break}await new Promise(r=>setTimeout(r,500))}}catch(c){console.error(c)}}const O=()=>{const c=Object.entries(P).filter(([C,T])=>T.enabled).map(([C,T])=>{const a=T.module,g=T.model,r=parseInt(C.replace(/controlnet/i,""));return console.log("original key:",C,"parsed key:",r),{key:r,module:a,model:g}});return console.log(JSON.stringify(c)),c};function $(o,c){if(o=o+"\\Input\\input"+c+".png",!e.fs.existsSync(o))throw new Error(`File does not exist: ${o}`);return o}function Y(o,c){if(o=o+"\\Inpaint\\inpaint"+c+".png",!e.fs.existsSync(o))throw new Error(`File does not exist: ${o}`);return o}function Z(o,c){if(o=o+"\\Sketch\\sketch"+c+".png",!e.fs.existsSync(o))throw new Error(`File does not exist: ${o}`);return o}const D=async o=>{if(v(c=>c===o?null:o),o==="generate"){let c,C;O(),await e.evalTS("clearSelection",[]).catch(a=>{console.error("Error occurred in clearSelection:",a)}),await e.evalTS("initialize",[]).catch(a=>{console.error("Error occurred in initialize:",a)}),await e.evalTS("startNewImageComp",[]).catch(a=>{console.error("Error occurred in startNewImageComp:",a)});const T=await e.evalTS("getPluginParams",[]);if(c=T[0][0].split(":")[1].trim(),C=T[0][1].split(":")[1].trim(),c==="TXT2IMG"){const a="http://localhost:8000//text2image";if(C==="True"){const g=await e.evalTS("getlength",[]),r=await e.evalTS("getStartFrame",[]);for(let d=r;d<g+r;d++){const l=d-r,h=await e.evalTS("getT2IParams",d),f=Math.floor(Math.random()*1e18);O();const y=Me(h,s,p,x,f);await A(y,l,a)}}else{const g=await e.evalTS("getFrame",[]),r=await e.evalTS("getStartFrame",[]),d=g-r,l=await e.evalTS("getT2IParams",g);console.log("plugparam: "+JSON.stringify(l));const h=Math.floor(Math.random()*1e18),f=O(),y=Me(l,s,p,x,h);console.log(JSON.stringify(y)),await A(y,d,a),console.log(g+" "+l+" "+h+" "+f)}}else if(c==="IMG2IMG"){const a="http://localhost:8000//image2image",g=await e.evalTS("getProjectPath",[]);let r=!1;if(C==="True"){const d=await e.evalTS("getlength",[]),l=await e.evalTS("getStartFrame",[]);for(let h=l;h<d+l;h++)try{const f=h-l,y=$(g,h),k=await e.evalTS("getI2IParams",h),I=Math.floor(Math.random()*1e18),E=O(),B=await Te(k,s,p,x,I,y,E);await A(B,f,a)}catch{r=!0;break}}else{const d=await e.evalTS("getFrame",[]),l=await e.evalTS("getStartFrame",[]),h=d-l;try{const f=$(g,d),y=await e.evalTS("getI2IParams",d),k=Math.floor(Math.random()*1e18),I=O(),E=Te(y,s,p,x,k,f,I);console.log(JSON.stringify(E)),await A(E,h,a)}catch(f){alert(f),r=!0}}r&&alert("Error occurred. Please check the console for more details.")}else if(c==="IMG2IMG_INPAINT")try{const a="http://localhost:8000//image2image",g=await e.evalTS("getProjectPath",[]);if(C==="True"){const r=await e.evalTS("getlength",[]),d=await e.evalTS("getStartFrame",[]);for(let l=d;l<r+d;l++){const h=l-d,f=$(g,l),y=Y(g,l),k=await e.evalTS("getI2IMaskParams",l),I=Math.floor(Math.random()*1e18),E=O(),B=Se(k,s,p,x,I,f,y,E);await A(B,h,a)}}else{const r=await e.evalTS("getFrame",[]),d=await e.evalTS("getStartFrame",[]),l=r-d,h=$(g,r),f=Y(g,r),y=await e.evalTS("getI2IMaskParams",r),k=Math.floor(Math.random()*1e18),I=O(),E=Se(y,s,p,x,k,h,f,I);await A(E,l,a)}}catch(a){console.error("An error occurred: ",a)}else if(c==="Inpaint Sketch")try{const a="http://localhost:8000//image2image",g=await e.evalTS("getProjectPath",[]);if(C==="True"){const r=await e.evalTS("getlength",[]),d=await e.evalTS("getStartFrame",[]);for(let l=d;l<r+d;l++){const h=l-d,f=$(g,l),y=Z(g,l),k=await e.evalTS("getI2IMaskParams",l),I=Math.floor(Math.random()*1e18),E=O(),B=Se(k,s,p,x,I,f,y,E);console.log(B),await A(B,h,a)}}else{const r=await e.evalTS("getFrame",[]),d=await e.evalTS("getStartFrame",[]),l=r-d,h=$(g,r),f=Z(g,r),y=await e.evalTS("getI2IMaskParams",r),k=Math.floor(Math.random()*1e18),I=O(),E=Se(y,s,p,x,k,h,f,I);await A(E,l,a)}}catch(a){alert(a),console.error("An error occurred: ",a)}}if(o==="Setup"){const c="com.AESD.cep.Grids";vt.requestOpenExtension(c,"")}};return e.jsx(De.Provider,{value:{SDURL:S,setURL:N},children:e.jsx(Oe.Provider,{value:{seed:x,setSeed:m},children:e.jsx(Re.Provider,{value:{prompt:s,setPrompt:M,negativePrompt:p,setNegativePrompt:j},children:e.jsxs(Ue.Provider,{value:{activeOverride:u,setActiveOverride:b,overrideSettings:P,setOverrideSettings:_,Preprocessor:R,setPreprocessor:i,CnModelList:w,setCnModelList:G},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",overflow:"hidden",width:"100%",height:"100%"},children:[e.jsxs("div",{className:"button-container",style:ne,children:[e.jsx("div",{style:K}),e.jsx("button",{title:"Adds Adjustment Layer with ADBE AESD Effect.",style:z(t==="addeffect"),onClick:()=>D("addeffect"),children:e.jsx("img",{src:t==="addeffect"?ht:it,alt:"icon7",style:U})}),e.jsx("button",{title:"View your Input/Inpaint Images.",style:z(t==="Setup"),onClick:()=>D("Setup"),children:e.jsx("img",{src:t==="Setup"?ft:ct,alt:"icon1",style:U})}),e.jsx("button",{title:"Diffusion Models",style:z(t==="models"),onClick:()=>D("models"),children:e.jsx("img",{src:t==="models"?dt:nt,alt:"icon1",style:U})}),e.jsx("button",{title:"Prompts",style:z(t==="prompt"),onClick:()=>D("prompt"),children:e.jsx("img",{src:t==="prompt"?pt:st,alt:"icon2",style:U})}),e.jsx("button",{title:"Seed",style:z(t==="seed"),onClick:()=>D("seed"),children:e.jsx("img",{src:t==="seed"?gt:rt,alt:"icon3",style:U})}),e.jsx("button",{style:z(t==="settings"),title:"Settings",onClick:()=>D("settings"),children:e.jsx("img",{src:t==="settings"?ut:lt,alt:"icon6",style:U})}),e.jsx("button",{title:"Generate",style:z(t==="generate"),onClick:()=>{const o=document.getElementById("generateButton");o&&(o.style.backgroundColor="newColor",setTimeout(()=>{o.style.backgroundColor="originalColor"},1e3)),D("generate")},children:e.jsx("img",{id:"generateButton",src:t==="generate"?mt:at,alt:"icon5",style:U})})]}),t==="setup",t==="models"&&e.jsx(He,{}),t==="prompt"&&e.jsx(Ke,{}),t==="seed"&&e.jsx(Xe,{}),t==="addeffect"&&e.jsx(We,{}),t==="settings"&&e.jsx(Ye,{})]}),oe&&e.jsx(ot,{src:te})]})})})})};e.initBolt();e.client.createRoot(document.getElementById("root")).render(e.jsx(e.React.StrictMode,{children:e.jsx(xt,{})}));
