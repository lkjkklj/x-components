import{d as s,r as i,a as p,o as v,c as m,u as l}from"./index-fbde766d.js";const C=s({__name:"index",setup(u){let a=i([{title:"购物",start:"2023-05-22 10:00:00",end:"2023-05-22 12:00:00",editable:!0},{title:"学习",start:"2023-05-21 08:00:00",end:"2023-05-21 16:00:00"}]),r=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"吃饭"};a.value.push(t),console.log(e)},d=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),o=n[0].replace("上午","").replace("下午","").replace("时",""),c=n[1].replace("上午","").replace("下午","").replace("时","");return t.innerHTML=`
         <div>开始时间: ${o}</div>
         <div>结束时间: ${c}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=p("m-calendar");return v(),m(n,{events:l(a),onDateClick:l(r),eventContent:l(d),displayEventEnd:""},null,8,["events","onDateClick","eventContent"])}}});export{C as default};
