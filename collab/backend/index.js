var express = require('express');
const multer=require('multer')
const fs = require("fs")
const bodyparser=require('body-parser')
var app = express();
var cors = require('cors');
const path=require('path')
const dotenv = require('dotenv').config()
var database= require('./models/db')
const fileUpload = require('express-fileupload')
var port =process.env.port || 3001;

// cross-origin sharing
app.use(cors())

// api parsing json
app.use(express.json())

// default option
// app.use(fileUpload())

// to access  data from client
app.use(express.urlencoded({
    extended: true
}))


app.use(express.static("./public"));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

try {
    database.connect();
} catch (error) {
    console.log(error)
}


var storage = multer.diskStorage({
  destination: './public/uploads/',  
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

var upload = multer({storage: storage});

 

app.use(express.static('./public'));
 
app.post('/posts', upload.single('myImg'), async (req, res) => {               
    const name=req.body.name
    const git_repo=req.body.git_repo
    const description=req.body.description        
    const location = `/public/uploads/${req.file.filename}`;

    
    const sql = `INSERT INTO postinput (name,git_repo,description,img) VALUES ('${name}', '${git_repo}', '${description}','${location}')`;
    console.log(sql)
    database.query(sql,(err,result)=>{
        if (err){
            
            res.status(400).send(err)
        }
        else res.json(result)

    });        


});

app.get('/posts',async  (req,res)=>{
    const sql = 'select * from postinput'
    database.query(sql,(err,result)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send(result)
            // console.log(result)
        }
    })
})

app.put('/rejectmentor/:id', (req, res) =>{
    //const mid = req.body.mid;
    let sqlrm = `UPDATE mentor_request SET status = 2 where mr_id= ${req.params.id} `;
    database.query(sqlrm, (err, result)=>{
        if (err) console.log(err); })
});

app.put('/approvecollab/:id', (req, res) =>{
    //const mid = req.body.mid;
    let sqlam = `UPDATE collab_request SET status = 1 where c_id= ${req.params.id} `;
    database.query(sqlam, (err, result)=>{
        if (err) console.log(err); })
});

app.get('/gettopic', (req, res) =>{
    
    // let sqlgt = `select idea.name as iname,user.name as uname, idea.idea_id as iid, user.linkedin as lid , mentor_request.mr_id as mid from idea, user , mentor_request where mentor_request.u_id = user.id AND mentor_request.i_id =idea.idea_id and mentor_request.status= 0`
    let sqlgt = `select  mentor_request.mr_id as mid,status from mentor_request where mentor_request.status= 0`
    
    database.query(sqlgt, (err, result)=>{
         if(err){
             res.status(400).send(err);
             return;
         }
         if(result.length>=0){
            // console.log(result)
            res.json(result);
         }
         else res.json();
     })
 });
// Added for checking aditi part
app.get('/user/:id', (req, res) =>{
    //res.send("hey");
    let sql = `SELECT * FROM user where id =${req.params.id}`;
    database.query(sql, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json();
    })
});
app.get('/topics/:id', (req, res) =>{
    //res.send("hey");
    let sqldetail = `SELECT * FROM idea where user_id=${req.params.id}`;
    database.query(sqldetail, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json();
    })
});
app.get('/details/:id', (req, res) =>{
    //res.send("hey");
    let sqldetail = `SELECT * FROM idea where idea_id =${req.params.id} And user_id=1`;
    database.query(sqldetail, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return; 
        }
        if(result.length){ 
            // console.log()
            res.json(result);
        }
        else res.json();
    })
});

app.get('/mentors/:id', (req, res) =>{
    // res.send(req.params.id);
    let sqlmentor = `select user.name as uname, user.linkedin as ulid from user,mentor_request WHERE user.id = mentor_request.u_id AND mentor_request.status=1 And mentor_request.i_id=${req.params.id}`;
    
    database.query(sqlmentor, (err, result)=>{
        if(err){
            res.status(400).send(err);
            // console.log(err)
            return;
        }
        if(result.length){ 
            res.json(result);
            console.log(result,"In result")
        }

        else{
            console.log("In else")
             res.json([]);
        }
    })
});

app.put('/edit/:id', (req, res) =>{
    const name = req.body.name;
    const year = req.body.year;
    const city = req.body.city;
    const phone = req.body.phone;
    const interests = req.body.interests;
    
    const sqlupdate =
    `UPDATE user SET name= ? , year= ? ,city= ? ,phone= ? ,interests= ? Where id = ${req.params.id} `;
    
    database.query(sqlupdate, [name,year,city,phone,interests],(err, result)=>{
        if (err) console.log(err);
    });
   

});

app.get('/user/:id', (req, res) =>{
    //res.send("hey");
    let sql = `SELECT * FROM user where id =${req.params.id}`;
    database.query(sql, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json({});
    })
});

app.post('/mentor_request',(req,res) =>{
    const u_id = req.body.u_id;
    const i_id  = req.body.i_id;
    const sql_mr =
    `Insert into mentor_request (u_id, i_id) values (?,?)`;
    database.query(sql_mr,[u_id, i_id],(err, result)=>{
        if (err) console.log(err);
    });
})
app.post('/collab_request',(req,res) =>{
    const u_id = req.body.u_id;
    const i_id  = req.body.i_id;
    const sql_cr =
    `Insert into collab_request (u_id, i_id) values (?,?)`;
    database.query(sql_cr,[u_id, i_id],(err, result)=>{
        if (err) console.log(err);
    });
})

app.listen(port, ()=> console.log("Listening at port ",port))