

var express=require('express');
var app=express();


app.get("/",function(req,res){
    res.send("Hy their the asssignment is here");
})

app.get("/:name/:id",function(req,res){

    var num=req.params.id;
    var name =req.params.name;
    var res1="";

    for(var i=0;i<num;i++)
        res1+=name+" ";
    
    res.send(res1);
    
})

app.get("/dog",function(req,res){
    res.send("workking on it");
})

app.get("/dog/:name",function(req,res){
    var routename=req.params.name;

    res.send(`the name of the dog is the following  ${routename.toUpperCase()}`)
})



app.get("/:name",function(req,res){

    var  nameoftheAnimal={
        pig:"p",
        dog:"d",
        cat:"M",
        robin:"R",
    }

    var name =req.params.name;
    var res1=nameoftheAnimal[name];


    res.send("Here the animal Name : "+res1);
    
})


app.listen(300,function(req,res){
    console.log("the server has been strted");
})

