const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views" , path.join(__dirname,"views"))
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({ extended:true }))
main().then((res)=>{console.log("connection successful")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/messanger');
}


app.get("/",(req,res)=>{
    res.send("woking ")
})

// const chat1 = new Chat({from:"ayush" , to:"vinit" , msg:"bhai bhai " , created_at : new Date() });
// chat1.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});

// Chat.deleteMany({from:"ayush"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});

app.get("/chats" , async (req,res)=>{
    let chats  =  await Chat.find();
    // console.log(chat);
    // res.send("success")
    res.render("index.ejs" , {chats});

})

app.get("/chats/new" , (req,res)=>{
    res.render("new.ejs");
})

app.post("/chats" , async(req,res)=>{
    let {from , to , msg} = req.body;
    let newChat = new Chat({
        from:from,msg:msg,to:to,date : new Date()
    })
   await newChat.save();

   res.redirect("/chats")
})


app.listen(8080,()=>{
    console.log("server is listning on 8080")
})