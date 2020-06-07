
const express = require("express");
const bodyParser =  require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const index = express();

index.set('view engine','ejs');

index.use(bodyParser.urlencoded({
    extended: true
}));
index.use(express.static("public"));


mongoose.connect("mongodb+srv://admin-asad:asad1234@cluster0-bbw0p.mongodb.net/onlinepharmacy", {useNewUrlParser:true ,useUnifiedTopology : true});

const mediciSchema = {
    title: String,
    desc: String,
    price: Number,
    type: String,
    status: String,
    pack: Array
}; 

const Medicine = mongoose.model("Medicine",mediciSchema);

//sugar
index.get("/sugar", function(req,res){
    Medicine.find({type : "sugar" , status : "Available"},function(err,sugarMed){
        res.send(sugarMed);
    });
});

//heart
index.get("/heart", function(req,res){
    Medicine.find({type : "heart" , status : "Available"},function(err,sugarMed){
        res.send(sugarMed);
    });
});

//blood pressure
index.get("/bp", function(req,res){
    Medicine.find({type : "blood pressure" , status : "Available"},function(err,sugarMed){
        res.send(sugarMed);
    });
});

let port = process.env.PORT;

if(port == null || port == ""){
    port = 3000;
}

index.listen(port,function(){
    console.log("Server has started");
});