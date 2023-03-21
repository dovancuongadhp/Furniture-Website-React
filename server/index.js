// import
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// config
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
dotenv.config();


// use static
app.use(express.static(path.join(__dirname,'../dist')));

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../dist','index.html'));
})







const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`application listen on port ${port}`)
})