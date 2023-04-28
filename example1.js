const experss = require('express')
const app = express();


app.set('view engine','ejs')

const items=[
    { name:'apple',price:25},
    {name:'banana',price :30}
]

app.get('/',(req,res)=>{
    res.render('index',{items:items})
})

app.listen(3001, ()=>{
    console.log("server listeninig")
})