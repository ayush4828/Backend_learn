const mongoose = require('mongoose');


main().then(()=>{
    console.log("success");
})
.catch(err=>console.log(err));

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    author : {
        type : String,
        maxLength : 10
    },
    price:{
        type:Number,
        // min:1,
        //we can define our own custom error by this 
        min: [1, "Price is too low for Amazon selling"],
        default:1
    },
    categories : {
        type : String,
        enum : ["friction" , "non-friction"]
    }

})

const Book = mongoose.model("Book" , bookSchema)

// const book1 = new Book({title:"journey" , author:"ayush" , price:2500});
// book1.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});

// const book2 = new Book({title:"hoaaa" , author:"ayushpatel" , price:"545865"});
// book2.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});


// const book3 = new Book({title:"wolaaaa" , author:"ayush"});
// book3.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});


// const book4 = new Book({title:"Wars" , author:"vinit" , price:10 , categories : "friction"});
// book4.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});

// this  throws the erro
// const book5 = new Book({title:"Wars2" , author:"pratham" , price:10 , categories : "comic"});
// book5.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)});



// // [options. runValidators ] «Boolean» if true, runs update validators on this command.update the validators validate the update operation against the model's schema

Book.findByIdAndUpdate("696289e3d8c6fe004d7b20ba" , {price : -1000} , {runValidators:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err.errors.price.properties.message)});