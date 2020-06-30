const express=require('express');
const path=require('path');
const rootDir=require('../util/path');

const router=express.Router();
const adminData=require('./admin');


router.get('/',(req,res,next)=>{//we have to use 'get' to avoid app.js crashing during the sequel(ordering rotues)
    // console.log('shop.js',adminData.products);
    const products=adminData.products
    res.render('shop',{prods:products,docTitle:'Shop'}) //in the show template we can access to products
    //we can refer anything in the curly bracket now anything inside template "docTitle" will get "Shop"
    // res.sendFile(path.join(rootDir,'views','shop.html'))//we have replaced __dirname,'../' with rootDir
  
});


module.exports=router;