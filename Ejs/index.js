const express = require('express');
const app = express();
const port = 8080;
app.set("view engine", "ejs");
const path = require("path");
app.use(express.static(path.join(__dirname , "public/css")))
app.use(express.static(path.join(__dirname , "public/Js")))
app.set("views" , path.join(__dirname , "/views"))

app.listen(port , ()=>{
console.log(`alll thiings are ready on port ${port}`);
})

app.get("/" , (req , res) =>{
    res.render("home.ejs");
})

app.get("/dice" , (req , res) =>{
    const diceVal = Math.floor(Math.random()*6) + 1 ; 
    // res.render("dice.ejs" , {num : diceVal});    this is also right
    // res.render("dice.ejs" , {diceVal:diceVal});   this is also right

    res.render("dice.ejs" , {diceVal});
})

app.get("/home" , (req , res) =>{
    res.send("hello lola......");
})


app.get("/ig/:username" , (req,res)=>{
    const instaData = require("./data.json")
    console.log(instaData);
    let {username} = req.params;
    let spedata = instaData[username];
    if(spedata){
res.render("insta.ejs" , {data : spedata});
    }
    else{
        res.send("no such fucking page exists")
    }
    
    
})