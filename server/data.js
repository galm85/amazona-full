 const bcrypt = require('bcrypt');
 
 const data = {
     users:[
         {
             name:'Gal',
             email:'admin@email.com',
             password: bcrypt.hashSync('123456',8),
             isAdmin:true,
         },
         {
            name:'adele',
            email:'adele@email.com',
            password: bcrypt.hashSync('123456',8),
            isAdmin:false,
        },

     ],
    products:[
        {
            name:"Nike slime shirt",
            category:"shirts",
            image:'/images/p1.jpeg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReview:10,
            description:'high quality product'
        },
        {
            name:"Adidas slime shirt",
            category:"shirts",
            image:'/images/p2.jpeg',
            price:100,
            countInStock:20,
            brand:'Adidas',
            rating:4.5,
            numReview:10,
            description:'high quality product'
        },
        {
            name:"Lacoste slime shirt",
            category:"shirts",
            image:'/images/p3.jpeg',
            price:70,
            countInStock:0,
            brand:'Lacoste',
            rating:4.5,
            numReview:10,
            description:'high quality product'
        },
        {
            name:"Nike slime shirt2",
            category:"shirts",
            image:'/images/p4.jpeg',
            price:187,
            countInStock:15,
            brand:'Nike',
            rating:5,
            numReview:10,
            description:'high quality product'
        },
        {
            name:"Puma slime shirt2",
            category:"shirts",
            image:'/images/p5.jpeg',
            price:55,
            countInStock:10,
            brand:'Puma',
            rating:2,
            numReview:10,
            description:'high quality product'
        },
        {
            name:"Adidas slime pants3",
            category:"shirts",
            image:'/images/p6.jpeg',
            price:120,
            countInStock:7,
            brand:'Adidas',
            rating:4.5,
            numReview:23,
            description:'high quality product'
        },
    ]
}

exports.data=data;