const {productSchema,reviewSchema}=require('./schema.js');
const Product=require('./models/Product.js');
const validateProduct=(req,res,next)=>{
    const {name,img,price,discription}=req.body;
    const{error}=productSchema.validate({name,img,price,discription});
    if(error)
    {
        console.log("in");
        res.status(500).send(error);
        console.log("out");
    }
    else{
    next();
    }
}
const validateReview=(req,res,next)=>{
    const {rating,comment}=req.body;
    const{error}=reviewSchema.validate({rating,comment});
    if(error)
    {
        res.status(500).send(error);
    }
    else{
    next();
    }
}
let isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        let x=false;
        return(res.render('auth/auth',{x}))
    }
    next();
}
let isSeller=(req,res,next)=>{
    if(!(req.user.role==='seller')){
        res.send('No Permission');
    }
    else{
        next();
    }
}
let isauthSeller=async(req,res,next)=>{
    let {id}=req.params;
    let product=await Product.findById(id);
    if(req.user._id.equals(product.author))
    {
        return next();
    }
    res.send("No Permission")
}
module.exports={validateProduct,validateReview,isauthSeller,isLoggedIn,isSeller};
