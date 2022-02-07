app.get('/user/:id', (req, res) =>{
    //res.send("hey");
    let sql = `SELECT * FROM user where id =${req.params.id}`;
    db.query(sql, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json({});
    })
});
app.get('/topics/:id', (req, res) =>{
    //res.send("hey");
    let sqldetail = `SELECT * FROM idea where user_id=${req.params.id}`;
    db.query(sqldetail, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json({});
    })
});
app.get('/details/:id', (req, res) =>{
    //res.send("hey");
    let sqldetail = `SELECT * FROM idea where idea_id =${req.params.id} And user_id=1`;
    db.query(sqldetail, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json({});
    })
});

app.get('/mentors/:id', (req, res) =>{
    //res.send("hey");
    let sqlmentor = `select user.name as uname, user.linkedin as ulid from user,mentor_request WHERE user.id = mentor_request.u_id AND mentor_request.status=1 And mentor_request.i_id=${req.params.id}`;
    
    db.query(sqlmentor, (err, result)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json();
    })
});
app.post('/mentor_request',(req,res) =>{
    const u_id = req.body.u_id;
    const i_id  = req.body.i_id;
    const sql_mr =
    `Insert into mentor_request (u_id, i_id) values (?,?)`;
    db.query(sql_mr,[u_id, i_id],(err, result)=>{
        if (err) console.log(err);
    });
})
app.post('/collab_request',(req,res) =>{
    const u_id = req.body.u_id;
    const i_id  = req.body.i_id;
    const sql_cr =
    `Insert into collab_request (u_id, i_id) values (?,?)`;
    db.query(sql_cr,[u_id, i_id],(err, result)=>{
        if (err) console.log(err);
    });
})