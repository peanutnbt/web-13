const express =require("express");
const router=express.Router();
const bodyParser=require("body-parser")
const QuestionModel=require("../models/questionModel")

//app.all bao gom get post ....    "/" tuong duong /question

router.use(bodyParser.urlencoded({extended:true})); //tu dong bat su kien req.on , de lay data tu form

// /question?questionId=0
// router.get("/",(req,res)=>{
//     let question;
//     QuestionModel.find()
//         .then(function(doc){
//             question=doc[req.query.questionId];
//             var left,right;
//             if(question.no==0&&question.yes==0){
//                 left="50.00%";
//                 right="50.00%";
//             }
//             else{
//                 left=Math.round((question.no*100/(question.yes+question.no)) * 100) / 100+"%";
//                 right=Math.round((question.yes*100/(question.yes+question.no)) * 100) / 100+"%";
//             }
//             res.render("vote",{
//                 question,
//                 left,
//                 right,
//                 totalVote:question.yes+question.no
//             })
//         })
// })
router.get("/:questionId",function(req,res){
    let question;
    QuestionModel.find({_id:req.params.questionId})
        .then(function(doc){
            question=doc[0];
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
})


// router.post("/add",(req,res)=>{
//     let newQs={content:req.body.questionContent}
//     QuestionModel.create(newQs,function(err,questionCreated){//questionCreated: la cai vua duoc tao ra newQs
//         if(err) console.log(err)
//         else res.redirect("/question/"+questionCreated._id)
//     })


//     //xu ly loi
//     // QuestionModel.create(newQs,function(err,questionCreated){//questionCreated: la cai vua duoc tao ra newQs
//     //     if(err) res.status(500).send({success:0,errMsg:err})
//     //     else res.status(201).send({success:1,questionId:questionCreated._id})
//     // })
    
// })

module.exports=router;