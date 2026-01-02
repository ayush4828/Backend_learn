const express = require("express");
const app = express();
const path = require("path")
const port = 8080;

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended:true}));

let posts = [
    {
         username:"ayush",
         content : "Full Stack Web developer"
    }
    ,
    
    {
       
        username:"pratham",
        content:   "problem solving  "
    }
    ,
    {
       
        username:"vinit",
        content:"backend expert"

    }


];
app.listen(port , ()=>{
    console.log(`you are on port no : ${port}`);
})
app.get("/posts" , (req,res)=>{
    res.render("index.ejs" , {posts});
})

app.get("/posts/new" , (req,res)=>{
    res.render("new.ejs");
})

app.post("/posts" , (req,res)=>{
    let {username , content} = req.body;
    posts.push({username,content})
    res.redirect("/posts");
})