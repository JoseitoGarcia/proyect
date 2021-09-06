const express= require('express');
const routes= express.Router();

routes.get('/',(req, res)=>{
res.render('index');
})
routes.get('/About',(req, res)=>{
    res.render('About');
    })
    
    module.exports= routes;
