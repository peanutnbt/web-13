var express=require("express")
var app=express();
var hbs=require('express-handlebars')
var server=require("http").createServer(app)
const apiRouter=require('./router/apiRouter');
server.listen(4000)
// const questionList=require('./question.json')//lay file json, thao tac nhu mang
// var fs=require("fs")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BTvn',{useNewUrlParser:true},function(err){
    if(err) console.log(err);
    else console.log("DB connect success");
});


app.use(express.static("public"))

app.engine("handlebars",hbs({defaultLayout:"main"}))
app.set('view engine',"handlebars");

const questionRouter=require("./router/questionRouter");
app.use("/question",questionRouter);

const QuestionModel=require("./models/questionModel")

app.use("/api",apiRouter);//api Router


app.get('/qs',function(req,res){
    res.render('qs')
})
app.get(["/","/ans"],function(req,res){
    QuestionModel.find()
        .then(function(doc){
            let rand=Math.floor(Math.random()*doc.length)
            let question =doc[rand];
            res.render('ans',{
                qs:doc[rand],
                question
            })
        })
})

app.post("/",(req,res)=>{
    QuestionModel.find((function(err,doc){
        // let rand=Math.floor(Math.random()*doc.length)
        // let question =doc[rand];
        if(err) res.status(500).send({success:0,errMsg:err})
        else res.status(201).send({success:1,questions:doc})
    }))
})