const router = require('express').Router();
const {User} = require('../models/userModel');
const {data} = require('../data.js');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/utils');

router.get('/seed',async(req,res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});

})

router.post('/signin',async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){
            return res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user),
            })
        }
    }
    return res.status(401).send({message:"Invalid email or password"})
})


module.exports = router;