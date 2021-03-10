const express = require('express');
const app = express();
const {data} = require('./data.js');
const cors = require('cors');



app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is ready');
})

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x=>x.id === Number(req.params.id));
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'product not found'});
    }
})



const port = process.env.PORT || 5000;
app.listen(port,console.log("Server is running... on port "+port ));