//const dbConnect = require('mongodb').MongoClient
//import {MongoClient} from 'mongodb'
//import MongoClient  from "../static/m.js";
const url = "mongodb://localhost:27017/"

// let x=function click(e){
//     console.log("ved")
//     MongoClient.connect(url,function(err,db){
//         var data=document.getElementById("value").value()
//         if(err) {
//             throw err
//         }
//         var myobj={id:"1",stroy:data}
//         var dbo=db.db("reviews")

//         dbo.collection("data").insert(data,(err,collection)=>{
//             if(err) throw err;
//             console.log("Data inserted")
//         })
//     })
// }

// let y=function submit(e){
//     MongoClient.connect(url,function(err,db){
//         var data=document.getElementById("value").value()
//         if(err) {
//             throw err
//         }
//         var myobj={id:"1",stroy:data}
//         var dbo=db.db("reviews")

//         dbo.collection("data").findOne({},function(err,result){
//             if(err) throw err;
//             console.log(result.stroy)
//         })
//     })
// }
const review=[]
let x=function submit(e){
    console.log("here1")
    var data=document.getElementById('value').value
    if(data.length=0){
        console.log("no data get")
    }
    else{
        review.push(data)
        console.log("data added")
        console.log(review)
    }
}
let y=function click(e){
    console.log("here")
    let min=1;
    let max=10;
    let diff;
    let rand;
    diff=max-min;
    rand=Math.random()
    rand=Math.floor(rand*diff)
    rand=rand+min
    document.getElementById("value2").innerHTML=review[0]
}
btn1.addEventListener('click',x)
btn2.addEventListener('click',y)