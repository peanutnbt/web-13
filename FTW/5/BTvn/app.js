var express=require("express")
var app=express();
var hbs=require('express-handlebars')
var server=require("http").createServer(app)
server.listen(4000)
var io=require("socket.io").listen(server);

app.use(express.static("public"))

app.engine("handlebars",hbs({defaultLayout:"main"}))
app.set('view engine',"handlebars");

var arrQs=["aaa","bbb","ccc","ddd","eee"];

app.get('/qs',function(req,res){
    res.render('qs')
})
app.get(["/","/ans"],function(req,res){
    res.render('ans',{
        qs:arrQs[Math.floor(Math.random()*arrQs.length)]
    })
})
// app.get('/',function(req,res){
//     res.render('ans',{
//         qs:arrQs[Math.floor(Math.random()*arrQs.length)],
//     })
// })
for(let i=0;i<arrQs.length;i++){
    app.get('/question'+i,function(req,res){
        res.render('vote',{
            qs:arrQs[i]
        })
    })
}



io.on("connection",function(socket){
    socket.on("Client-click-other-qs",function(){
        socket.emit("server-send-qs",arrQs);
    })

    socket.emit("server-send-qs2",arrQs);


})