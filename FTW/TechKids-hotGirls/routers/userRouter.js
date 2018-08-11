const express=require("express")
const userRouter=express.Router();

const userModel=require('../models/userModel')
//restfull   CRUD -READ -UPDATE-DELETE
//get all get->/api/users
userRouter.get("/",(req,res)=>{
    userModel.find({},(err,users)=>{
        if(err) res.status(500).send({success:0,err})
        else res.send({success:1,users})
    })
})
//create new   post->/api/users
userRouter.post("/",(req,res)=>{
    const {username,email,password,avatarUrl,name}=req.body;//se lay nhung thanh phan do tuong ung trong body, tuong tu nhu var username=req.body.username
    userModel.create({username,email,password,avatarUrl,name},(err,userCreated)=>{
        if(err) res.status(500).send({success:0,err})
        else res.status(201).send({success:1,userCreated})
    })
})


//delete by id
userRouter.delete("/:userId",function(req,res){
    userModel.remove({_id: req.params.userId},function(err,user){
        if(err) res.status(500).send({success:0,err})
        else res.status(200).send({success:1,user})
    })
});
//update bt id   put
userRouter.put("/:userId",(req,res)=>{
    userModel.findById(req.params.userId, function(err,user){
        if (req.body.name) user.name = req.body.name;
        if (req.body.username) user.username = req.body.username;
        if (req.body.password) user.password = req.body.password;
        if (req.body.avatarUrl) user.avatarUrl = req.body.avatarUrl;
        if (req.body.email) user.email = req.body.email;
        user.save(function(err){
            if(err) res.status(500).send({success:0,err})
            else res.status(200).send({success:1})
        })
    });
})
//get one by id
userRouter.get("/:userId",function(req,res){
    userModel.findById(req.params.userId,function(err,user){
        if (err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, user });  
    });
});
module.exports=userRouter;