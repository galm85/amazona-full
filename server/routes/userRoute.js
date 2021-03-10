const router = require('express').Router();
const {User} = require('../models/userModel');
const {data} = require('../data.js');


router.get('/seed',async(req,res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});

})


module.exports = router;