const mongoose=require('mongoose');
const reviewSchema=new mongoose.Schema({
    rating:{
        type:Number,
        required:true
    },
    comment:{
        trim:true,
        type:String
    }
},{timestamps:true});
const Review=mongoose.model('Review',reviewSchema);
module.exports=Review