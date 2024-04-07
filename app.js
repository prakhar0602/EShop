const express=require('express');
const app=express();
const path=require("path");
const mongoose=require('mongoose');
const seed=require("./seed");
const productroutes=require("./routes/product");
const reviewroutes=require("./routes/review");
const ejsmate=require('ejs-mate');
const method_override=require('method-override');
const flash=require('connect-flash')
const session=require("express-session")
const auth=require('./routes/auth');
const passport=require('passport')
const passportlocal=require('passport-local')
const User=require('./models/User')
app.listen(8080,()=>{
    console.log("Site is started");
})
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsmate);
app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));
app.use(express.static(path.join(__dirname,'public')));
app.use(flash())
const configSession={
    secret:'keyboard-cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+60*60*1000 ,
        maxAge:60*60*1000
    }
};
app.use(session(configSession));
// db connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce').then(()=>{
    console.log("Data loaded 100%");
}).catch((err)=>{
    console.log("Data Load Failed");
});
// seed();



//Routing


app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportlocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    next();
})
app.use(productroutes);
app.use(reviewroutes);
app.use(auth);