(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9893],{35422:function(e,t,n){"use strict";var s,a,i=n(67294);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}t.Z=function(e){return i.createElement("svg",l({width:20,height:20,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=i.createElement("g",{clipPath:"url(#send_svg__a)",stroke:"#fff",strokeWidth:5.25,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M40 60H16.667A6.667 6.667 0 0 1 10 53.333V20a6.667 6.667 0 0 1 6.667-6.667h46.666A6.667 6.667 0 0 1 70 20v25"}),i.createElement("path",{d:"m10 20 30 20 30-20M50 60h20M60 50l10 10-10 10"}))),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"send_svg__a"},i.createElement("path",{fill:"#fff",d:"M0 0h80v80H0z"})))))}},43597:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/qabuldanotganlar",function(){return n(57175)}])},67271:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});let s=[{id:1,name:"SIRTQI"},{id:2,name:"KUNDUZGI"},{id:3,name:"KECHKI"}];t.Z=[{id:1,name:"UZ"},{id:2,name:"RU"}]},57175:function(e,t,n){"use strict";n.r(t),n.d(t,{QabuldanOtganlar:function(){return D},default:function(){return P}});var s=n(85893),a=n(67294),i=n(56778),l=n(79297),d=n(78967),c=n(3985),r=n(74555),o=n(93100),h=n(20539),u=n(46481),x=n(58226),p=n(9473),j=n(96614),m=n(87581),v=n(30351),g=n(96319),f=n(83454);let y=(0,g.hg)("getAdmissionExcelfetch",async e=>await fetch("".concat(f.env.NEXT_PUBLIC_BASE_URL||"https://evredu.uz/api/","v1/admission/download-excel"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("admin_AccessToken"))},responseType:"blob"}).then(e=>e.blob()).then(e=>{let t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="excel.xlsx",document.body.appendChild(n),n.click(),n.remove()}));var S=n(35422),k=n(26586);let w=(0,g.hg)("getAdmissionAgentFetch",async e=>await fetch("".concat(k.J,"v1/agent"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("admin_AccessToken"))}}).then(e=>e.json())),T=(0,g.oM)({name:"getAdmissionAgentData",initialState:{status:null,data:[]},extraReducers:{[w.pending](e){e.status="Loading"},[w.fulfilled](e,t){let{payload:n}=t;n.success?(e.data=n.data,e.status="Success"):e.status="Not found, try again please"},[w.rejected](e){e.status="Error"}}});T.reducer;var N=n(67271);let Z=(0,g.hg)("getAdmissionPaymentFetch",async e=>await fetch("".concat(k.J,"v1/payment/types"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("admin_AccessToken"))}}).then(e=>e.json())),b=(0,g.oM)({name:"getAdmissionPaymentData",initialState:{status:null,data:[]},extraReducers:{[Z.pending](e){e.status="Loading"},[Z.fulfilled](e,t){let{payload:n}=t;n.success?(e.data=n.data,e.status="Success"):e.status="Not found, try again please"},[Z.rejected](e){e.status="Error"}}});b.reducer;let A=()=>{let e=(0,p.I0)(),[t,n]=(0,a.useState)([]),g=(0,p.v9)(e=>e.getAdmissionData);(0,a.useEffect)(()=>{var e;n(null==g?void 0:null===(e=g.data)||void 0===e?void 0:e.map(e=>({...e,checked:!1})))},[g]);let[f,k]=(0,a.useState)([]),[T,b]=(0,a.useState)(!1),A=()=>{T?(n(t.map(e=>({...e,checked:!1}))),k([])):(n(t.map(e=>({...e,checked:!0}))),t.map(e=>f.push(e.user.id)))},E=(e,s)=>{n(t.map(e=>({...e,checked:s===e.user.id?!e.checked:e.checked}))),k(e?[...f,s]:f.filter(e=>e!==s))},D=new Date,[P,_]=(0,a.useState)(new Date(16725312e5)),[I,C]=(0,a.useState)(D),z=e=>_(new Date(e.target.value)),L=e=>C(new Date(e.target.value)),[O,R]=(0,a.useState)(!1),[B,U]=(0,a.useState)(null),M=e=>U(e),[F,q]=(0,a.useState)(null),H=e=>q(e),K=(0,p.v9)(e=>e.getStudyTypesAbuturent),[G,Q]=(0,a.useState)([]);(0,a.useEffect)(()=>Q(null==K?void 0:K.data));let[X,V]=(0,a.useState)(null),J=e=>V(e),[W,Y]=(0,a.useState)([]),$=(0,p.v9)(e=>e.getAdmissionAgentData);(0,a.useEffect)(()=>Y(null==$?void 0:$.data));let[ee,et]=(0,a.useState)(null),en=e=>et(e),[es,ea]=(0,a.useState)(null),ei=e=>ea(e),[el,ed]=(0,a.useState)([]),ec=(0,p.v9)(e=>e.getAdmissionPaymentData);(0,a.useEffect)(()=>ed(null==ec?void 0:ec.data));let[er,eo]=(0,a.useState)(null),eh=e=>eo(e),[eu,ex]=(0,a.useState)(!1),[ep,ej]=(0,a.useState)(0),[em,ev]=(0,a.useState)("");(0,a.useEffect)(()=>{e((0,x.h)({page:ep,search:em,fromDate:P.getTime(),toDate:I.getTime(),lang:F,courseLevel:B,facultyTypeId:X,facultyId:es,paymentType:er,agentId:ee}))},[eu,ep,em]);let eg=()=>e(y()),[ef,ey]=(0,a.useState)(!1),[eS,ek]=(0,a.useState)(!1),ew=()=>{ey(!0),e((0,v.$)({type:"BACHELOR"})),e(w()),e(Z())},eT=()=>{ek(!0),setTimeout(()=>{ey(!1),ek(!1)},1e3)},eN=()=>{ey(!1)};(0,p.v9)(e=>e.sendSmsData);let[eZ,eb]=(0,a.useState)(!1),[eA,eE]=(0,a.useState)(!1),eD=(0,a.useRef)(),eP=()=>{eb(!0)},e_=()=>{var t;e((0,m.V)({text:null===(t=eD.current)||void 0===t?void 0:t.value,users:f})),eE(!0),setTimeout(()=>{eb(!1),eE(!1)},1e3)},eI=()=>{eb(!1)};return(0,s.jsxs)(i.ZP.Wrapper,{children:[(0,s.jsxs)(i.ZP,{children:[(0,s.jsxs)(i.ZP.Filter,{children:[(0,s.jsx)(u.Z,{className:"search"}),(0,s.jsx)(j.II,{onchange:e=>ev(e.target.value),padding:"0 128px 0 50px",width:"711px",height:"60px",size:"25px",placeholder:"search"}),(0,s.jsx)(i.ZP.Button,{children:(0,s.jsx)(j.zx,{onclick:ew,shadow:"0 0 0 0",width:"100%",height:"30px",radius:"0",size:"18px",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(h.Z,{})," ",(0,s.jsx)("p",{children:"Filter"})," "]})})}),(0,s.jsx)(i.ZP.Date,{className:"nocopy",children:(0,s.jsx)(j.II,{value:P.toLocaleDateString("en-CA"),onchange:z,min:"2023-01-01",max:"9999-12-31",shadowOff:"0 0 0 0",width:"100%",height:"100%",type:"date",size:"14px",bc:"none"})}),(0,s.jsx)(i.ZP.Date,{className:"nocopy",children:(0,s.jsx)(j.II,{value:I.toLocaleDateString("en-CA"),onchange:L,min:"2023-01-01",max:"9999-12-31",shadowOff:"0 0 0 0",width:"100%",height:"100%",type:"date",size:"14px",bc:"none"})}),(0,s.jsx)(j.zx,{onclick:()=>R(!O),width:"175px",height:"48px",radius:"10px",size:"18px",children:"Tartiblash"})]}),(0,s.jsxs)(i.HL,{className:"nocopy",children:[(0,s.jsxs)(i.Xp,{children:[(0,s.jsx)(d.Z,{}),(0,s.jsxs)("p",{children:["Arizalar soni: ",null==t?void 0:t.length]})]}),(0,s.jsxs)(i.ER,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{children:["Ariza to'lovi: ","222 222 222"]})})]}),(0,s.jsxs)(i.uz,{onClick:eg,children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)("p",{children:"Excelga chiqarish"})]}),(0,s.jsxs)(i.QA,{onClick:eP,children:[(0,s.jsx)(r.Z,{className:"Sms"}),(0,s.jsx)("p",{children:" SMS yuborish"})]})]}),(0,s.jsxs)(i.Ov,{open:eZ,onOk:e_,confirmLoading:eA,onCancel:eI,children:[(0,s.jsx)("h1",{children:"SMS yuborish"}),(0,s.jsx)(S.Z,{className:"sendSms"}),(0,s.jsx)("input",{ref:eD,type:"text",placeholder:"t y p i n g ..."})]}),(0,s.jsxs)(i.bR,{open:ef,onOk:eT,confirmLoading:eS,onCancel:eN,children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.Py,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>en(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Agent"}),null==W?void 0:W.map(e=>(0,s.jsx)("option",{value:e.id,children:null==e?void 0:e.fullName},e.id))]}),(0,s.jsx)(l.Z,{className:"Down"})]}),(0,s.jsxs)(i.Py,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>M(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Kurs"}),[{name:"1-kurs",id:1},{name:"2-kurs",id:2},{name:"3-kurs",id:3},{name:"4-kurs",id:4},{name:"5-kurs",id:5},{name:"6-kurs",id:6}].map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,s.jsx)(l.Z,{className:"Down"})]}),(0,s.jsxs)(i.IN,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>J(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Ta'lim yo'nalishi"}),(null==G?void 0:G.length)>0?G.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id)):(0,s.jsx)("p",{children:"No data !"})]}),(0,s.jsx)(l.Z,{className:"Down"})]}),(0,s.jsxs)(i.e7,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>ei(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Ta'lim shakli"}),N._.map(e=>(0,s.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,s.jsx)(l.Z,{className:"Down"})]}),(0,s.jsxs)(i.TQ,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>H(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Ta'lim tili"}),[{id:"UZ"},{id:"RU"}].map(e=>(0,s.jsx)("option",{value:e.id,children:e.id},e.id))]}),(0,s.jsx)(l.Z,{className:"Down"})]}),(0,s.jsxs)(i.VI,{children:[(0,s.jsxs)("select",{name:"pets",id:"pet-select",onChange:e=>eh(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"To'lov turi"}),null==el?void 0:el.map(e=>(0,s.jsx)("option",{value:e.value,children:e.key},e.value))]}),(0,s.jsx)(l.Z,{className:"Down"})]})]}),(0,s.jsx)("div",{style:{position:"absolute",right:"0",top:"100px"},children:(0,s.jsx)(j.zx,{onclick(){ex(!eu),ey(!1)},width:"200px",height:"50px",size:"20px",weight:400,children:"Filter"})})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(i.zd,{children:(0,s.jsx)(i.ZP.Bottom,{children:(0,s.jsxs)(i.ZP.BottomInset,{children:[(0,s.jsxs)(i.ZP.Nav,{children:[(0,s.jsx)("input",{type:"checkbox",onChange(){b(!T),A()}}),(0,s.jsxs)(i.ZP.Box,{children:[(0,s.jsx)("div",{children:"№"}),(0,s.jsx)("div",{children:"ID"}),(0,s.jsx)("div",{children:"FIO"}),(0,s.jsx)("div",{children:"Kurs"}),(0,s.jsx)("div",{children:"Ta'lim tili"}),(0,s.jsx)("div",{children:"Ta'lim yo'nalishi"}),(0,s.jsx)("div",{children:"Ta'lim shakli"}),(0,s.jsx)("div",{children:"Sana"}),(0,s.jsx)("div",{children:"Agent"}),(0,s.jsx)("div",{children:"Pasport seriya"}),(0,s.jsx)("div",{children:"Pasport nusxasi"}),(0,s.jsx)("div",{children:"Transcrip/Diplom nusxasi"}),(0,s.jsx)("div",{children:"Telefon raqam 1"}),(0,s.jsx)("div",{children:"Telefon raqam 2"}),(0,s.jsx)("div",{children:"Tahrirlash "})]})]}),(null==t?void 0:t.length)?null==t?void 0:t.map((e,t)=>{var n;return(0,s.jsxs)(i.ZP.Section,{children:[(0,s.jsx)("input",{className:"chcxboxInput",type:"checkbox",onChange:t=>E(t.target.checked,e.user.id),checked:e.checked}),(0,s.jsxs)(i.ZP.Map,{children:[(0,s.jsx)("div",{children:t+1}),(0,s.jsx)("div",{children:e.user.idNumber}),(0,s.jsx)("div",{children:e.user.fullName}),(0,s.jsx)("div",{children:e.courseLevel}),(0,s.jsx)("div",{children:"UZ"===e.facultyType.studyLanguage?"Ozbek tili":"Rus tili"}),(0,s.jsx)("div",{children:e.facultyName}),(0,s.jsx)("div",{children:e.facultyType.educationType}),(0,s.jsx)("div",{children:new Date(e.user.createdAt).toLocaleDateString()}),(0,s.jsx)("div",{children:(null==e?void 0:e.agent)?e.agent.fullName:"Yoq"}),(0,s.jsx)("div",{children:e.user.passportSeries}),(0,s.jsx)("div",{children:e.user.idNumber}),(0,s.jsx)("div",{children:null===(n=e.diplomaFile)||void 0===n?void 0:n.fileOriginalName}),(0,s.jsxs)("div",{children:["+",e.user.phoneNumber]}),(0,s.jsxs)("div",{children:["+",e.user.extraPhoneNumber]}),(0,s.jsx)("div",{children:e.kurs}),(0,s.jsx)("h1",{children:e.checked})]})]},e.id)}):(0,s.jsx)("p",{style:{color:"#fff",padding:"1rem"},children:"No data !"})]})})})})]})};var E=n(13256);let D=()=>(0,s.jsx)(E.Z,{children:(0,s.jsx)(A,{})});var P=D}},function(e){e.O(0,[647,9488,8846,5992,3256,4130,9774,2888,179],function(){return e(e.s=43597)}),_N_E=e.O()}]);