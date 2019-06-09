
// initialse express

var express=require('express');
var app=express();


// Routes


// app.get("/",function(req,res){
//   // res.render("home.ejs");
// })



app.get("/dog/:name",function(req,res){
    var routename=req.params.name;

// Sending data through the form of objects
    res.render("home.ejs",{
        myvar:routename,
    })
})



// For All the route except the above

app.get("*",function(req,res){
    res.send("The error is here my boy !! <br> Typoo error Boiiiiii");
})



// assign Port to server

app.listen(3000,function(){
    console.log("the Server has been started");
});
