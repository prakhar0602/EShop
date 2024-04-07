const express=require('express');
const router=express.Router();
const review=require('../models/Review');
const Product=require('../models/Product');
const {validateReview}=require('../middleware')
router.post('/view/:id',validateReview,async(req,res)=>{
    let {id}=req.params;
    let {rating,comment}=req.body;
    rating=parseInt(rating);
    let r=new review({rating,comment});
    let p=await Product.findById(id);
    p.reviews.push(r);
    await r.save()
    await p.save()
    req.flash('msg', 'Review added');
    res.redirect(`/view/${id}`);
})
module.exports=router;