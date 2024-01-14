//const {OpenAI} = require("openai");
//import OpenAI from "../static/p.js"
//const Openai = require("../static/m");
//import OpenAI from "./v.js";
//import OpenAI from "https://cdn.jsdelivr.net/npm/openai@4.2.0/+esm"
import OpenAI  from "../static/v.js";
let bt=document.getElementById('btn')
console.log('bt'+bt)
/*bt.addEventListener('keydown',e=>{
    console.log(e)
    if(e.keycode==13){
        //console.log("ved")
        //alert("ved")
        submit()
    }
})*/
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()
let x=function submit(e){
            let arr=new Array();
            let count1=0;
            let count2=0;
            let markedCheckbox1 = document.getElementsByName('1');
            for(var c of markedCheckbox1){
                if(c.checked==true){
                        count2=count2+1;
                }
                if(c.checked==false){
                        count1=count1+1;
                }
            }
            let count3=0;
            let count4=0;
            let markedCheckbox2 = document.getElementsByName('2');
            for(var c of markedCheckbox2){
                if(c.checked==true){
                        count4=count4+1;
                }
                if(c.checked==false){
                        count3=count3+1;
                }
            }
            let count5=0;
            let count6=0;
            let markedCheckbox3 = document.getElementsByName('3');
            for(var c of markedCheckbox3){
                if(c.checked==true){
                        count6=count6+1;
                }
                if(c.checked==false){
                        count5=count5+1;
                }
            }
            let count7=0;
            let count8=0;
            let markedCheckbox4 = document.getElementsByName('4');
            for(var c of markedCheckbox4){
                if(c.checked==true){
                        count8=count8+1;
                }
                if(c.checked==false){
                        count7=count7+1;
                }
            }
            let count9=0;
            let count10=0;
            let markedCheckbox5 = document.getElementsByName('5');
            for(var c of markedCheckbox5){
                if(c.checked==true){
                        count10=count10+1;
                }
                if(c.checked==false){
                        count9=count9+1;
                }
            }
            //console.log(count7)
            //console.log(count8)
            //console.log(count9)
            //console.log(count10)
            if(count1==2 || count3==2 || count5==2 || count7==2 || count9==2){
                document.body.append("Select one option atleast ");
                console.log("Select one option atleast ")
                return;
            }
            if(count2==2 || count4==2 || count6==2 || count8==2 || count10==2){
                document.body.append("Select only one option");
                console.log("Select only one option")
                return;
            }
            if(count2==1 && count4==1 && count6==1 && count8==1 && count10==1){
                for (var checkbox of markedCheckbox1) {  
                    if (checkbox.checked)  
                        arr[0]=checkbox.value;
                        //document.body.append(checkbox.value + ' ');  
                } 
                for (var checkbox1 of markedCheckbox2) {  
                    if (checkbox1.checked)  
                        arr[1]=checkbox1.value;
                        //document.body.append(checkbox1.value + ' ');  
                }
                for (var checkbox2 of markedCheckbox3) {  
                    if (checkbox2.checked)  
                        arr[2]=checkbox2.value;
                        //document.body.append(checkbox2.value + ' ');  
                } 
                for (var checkbox3 of markedCheckbox4) {  
                    if (checkbox3.checked)  
                        arr[3]=checkbox3.value;
                        //document.body.append(checkbox2.value + ' ');  
                } 
                for (var checkbox4 of markedCheckbox5) {  
                    if (checkbox4.checked)  
                        arr[4]=checkbox4.value;
                        //document.body.append(checkbox2.value + ' ');  
                } 
                document.body.append(arr + ' ');
                console.log(arr)
            } 
            let result=0;
            /*if(arr[0]=='Yes' && arr[1]=='Yes' && arr[2]=='Yes' && arr[3]=='Yes' && arr[4]=='Yes'){
                document.body.append("all are Yes options");
                console.log("all are Yes options")
            }
            if(arr[0]=='No' && arr[1]=='No' && arr[2]=='No'&& arr[3]=='No'&& arr[4]=='No'){
                document.body.append("all are No options");
                console.log("all are No options")
            }*/
            for(let i=0;i<=arr.length-1;i++){
                if(arr[i]=='Yes'){
                    //console.log(arr[i])
                    result+=10
                    //console.log(result)
                }
                else{
                    result+=20
                }
            }
            const re = ["1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "Relaxation Techniques and Yoga can Help relive Mild to moderate Deprssion.Includes music,muscle relaxation",
                        "No"]
            let min=1;
            let max=10;
            let diff;
            let rand;
            if(result==50){
                document.getElementById("p").innerHTML=re[10]
                console.log(re[10])
            }
            else if(result==100){
                console.log(re[11])
                document.getElementById("p").innerHTML=re[11]
            }
            else{
                diff=max-min;
                rand=Math.random()
                rand=Math.floor(rand*diff)
                rand=rand+min
                document.getElementById("p").innerHTML=re[rand]
                console.log(rand)
            }
           // console.log(result)
}
btn.addEventListener('click',x)
/*let y=function getans(e){
    let a = document.getElementById("value").value;
    console.log(a)

    //const OpenAI = require("openai");
    async function call(){
       const openai = new OpenAI({
           apiKey :'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',dangerouslyAllowBrowser: true, 
       });
       //OpenAI({ apiKey, dangerouslyAllowBrowser: true });
       //({ apiKey, dangerouslyAllowBrowser: true });
       const runPrompt = await openai.completions.create({
           model:"text-davinci-003",
           prompt:a,
           max_tokens:30,
       }) 
       //console.log('ans'+runPrompt.choices[0].text)
       //let b=runPrompt.choices[0].text
       //return b
       return(runPrompt.choices[0].text);
       //document.getElementById("ans").innerHTML+=runPrompt.choices[0].text;
   }
   let val=call()
   console.log('val'+val)
   val.then(value=>{
    console.log('value'+value)
    document.getElementById("ans").innerHTML+=value;
   })
   //document.getElementById("ans").innerHTML+=val;
}*/
function getans(){
    let a = document.getElementById("value").value;
    console.log(a)

    const OpenAI = require("openai");
    async function call(){
       const openai = new OpenAI({
           apiKey :'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',
       });
       
       const runPrompt = await openai.completions.create({
           model:"text-davinci-003",
           prompt:a,
           max_tokens:30,
       }) 
       return(runPrompt.choices[0].text);
   }
   //let val=call()
   //console.log(val)
   //document.getElementById("ans").innerHTML+=val;
}
let y=() =>{
    getans.then((a)=>{
        console.log(a)
    })
}
btn1.addEventListener('click',y)

