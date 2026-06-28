const words=[
"Web Developer",
"HTML Learner",
"CSS Designer",
"JavaScript Learner"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

document.getElementById("typingText").textContent=current.substring(0,j);

if(!isDeleting){
j++;
if(j>current.length){
isDeleting=true;
setTimeout(type,1000);
return;
}
}else{
j--;
if(j===0){
isDeleting=false;
i=(i+1)%words.length;
}
}

setTimeout(type,isDeleting?70:120);

}

type();

let p=0,s=0,v=0;

const timer=setInterval(()=>{

if(p<20){
p++;
document.getElementById("projectCount").innerHTML=p;
}

if(s<10){
s++;
document.getElementById("skillCount").innerHTML=s;
}

if(v<100){
v++;
document.getElementById("visitorCount").innerHTML=v;
}

if(p===20&&s===10&&v===100){
clearInterval(timer);
}

},40);
