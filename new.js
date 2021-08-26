var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");

const app= express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(express.static(path.join(__dirname)));

//app.use(bodyParser.json())
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/amin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db=mongoose.connection;

db.on('errror',()=>console.log("Error connecting to DB...."));
db.once('open',()=>console.log(" You Are Now Connected to MongoDB Database...."));

app.post("/submit",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var place=req.body.place;
    var age=req.body.age;
    var card=req.body.card;
    var password=req.body.password;
    var data={
        "name":name,
        "email":email,
        "place":place,
        "age":age,
        "card":card,
        "password":password,
    } 
    db.collection('amin').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted");
        console.log(req.body);
    });

    return res.redirect('index.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('rreg.html');
}).listen(2000);
console.log(" YOU ARE USING PORT :2000");
