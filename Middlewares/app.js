const express = require("express");
const app = express();



app.use((req,res)=>{
    let{query} = req.query;
    
    if(query){
        res.send( `on the middleware and query is ${query}`)
    }
    else{
    res.send(`on the middleware`);
}
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