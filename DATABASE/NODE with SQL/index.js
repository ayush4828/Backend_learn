const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const path = require("path")
const app = express();
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "/views"));
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ayush',
  password: 'Ayush@19102005'
});

let getRandomuser = ()=>{
     return [ faker.string.uuid(),
   faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()]
  };




// let q = "SHOW TABLES"

// let q = "INSERT INTO faked(id , username , email , password) VALUE ? ";
// let user = ["123" , "ayush" , "ayush@gmail.com" , "abc"];
// let users = [["1234" , "ayusha" , "ayush@gmail.coma" , "abca"],["1235" , "ayushb" , "ayush@gmail.comb" , "abcb"]];

// let data = []

//   for(let i = 1 ; i<=1000; i++){
//     data.push(getRandomuser());
//   }


// try{
//   connection.query(q , [data], (err,result)=>{
// if(err) throw err;
//   console.log(result);
//   console.log(result.length);
//   console.log(result[0]);
//   console.log(result[1]);
  
// });
// }
// catch(err) {
//   console.log(err);
// }

// connection.end();


app.get("/" , (req,res)=>{

  let q = "SELECT COUNT(*) FROM faked";
try{
  connection.query(q , (err,result)=>{
if(err) throw err;
  let data = result[0]["COUNT(*)"];
  res.render("home.ejs" , {data});
});
}
catch(err) {
  console.log(err);
}
});


app.get("/users" , (req,res)=>{

  let q = "SELECT * FROM faked";
try{
  connection.query(q , (err,users)=>{
  if(err) throw err;
  res.render("show.ejs" , {users});
});
}
catch(err) {
  console.log(err);
}
});

app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM faked WHERE id = '${id}'`;

  try{
  connection.query(q , (err,result)=>{
  if(err) throw err;
  let user = result[0];
  res.render("edit.ejs" , {user});
});
}
catch(err) {
  console.log(err);
}
})


//update route

app.patch("/users/:id" , (req,res)=>{
  let {id} = req.params;
  let{password:formPassword , username:formUsername} = req.body;
  let q = `SELECT * FROM faked WHERE id = '${id}' `;
  let p = `UPDATE faked SET username = '${formUsername}' WHERE id = '${id}'`;
  try{
     connection.query(q , (err,result)=>{ 
      if(err) throw err;
      let user = result[0];
      if(formPassword != user.password){
        res.send("incorrect password");
      }
      else{
        connection.query(p , (err,result)=>{
        if(err) throw err;
        res.redirect("/users");
      })
      }
     })
  }
  catch(err){
    console.log(err);
  }
})

app.get("/users/new" , (req,res)=>{
  res.render("new.ejs");
})

app.post("/users" , (req,res)=>{
  let id = uuidv4();
  let {username : formUsername , password : formPassword , email : formEmail} = req.body;
  let q =' INSERT INTO faked (id , username , email ,password) VALUES (?,?,?,?)';
  let val = [id,formUsername,formEmail,formPassword];
try{
connection.query(q , val , (err,result)=>{
   if(err) throw err;
   res.redirect("/users");
  })
}
catch(err){
  console.log(err);
}
  
})

app.delete("/users/:id" , (req,res)=>{
  let {id} = req.params;
  let q = `DELETE FROM faked WHERE id = '${id}'`;

  try{
    connection.query(q , (err,result)=>{
      if(err) throw err;
      res.redirect("/users");
    })
  }
  catch(err){
    console.log(err);
  }
})
app.listen("8080" , ()=>{
  console.log("listinig on port 8080");
})