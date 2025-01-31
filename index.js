const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const mongoose = require('mongoose');
require('dotenv').config()

const cors=require('cors');


//usename
//noorrocky99
//password
//m6vakZbPUD52nkZa

//connnection url
//mongodb+srv://noorrocky99:m6vakZbPUD52nkZa@cluster0.pque7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//middle ware
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','https://book-store-app-lemon.vercel.app'],
    credentials:true,
}))

//routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes=require('./src/orders/order.route');
const userRoutes=require('./src/users/user.route'); 
const adminRoutes=require('./src/stats/admin.stats');

app.use("/api/books",bookRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/auth",userRoutes);
app.use("/api/admin",adminRoutes);


async function main() {
    await mongoose.connect('mongodb+srv://noorrocky99:m6vakZbPUD52nkZa@cluster0.pque7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    app.use('/', (req, res) => {
        res.send('Noor Basha Shaik!')
    })
}

main().then(()=>console.log("MongoDB connected successfully...")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


