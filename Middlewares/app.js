const express = require("express");
const app = express();



// app.use((req,res,next)=>{
   
//    console.log("this is middleware 1");
//    next();
// //    return next(); // we can also write this for returning next()
// //    console.log("after next()") possible but not prefer
// })


// app.use((req,res,next)=>{
   
//    console.log(`on the middleware 2`);
//    next();

// })

//utility middleware // logger

app.use((req,res,next)=>{
   req.time =new Date(Date.now()).toString();
   console.log(req.method , req.hostname , req.path , req.time);
   next();
})



app.use( "/random" , (req,res,next)=>{
  
   console.log("on the route random");
   next();
})

app.get("/" , (req,res)=>{
    res.send("on root /")
})

app.get("/random" , (req,res)=>{
    res.send("on route random")
})

// app.use((req,res,next)=>{
//    req.time =new Date(Date.now()).toString();
//    console.log(req.method , req.hostname , req.path , req.time);
//    next();
// })  if we write after requested path then this will not print on  the console


//Error 404
app.use((req,res)=>{
    res.status(404).send("error 404 Page Not Found")
})

app.listen(8080 , ()=>{
    console.log("server start success")
})