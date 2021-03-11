const router = require('express').Router();
const {Order} = require('../models/orderModel');
const {isAuth} = require('../utils/utils');


router.post('/',isAuth,async(req,res)=>{
    if(req.body.orderItems.length === 0){
        return res.status(400).send({message:'Cart is empty'});
    }

    const order = new Order({
        orderItems:req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id,
    })
    const createdOrder = await order.save();
    res.status(201).send({message:'New Order Created',order:createdOrder});

})


module.exports = router;