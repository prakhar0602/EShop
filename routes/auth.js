const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/User');

router.get('/register',(req,res)=>{
    let x=true;
    res.render('auth/auth',{x});
})
router.post('/register',async(req,res)=>{
    let{username,email,password,role}=req.body;
    let user=new User({email,username,role});
    let newUser = await User.register(user,password);
    req.login(newUser,function(err){
        if(err){
        return next(err);
        }
        res.redirect('/products');
    });
   
})

router.get('/login',(req,res)=>{
    let x=false;
    res.render('auth/auth',{x});
})
router.post('/login',passport.authenticate('local',{failureRedirect:'/login',failureMessage:true}),(req,res)=>{
    // console.log(req.user);
    res.redirect('/products');
})

router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    res.redirect('/login');
})
module.exports=router;