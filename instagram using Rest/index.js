const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const multer = require('multer');
const { v4: uuidv4 } = require("uuid");
const methodOverride = require('method-override');

let posts = [{id:uuidv4(),
              username:"ayush", 
              Bio:"Curious mind, clean code, and a habit of turning ideas into real-world solutions.",
              images:["https://picsum.photos/id/1011/300/300",
  "https://picsum.photos/id/1012/300/300",
  "https://picsum.photos/id/1015/300/300"] 
              },
             {id:uuidv4(),
              username:"vinit" ,
              Bio:"Building things on the web, learning every day, and chasing progress over perfection.",
           images:[ "https://picsum.photos/id/1016/300/300",
  "https://picsum.photos/id/1020/300/300",
  "https://picsum.photos/id/1024/300/300"] },
              {id:uuidv4(),
              username:"pratham" ,
              Bio:"Tech enthusiast by day, problem-solver by night — always exploring what’s next.",
           images:[ "https://picsum.photos/id/1025/300/300",
  "https://picsum.photos/id/1035/300/300",
  "https://picsum.photos/id/1039/300/300"] },
            ];

//i will learn later from this 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

app.post("/posts/:id/image", upload.single("image"), (req, res) => {
  const { id } = req.params;

  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).send("Post not found");

  const imgSrc = `/uploads/${req.file.filename}`;
  post.images.push(imgSrc);

  res.redirect(`/posts/${id}`);
});

//to this

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))



app.get("/posts" , (req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new" , (req,res)=>{
    res.render("new.ejs");
})
app.post("/posts", (req,res)=>{
    let {username,Bio} = req.body;
    let id = uuidv4();
    posts.push({id , username , Bio , images:[]});
    res.redirect("/posts");
})

app.get("/posts/:id" , (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("show.ejs" , {post});
})

app.delete("/posts/:id",(req,res)=>{
     let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs" , {post})
})
app.patch("/posts/:id" , (req,res)=>{
  let {id} = req.params;
  let newContent = req.body.Bio;
  let post = posts.find((p)=> id===p.id);
  post.Bio = newContent;
  res.redirect("/posts");


})
app.listen(port , ()=>{
    console.log(`you are listening on port : ${port}`);
})