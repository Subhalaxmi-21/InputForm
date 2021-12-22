var express = require('express');
var app = express();
var cors = require('cors');
const dotenv = require('dotenv').config()
var database= require('./models/db')

var port =process.env.port || 3001;

// cross-origin sharing
app.use(cors())

// api parsing json
app.use(express.json())


// to access  data from client
app.use(express.urlencoded({
    extended: true
}))


const mysql = require('mysql');

try {
    database.connect();
} catch (error) {
    console.log(error)
}


app.post('/posts',async (req,res)=>{
    const {name, git_repo, description, img}= req.body;
    const sql = `INSERT INTO postinput (name,git_repo,description,img) VALUES ('${name}', '${git_repo}', '${description}','${img}')`;
    database.query(sql,(err,result)=>{
        if (err){
            console.log(name)
            res.status(400).send(err)
        }
        else res.json(result)
    })

})


app.listen(port, ()=> console.log("Listening at port ",port))