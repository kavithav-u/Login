const express = require('express')
const app = express();

app.set('view engine','ejs');


const items = []

app.get('/', function(req,res){
    res.render('index1',{items:items});
});

app.listen(3000,function(){
    console.log("Server Listening")
})