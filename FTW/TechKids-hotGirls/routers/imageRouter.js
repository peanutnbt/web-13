const express=require("express")
const imageRouter=express.Router();

const imageModel=require('../models/imageModel')


//get all
imageRouter.get("/", function (req, res) {
    imageModel.find({}, function (err, images) {
        if (err) res.status(500).send({ success: 0, err });
        else res.status(201).send({ success: 1, images });
    })
});


//create
imageRouter.post("/", function (req, res) {
    let { imageUrl, description, like, view, comment, owner } = req.body;
    imageModel.create({ imageUrl, description, like, view, comment, owner }, function (err, imageCreated) {
        if (err) res.status(500).send({ success: 0, err });
        else res.status(200).send({ success: 1, imageCreated });
    });
});
//put update
imageRouter.put("/:imageId",function(req,res){
    imageModel.findById({_id:req.params.imageId},function(err,image){
        if (req.body.imageUrl) image.imageUrl = req.body.imageUrl;
        if (req.body.view) image.view = req.body.view;
        if (req.body.like) image.like = req.body.like;
        if (req.body.owner) image.owner = req.body.owner;
        if (req.body.description) image.description = req.body.description;
        image.save(function(err){
            if (err) res.status(500).send({ success: 0, err });
            else res.status(200).send({ success: 1 });
        })
    });
})

//Delete
imageRouter.delete("/:imageId",function(req,res){
    imageModel.remove({_id: req.params.imageId},function(err,image){
        if (err) res.status(500).send({ success: 0, err });
        else res.status(200).send({ success: 1 ,image});
    })
});
//get one
imageRouter.get("/:imageId",function(req,res){
    imageModel.findById({_id: req.params.imageId},function(err,image){
        if (err) res.status(500).send({ success: 0, err });
        else res.status(200).send({ success: 1 ,image});
    });
});

module.exports=imageModel;