const express = require("express");
const app = express();



app.use((req,res,next)=>{
   
   console.log(`on the middleware 1`);
   next();
//    return next(); // we can also write this for returning next()
//    console.log("after next()") possible but not prefer
})


app.use((req,res,next)=>{
   
   console.log(`on the middleware 2`);
   next();

})
app.get("/" , (req,res)=>{
    res.send("on root /")
})

app.get("/random" , (req,res)=>{
    res.send("on route random")
})

app.listen(8080 , ()=>{
    console.log("server start success")
})