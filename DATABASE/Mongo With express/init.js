const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res)=>{console.log("connection successful")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/messanger');
}


let chats = [
  { from: "ayush", to: "vinit", msg: "bhai bhai", created_at: new Date() },
  { from: "rohit", to: "ayush", msg: "kya scene hai?", created_at: new Date() },
  { from: "vinit", to: "rohan", msg: "kal milte hai", created_at: new Date() },
  { from: "neha", to: "ayush", msg: "assignment bhej de", created_at: new Date() },
  { from: "amit", to: "vinit", msg: "party kab hai?", created_at: new Date() },
  { from: "ayush", to: "neha", msg: "abhi bhejta hu", created_at: new Date() },
  { from: "rohan", to: "amit", msg: "thanks bhai", created_at: new Date() },
  { from: "vinit", to: "ayush", msg: "project ready hai", created_at: new Date() },
  { from: "neha", to: "rohit", msg: "class kab hai?", created_at: new Date() },
  { from: "amit", to: "ayush", msg: "good luck exam ke liye", created_at: new Date() }
]

Chat.insertMany(chats).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
// Chat.deleteMany({}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});