const express = require('express');
const router = require('express').Router();
const Nerdle = require('../models/nerdle');


// Return the equation and squares
router.get('/', (req,res)=>{
    Nerdle.find().exec((err, nerdle)=>{
        if(err) {
            return res.json({ error: err});
        }
        return res.json({ data: nerdle});
    });
});

// To initialize/create equations and squares

router.post('/createEquation', (req,res)=>{
    const nerdle = Nerdle({
        squares: req.body.squares,
        equation: req.body.equation,
    });
    nerdle.save((err, nerdle) =>{
        if(err) {
            return res.json({ error: err});
        }
        return res.json({ data: nerdle});
    });
});

// Edit the equation
router.put('/:id', (req,res)=>{
    Nerdle.findById(req.params.id)
     .exec((err, nerdle)=>{
        if(err){
            return res.json({ error: err});
        }
        nerdle.squares = req.body.squares ?? nerdle.squares;
        nerdle.equation = req.body.equation ?? nerdle.equation;
        nerdle.save((err, nerdle) =>{
            if(err){
                return res.json({error: err});
            }
            return res.json({data: nerdle});
        })
     });
});

// Return number of squares
router.get('/', (req,res)=>{
    
});

// Edit number of squares
router.put('/changeSquares', (req,res)=>{

});

module.exports = router;