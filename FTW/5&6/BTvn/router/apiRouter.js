const express=require('express');
const router=express.Router();
const QuestionModel=require("../models/questionModel");
const bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:true}));
// router.use(function(req,res,next){
//     console.log("Api router");
//     next();
// })
router.post("/add",(req,res)=>{
    let newQs={content:req.body.questionContent}
    
    //xu ly loi
    QuestionModel.create(newQs,function(err,questionCreated){//questionCreated: la cai vua duoc tao ra newQs
        if(err) res.status(500).send({success:0,errMsg:err})
        else res.status(201).send({success:1,questionId:questionCreated._id})
    })
    
})
router.get("/answer/:questionId/:vote",(req,res)=>{
    QuestionModel.find({_id:req.params.questionId})
        .then(function(doc){
            let voteOp=req.params.vote;
            if(voteOp==="yes"){
                QuestionModel.update({_id:req.params.questionId},{$set: {yes:doc[0].yes+1}},()=>{
                    res.redirect("/question/"+req.params.questionId)
                })
            }
            else{
                QuestionModel.update({_id:req.params.questionId},{$set: {no:doc[0].no+1}},()=>{
                    res.redirect("/question/"+req.params.questionId)
                })
            }
        })
    
})

module.exports=router;