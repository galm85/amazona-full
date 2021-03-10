const router = require('express').Router();
const {Product} = require('../models/productModel');
const {data} = require('../data.js');



router.get('/seed',async(req,res)=>{
    try{
        const createdProducts = await Product.insertMany(data.products);
        res.send({createdProducts});

    }catch(error){
        res.send(error);
    }
});

router.get('/',async(req,res)=>{
    const products = await Product.find({});
    res.send(products);
})

router.get('/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.send(product);
})


module.exports = router;