const express=require('express');
const mongoConnection=require('./dataBase');

const Livre=require('./routes/livre');
const Auuthor = require('./routes/author')
const Category = require('./routes/Category')
mongoConnection()
const app =express();
app.use(express.json())


app.use('/' , Livre)
app.use('/' , Auuthor)
app.use('/' , Category)


  
app.listen(3000 , 'localhost',()=>{
    console.log('Application connected sur le port 3000...');
});










