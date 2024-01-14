//include ncessary module
const express = require('express');
const path = require('path');
const app = express();
const fs =  require("fs");
const port = 3500;
//const dbConnect = require('mongodb').MongoClient

//serving static file
app.use('/static',express.static('static'))
app.use(express.urlencoded());

//set template engine for pug
app.set('view engine','pug');

//views directory
app.set('views',path.join(__dirname,'views'));

//endpoint
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
    // res.status(200).render("home.pug");
})
app.get('/info',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/info.html'))
    // res.status(200).render("info.pug");
})
app.get('/session',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/session.html'))
    // res.status(200).render("session.pug");
})
app.get('/stroy',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/review.html'))
    // res.status(200).render("review.pug");
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/contact.html'))
    // res.status(200).render("contact.pug");
})
// app.get('/www.rethink.org/about-us/our-support-groups',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/public/index.html'))
//     // res.status(200).render("contact.pug");
// })
//start the server
app.listen(port,()=>{
    console.log(`Application Listen At Port ${port}`);
})
