

const dotenv = require("dotenv");

const mongoose= require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env'});
require('./db/conn');

app.use(express.json());

app.use(require('./routers/auth'));
const PORT = 5000;

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{res.sendFile(path.resolve(__dirname,"client","build","index.html"))});

}
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})