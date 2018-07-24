const mongoose=require("mongoose");
const Schema =mongoose.Schema;

let QuestionSchema=new Schema({
    content: {type:String,required:true},
    yes:{type:Number,default:0},
    no:{type:Number,default:0},

},{
    timestamps:true  // se tao ra 2 truong cap nhat date va thoi gian create
})

module.exports =mongoose.model("Question",QuestionSchema); //thao tac them sua xoa chi dung cho model, not Schema