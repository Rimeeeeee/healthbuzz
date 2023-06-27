const a=document.getElementById("ip1-ele");
const b=document.getElementById("ip2-ele");
const c=document.getElementById("ip3-ele");
const f=document.getElementById("btn-ele3");
const bs=document.getElementById("ip4-ele");
const bsb=document.getElementById("btn-ele4");
const bsr=document.getElementById("bl-ele");
const bp=document.getElementById("ip5-ele");
const bpb=document.getElementById("btn-ele5");
const bpr=document.getElementById("blp-ele");
const ha=document.getElementById("ip6-ele");
const hab=document.getElementById("btn-ele6");
const har=document.getElementById("blh-ele");
const cr=document.getElementById("ip7-ele");
const crb=document.getElementById("btn-ele7");
const crr=document.getElementById("blc-ele");
const cho=document.getElementById("ip8-ele");
const chob=document.getElementById("btn-ele8");
const chor=document.getElementById("blch-ele");
const vit=document.getElementById("ip9-ele");
const vitb=document.getElementById("btn-ele9");
const vitr=document.getElementById("blv-ele");
const p1=document.getElementById("p-ele");
const p2=document.getElementById("pa-ele");
const p3=document.getElementById("pb-ele");
const p4=document.getElementById("pc-ele");
const p5=document.getElementById("pd-ele");
const p6=document.getElementById("pe-ele");
const rel=document.getElementById("btn-ele10");


             let person=[];
             let hasPressure=false;
             let haemog=true;
             let hask=false;
             let chol=false;
             
              
f.addEventListener("click",function()
{
  person.push(a.value);
   person.push(b.value);
    person.push(c.value);
    const name=a.value;
    const age=b.value;
    const gender=c.value;
    calculate(name,age,gender);
    bpb.addEventListener("click",function(){
    const bpel=bp.value;
     bloodpressure(age,gender,bpel);
     
    
})
 hab.addEventListener("click",function(){
    const hael=ha.value;
     haemoglobin(age,gender,hael);
    
})  
  chob.addEventListener("click",function(){
    const choel=cho.value;
     cholestrol(age,gender,choel);
    
}) 
crb.addEventListener("click",function(){
    const chrel=cr.value;
     creatinine(age,gender,chrel);
    
})       
})
function calculate(n,ag,g)
{
    bsr.innerText="70-100";
    if((ag>=11&&ag<18)&&(g==="Male"||g=="Female")){
    bpr.innerText="128/60mmHg";
    crr.innerText="0.67mg/dl"
    }
    else if((ag>=18&&ag<40)&&(g=="Female")){
    bpr.innerText="110/68mmHg";
    crr.innerText="146-161ml/min/BSA";
    }
    else if((ag>=18&&ag<40)&&(g=="Male")){
    bpr.innerText="119/70mmHg";
     crr.innerText="77-160ml/min/BSA";
    }
    else if((ag>=40&&ag<60)&&(g=="Female")){
    bpr.innerText="112/74mmHg";
     crr.innerText="139-146ml/min/BSA";
    }
    else if((ag>=40&&ag<60)&&(g=="Male")){
    bpr.innerText="124/77mmHg";
    crr.innerText="77-160ml/min/BSA"
    }
    else if((ag>60)&&(g=="Female")){
    bpr.innerText="139/68mmHg";
    crr.innerText="56-131ml/min/BSA"
    }
    else if((ag>60)&&(g=="Male")){
    bpr.innerText="133/69mmHg";
    crr.innerText="77-160ml/min/BSA"
    }
    else{
    bpr.innerText="112/71mmHg";
    crr.innerText="0.53mg/dl";
    }
    if(ag<=19){
    chor.innerText="<170mg/dl(TC)";
    har.innerText="10-15.5g/dl";
    }
    else if((ag>=20)&&(g=="Female")){
    chor.innerText="125-200mg/dl(TC)";
    har.innerText="12-16g/dl";
    }
    else if((ag>=20)&&(g=="Male")){
    chor.innerText="125-200mg/dl(TC)";
    har.innerText="14-18g/dl";
    }
    vitr.innerText="2.4mcg";
}
bsb.addEventListener("click",function()
{
    const bsel=bs.value;
     bloodsugar(bsel);
})
vitb.addEventListener("click",function()
{
    const vitel=vit.value;
     vitaminb12(vitel);
})
function bloodsugar(c)
{
    if(c>=70&&c<=100)
      p1.innerText="Congrats!Blood Sugar is normal";
      else{
          p1.innerText="Blood Sugar not within normal range.";
      }
    
}
function bloodpressure(a1,g1,bj){
    if(a1>=11&&a1<18)
    {
        if(bj>=125&&bj<=130)
          hasPressure=false;
    
    else
    hasPressure=true;
}
  else if((a1>=18&&a1<40)&&(g1=="Female"))
    {
        if(bj>=110&&bj<=118)
          hasPressure=false;
    
    else
    hasPressure=true;
}
else if((a1>=18&&a1<40)&&(g1=="Male"))
    {
        if(bj>=115&&bj<=120)
          hasPressure=false;
     else
    hasPressure=true;
}
else if((a1>=40&&a1<60)&&(g1=="Female"))
    {
        if(bj>=100&&bj<110)
          hasPressure=false;
    
    else
    hasPressure=true;
}

else if((a1>=40&&a1<60)&&(g1=="Male"))
    {
        if(bj>=121&&bj<=124)
          hasPressure=false;
    
    else
    hasPressure=true;
}
else if((a1>=60)&&(g1=="Female"))
    {
        if(bj>=120&&bj<=139)
          hasPressure=false;
    
    else
    hasPressure=true;
}
else if((a1>60)&&(g1=="Male"))
    {
        if(bj>=125&&bj<=133)
          hasPressure=false;
    
    else
    hasPressure=true;
}
else{
    if(bj===112)
     hasPressure=false;
     else
    hasPressure=true;
     
}
if(hasPressure===false){
  p2.innerText="Congrats!Blood pressure is normal";
}
      else{
          p2.innerText="Blood pressure not within normal range.";
      }
  
}
function haemoglobin(a11,g11,h11){
    if(a11<=19){
        if(h11>=10&&h1<=15)
           haemog=true;
           else
           haemog=false;
    
}
else if((a11>19)&&(g11=="Female")){
    if(h11>=12&&h11<=16)
        haemog=true;
        else
        haemog=false;
}
else{
    if(h11>=14&&h11<=18)
       haemog=true;
       else
       haemog=false;
}
   if(haemog===true)
   p3.innerText="Congrats!Haemoglobin is normal";

      else{
          p3.innerText="Haemoglobin not within normal range.";
      }
  
}
function haemoglobin(a11,g11,h11){
    if(a11<=19){
        if(h11>=10&&h1<=15)
           haemog=true;
           else
           haemog=false;
    
}
else if((a11>19)&&(g11=="Female")){
    if(h11>=12&&h11<=16)
        haemog=true;
        else
        haemog=false;
}
else{
    if(h11>=14&&h11<=18)
       haemog=true;
       else
       haemog=false;
}
   if(haemog===true)
   p3.innerText="Congrats!Haemoglobin is normal";

      else{
          p3.innerText="Haemoglobin not within normal range.";
      }
  
}
function cholestrol(a13,g13,ch13){
    if(a13<=19){
        if(ch13<170)
           chol=false;
           else
           chol=true;
    
}
else if((a13>19)&&(g13=="Female")){
    if(ch13>=125&&ch13<=200)
       chol=false;
        else
        chol=true;
}
else{
    if(ch13>=125&&ch13<=200)
       chol=false;
       else
       chol=true;
}
   if(chol===false)
   p4.innerText="Congrats!Cholestrol level is normal";

      else{
          p4.innerText="Cholestrol level not within normal range.";
      }
  
}
function creatinine(a13,g13,cr13){
    if(a13>=11&&a13<18)
    {
        if(cr13===0.67)
          hask=false;
    
    else
    hask=true;
}
  else if((a13>=18&&a13<40)&&(g13=="Female"))
    {
        if(cr13>=146.0&&cr13<=161.0)
          hask=false;
    
    else
    hask=true;
}
else if((a13>=18&&a13<40)&&(g13=="Male"))
    {
        if(cr13>=77.0&&cr13<=160.0)
          hask=false;
    else
    hask=true;
}
else if((a13>=40&&a13<60)&&(g13=="Female"))
    {
        if(cr13>=139.0&&cr13<146.0)
          hask=false;
    
    else
    hask=true;
}

else if((a13>=40&&a13<60)&&(g13==="Male"))
    {
        if(cr13>=77.0&&cr13<=160.0)
          hask=false;
    
    else
    hask=true;
}
else if((a13>=60)&&(g13=="Female"))
    {
        if(cr13>=56.0&&cr13<=131.0)
          hask=false;
    
    else
    hask=true;
}
else if((a13>60)&&(g13=="Male"))
    {
        if(cr13>=77.0&&cr13<=160.0)
          hask=false;
    
    else
    hask=true;
}
else{
    if(cr13===0.53)
     hask=false;
     else
    hask=true;
     
}
if(hask===false){
  p5.innerText="Congrats!Creatinine level is normal";
}
      else{
          p5.innerText="Creatinine level is not within normal range.";
      }
  
}
function vitaminb12(bk)
{
    if(bk==2.4)
      p6.innerText="Congrats!VitaminB12 is normal";
      else{
          p6.innerText="VitaminB12 not within normal range";
      }
    
}
function clearInput(){

        if (a.value !="") {
            a.value = "";
        }
        
          if (b.value !="") {
            b.value = "";
        }  
        
        if (c.value !="") {
            c.value = "";
        }
        
        if (bs.value !="") {
            bs.value = "";
        }
        
        if (bp.value !="") {
            bp.value = "";
        }
        
        if (ha.value !="") {
            ha.value = "";
        }
        
        if (cr.value !="") {
            cr.value = "";
        }
        
        if (cho.value !="") {
            cho.value = "";
        }
        
        if (vit.value !="") {
            vit.value = "";
        }
        
 }
 rel.addEventListener("click",function(){
     clearInput();
 })
