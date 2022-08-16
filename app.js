const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const { Server } = require('http');
const user = require('./route/user_route');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

let port = 2020;




mongoose.connect('mongodb://localhost:27017/email',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(data=> {
    console.log("Database connected")
}).catch(err=>{
    console.log(err.message)
    process.exit(1)
})

app.use(express.json());
app.use('/api/user/', user);

app.listen(port, () =>{
    console.log("server connected");
})