const express = require("express");

const app = express();

app.get("/", function(req ,res){
    res.send("<h1>Hello World </h1>")
})


app.listen(5000, function(){
    console.log("staritng at 5000......");
});