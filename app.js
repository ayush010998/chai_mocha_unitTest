const express=require('express');

const app=express();

app.use('/user',require('./routes/users'))


app.listen(3000,()=>{
    console.log('server started')
})