var express=require("express")
var app=express();
var hbs=require('express-handlebars')
var server=require("http").createServer(app)
server.listen(4000)
var io=require("socket.io").listen(server);
const questionList=require('./question.json')//lay file json
var fs=require("fs")
app.use(express.static("public"))
const bodyParser=require("body-parser")
app.engine("handlebars",hbs({defaultLayout:"main"}))
app.set('view engine',"handlebars");

app.use(bodyParser.urlencoded({extended:false}));


app.get('/qs',function(req,res){
    res.render('qs')
})
app.get(["/","/ans"],function(req,res){
    let rand=Math.floor(Math.random()*questionList.length)
    let question =questionList[rand];
    res.render('ans',{
        qs:questionList[rand],
        question
    })

})
app.get("/question/:questionId",function(req,res){
    let question =questionList[req.params.questionId];
    var left,right;
    if(question.no==0&&question.yes==0){
        left="50.00%";
        right="50.00%";
    }
    else{
        left=Math.round((question.no*100/(question.yes+question.no)) * 100) / 100+"%";
        right=Math.round((question.yes*100/(question.yes+question.no)) * 100) / 100+"%";
    }
    res.render("vote",{
        question,
        left,
        right,
        totalVote:question.yes+question.no
    })
})

app.get("/answer/:questionId/:vote",(req,res)=>{
    questionList[req.params.questionId][req.params.vote]+=1;
    fs.writeFileSync("./question.json",JSON.stringify(questionList));
    res.redirect("/question/"+req.params.questionId)
})

// for(let i=0;i<questionList.length;i++){
//     app.get('/question'+i,function(req,res){
//         res.render('vote',{
//             qs:questionList[i]
//         })
//     })
// }



app.post("/question/add",(req,res)=>{
    console.log(req.body)
    let newQs={content:req.body.questionContent,yes:0,no:0,id:questionList.length}
    questionList.push(newQs)
    fs.writeFileSync("./question.json",JSON.stringify(questionList));
    res.redirect("/question/"+newQs.id)
    
})

// io.on("connection",function(socket){
//     socket.on("Client-click-other-qs",function(){
//         socket.emit("server-send-qs",questionList);
//     })

//     // socket.emit("server-send-qs2",arrQs);


// })