const routes= require('express').Router();
routes.get('/users/singin',(req, res)=>{
    res.render('users/singin');
});

routes.get('/users/SingUp',(req, res)=>{
    res.render('users/singup');
});

module.exports= routes;




