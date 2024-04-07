const express=require('express');
const router=express.Router();// mini instance
const Product=require('../models/Product');
const {validateProduct,isLoggedIn,isSeller,isauthSeller}=require('../middleware');
router.get('/',isLoggedIn,(req,res)=>{
    res.redirect('/products');
})
router.get('/products',async(req,res)=>{
    let x=await Product.find();
    res.render('products/index',{x});
})
router.post('/cart/:id',isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    let u=req.user;
    u.cart.push(id);
    await u.save ()
    res.redirect('/products');
})
router.post('/products',isLoggedIn,isSeller,validateProduct,async(req,res)=>{
        let {name,img,price,discription}=req.body;
        await Product.create({name,img,price,discription,author:req.user._id});
        res.redirect('/products');
})
router.get('/new',isLoggedIn, (req,res)=>{
    res.render('products/new');
})
router.get('/view/:id',isLoggedIn,async(req,res)=>{
        let {id}=req.params;
    let y=await Product.findById(id).populate('reviews').populate('author');
    res.render('products/view',{y,msg:req.flash('msg')});
})
router.get('/edit/:id',isLoggedIn,async(req,res)=>{
        let{id}=req.params;
    let y=await Product.findById(id);
    res.render('products/edit',{y});
})
//for patch install method-override
router.patch('/view/:id',isLoggedIn,validateProduct,async(req,res)=>{
        let{id}=req.params;
    let{name,img,price,discription}=req.body;
    await Product.findByIdAndUpdate(id  ,{name,img,price,discription});
    res.redirect(`/view/${id}`)
})
router.delete('/products/:id',isLoggedIn,isauthSeller,async(req,res)=>{
        let{id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});
router.get('/cart-view',isLoggedIn,async(req,res)=>{
    let user=await req.user.populate('cart');
    x=user.cart;
    res.render('products/index',{x});
})



module.exports=router;