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




// const Employee = mongoose.model("Employee",userSchema);

//inserting single user data at a time

// const user1 = new User({name:"Ayush" , email : "ayush@gmnail.com" , age:20 });
// const user2 = new User({name:"vinit" , email : "vinit@gmnail.com" , age:21 });
// user1.save().then((res)=>{console.log(res)}).catch((err)=>{
//     console.log(err)
// });
// user2.save().then((res)=>{console.log(res)}).catch((err)=>{
//     console.log(err)
// });



//inserting multiple data at a time

// User.insertMany([
// {name:"jainik" , email:"jainik@gmail.com" , age : 20 },
// {name:"divy" , email:"divy@gmail.com" , age : 21},
// {name:"pratham" , email:"pratham@gmail.com" , age : 19}
// ])
// .then(res=>{console.log(res)}).catch((err)=>{console.log(err)});

// // find
// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)})

// // findone

// User.findOne({age : {$gt : 20}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)})

// findbyid

// User.findById("6961539996c7f2c56d140134").then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)})

// // update One

// User.updateOne({name:"jainik"},{age : 95}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});

// //update many
// User.updateMany({age:21},{name : "gandhiji"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});


// //update and find using : User.findOneAndUpdate

// User.findOneAndUpdate({age:19},{name : "alok"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});


// // find and update but this time using option. new:false by default.before when we find there first find and then update but if we do new:true then first update and find
// // [options.new=false] Boolean» if true, return the modified document rather than the original!
User.findOneAndUpdate({age:21},{age : 69},{new:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});


// // find by id  and update but this time using option. new:false by default.before when we find there first find and then update but if we do new:true then first update and find

// User.findByIdAndUpdate("6961523fe6db44b764c1dd58",{age : 69},{new:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});



// Deleteone

User.deleteOne({name : "Ayush"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
