const express =require('express')
const bodyParse=require('body-parser')
const mongoose=require('mongoose')
const apiRouter=require('./routers/apiRouter')

let app=express();
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.get("/",(req,res)=>{
    res.send("OK")
})
app.use("/api",apiRouter)

mongoose.connect("mongodb://localhost:27017/techkids-hotgirls",{ useNewUrlParser: true },(err)=>{
    if(err) console.log(err)
    else console.log("Database connect success!!")
})


const port=6969;
app.listen(port,(err)=>{
    if(err) console.log(err)
    else console.log(`Server is listening at  ${port}`)   //dung `` moi dung duoc bien ${}
})

