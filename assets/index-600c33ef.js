import{d as f,r as _,a as p,o as k,e as x,g as s,w as l,b as i,u as a,i as C,f as w,E as n}from"./index-fbde766d.js";const q=w("div",{style:{color:"#ccc","font-size":"12px"}},"jpg/png files with a size less than 500kb",-1),E=f({__name:"index",setup(z){let t=_(!1),c=()=>{t.value=!0},d=[{type:"input",value:"",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}],g=e=>{e.validate()(r=>{r?(console.log(e.getFormData()),n.success("验证成功")):n.error("表单填写有误,请检查")})},m=e=>{e.resetFields(),t.value=!1},b=e=>{console.log("success"),console.log(e)},v=e=>{console.log("change"),console.log(e)};return(e,u)=>{const r=p("el-button"),h=p("m-model-form");return k(),x("div",null,[s(r,{type:"primary",onClick:a(c)},{default:l(()=>[i("打开")]),_:1},8,["onClick"]),s(h,{isScroll:"",options:a(d),title:"编辑用户",width:"50%",visible:a(t),"onUpdate:visible":u[0]||(u[0]=o=>C(t)?t.value=o:t=o),"on-change":a(v),"on-success":a(b)},{footer:l(({form:o})=>[s(r,{onClick:y=>a(m)(o)},{default:l(()=>[i("取消")]),_:2},1032,["onClick"]),s(r,{type:"primary",onClick:y=>a(g)(o)},{default:l(()=>[i("确认")]),_:2},1032,["onClick"])]),uploadArea:l(()=>[s(r,{size:"small",type:"primary"},{default:l(()=>[i("Click to upload")]),_:1})]),uploadTip:l(()=>[q]),_:1},8,["options","visible","on-change","on-success"])])}}});export{E as default};
