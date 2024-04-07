const mongoose = require("mongoose");
const Review=require('./Review');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
    // required:true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discription: {
    type: String,
    trim: true,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  author:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
});
productSchema.post('findOneAndDelete',async(product)=>{
  if(product.reviews.length>0)
  {
    await Review.deleteMany({_id:{$in:product.reviews}})
  }
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
