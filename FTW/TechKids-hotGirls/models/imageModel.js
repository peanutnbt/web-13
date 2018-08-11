const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ImageSchema=new Schema({
    owner:{type:Schema.Types.ObjectId,ref:'User',required:true},  //Populate , ref la ten model luc export
    view:{type:Number,default:0},
    like:{type:Number,default:0},
    description:{type:String},
    comment:[{
        user:{type:Schema.Types.ObjectId,ref:'User',required:true},
        content:{type:String,required:true},
        create_at:{type:Date,default:new Date()}
    }],
    imageUrl:{type:String,required:true},
},{
    timestamps:true
})


module.exports=mongoose.model("Image",ImageSchema)