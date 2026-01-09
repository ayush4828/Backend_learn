const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')


main().then(()=>{
    console.log("success");
})
.catch(err=>console.log(err));

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test')

}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number       
});

const User = mongoose.model("User",userSchema);
const Employee = mongoose.model("Employee",userSchema);

//inserting single user data at a time

const user1 = new User({name:"Ayush" , email : "ayush@gmnail.com" , age:20 });
const user2 = new User({name:"vinit" , email : "vinit@gmnail.com" , age:21 });
user1.save();
user2.save();