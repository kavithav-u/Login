const express = require('express')
const app = express();



app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('myEJS',{
        heading:"My heading",
        title: "My Title"
    })
})

app.listen(3000,()=>{
    console.log("server Listening")
})