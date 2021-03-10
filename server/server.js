const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//routes
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(console.log('connect to mongoDB')).catch(error => console.error(error));

app.use(express.json());
app.use(cors()); 
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);





app.get('/',(req,res)=>{
    res.send('Server is ready');
})






const port = process.env.PORT || 5000;
app.listen(port,console.log("Server is running... on port "+port ));