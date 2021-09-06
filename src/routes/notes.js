const routes= require('express').Router();
const Note= require('../models/Note');
const {check, validationResult}= require('express-validator');

routes.get('/notes/add', (req, res)=>{
res.render('notes/new-note');
});

routes.post('/notes/new-note',[
check('title', 'Ingresa un nombre papuuuu')
.exists()
.isLength({min:1}),
check('description', 'Ingresa una descripcion mi looccoooo')
.exists()
.isLength({min:3})

], (req, res)=>{
const err= validationResult(req);
if (!err.isEmpty()){
    
     const validaciones= err.array()
     console.log(validaciones)
        res.render('/notes/new-note',{ validaciones })
    } else{
        res.send('Todo ok')
    }
});

routes.get('/notes',(req, res)=>{

    res.send('Notes from database');
});

module.exports= routes;

