const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json())  //if data comes in json format


app.listen(port , ()=>{

    console.log(`you are on port : ${port}`)

})

app.get("/request" , (req , res )=>{
    let {user , pass} = req.query;
    res.send(`welcome get request ${user}`);
})
app.post("/request" , (req , res )=>{
     let {user , pass} = req.body;
    res.send(`welcome post request ${user}`);
})