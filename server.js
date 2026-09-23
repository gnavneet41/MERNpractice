const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {router : userRouter} = require('./Routes/userRoute.js')

app.get('/', (req, res) => {
    res.send('Home');
});

async function config() {
    try{
        await mongoose.connect('mongodb://localhost:27017/deesak');
        console.log('MongoDB connected');
    }
    catch(err){
        console.log(err);
    }
}

config();
app.use(express.json());

app.use('/auth',userRouter);


app.listen(3000, () => {
  console.log('http://localhost:3000');
});