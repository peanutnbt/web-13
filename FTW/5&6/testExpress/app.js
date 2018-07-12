const express=require('express')
const hbs=require('express-handlebars');
let app=express();

app.listen(5000, function(err){
    if(err) console.log(err);
    else console.log("Server is listening at port: 5000")
});



app.engine("handlebars",hbs({defaultLayout:"main"}))
app.set("view engine","handlebars");
app.get("/",function(req,res){
    res.render("home")
})
app.get("/about",function(req,res){
    res.render("about",{
        number: Math.floor(Math.random()*99),
        htmlString:'<span style="color:red">HELLO</span>'
    });
})


// app.get("/",function(req,res){
//     res.send("helllloooo")
// })
// // app.use(function(req,res,next){
// //     console.log("Thu phi!!!!");
// //     next();
// // })
// // de o day thi khi vao /girlxinh se in ra THU PHI,,, de o sau dong duoi thi ko chay
// app.get("/girlxinh",function(req,res){
//     res.sendfile(__dirname+"/1.jpg")
// })

// const path=require("path")
// app.get("/1.html",function(req,res){
//     res.sendfile(path.resolve(__dirname,"pathName"))
// })

