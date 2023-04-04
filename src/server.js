const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();

//Setting

app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes


//Static files
app.use(express.static(path.join(__dirname,'public')));

//Starting the server 
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});