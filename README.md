
# Backend Learn — Learning Backend in 30 Days 🚀

Welcome to **backend_learn** — a hands-on repository created to explore **backend development** using **Node.js**, **Express.js**, **databases (SQL & NoSQL)**, **REST APIs**, **EJS**, and other backend concepts.

This repository contains multiple example folders, sample applications, and practice code to help build strong backend fundamentals step by step.

---

## 📁 Project Structure

The repository is organized into topic-based folders:

<pre>
backend_learn/
│
├── DATABASE/                 # Node.js with SQL practice
├── Database_Sql/             # SQL queries & learning
├── Ejs/                      # Express + EJS templating examples
├── Express/                  # Express.js basic routing & apps
├── REST_RESTFUL_APIS/        # REST API examples
├── Miscellaneous/            # Other backend concepts & practice
├── Fruits/                   # Sample mini project
├── figlet/                   # Fun console-based examples
├── instagram using Rest/     # Instagram-style REST API learning
└── README.md                 # Repository documentation
</pre>




---

## 🚀 Features

This repository helps you learn:

- Node.js server fundamentals  
- Express.js backend framework  
- RESTful API development (GET, POST, PUT, DELETE)  
- Working with databases (SQL & NoSQL)  
- Templating with EJS  
- Backend project structure and best practices  

---

## 🛠️ How to Run the Examples

Follow these general steps to run any backend example:

1. **Navigate to a folder**
   ```
   cd <folder-name>
   ```
<br>
Install dependencies:

```
npm install
```
<br>

Start the server:
```
npm start
```
<br>

or

```
node index.js
```
<br>

Test APIs:

Browser
Postman
Insomnia
curl

🧠 Tips
✔ Use nodemon for auto-reloading during development:
```
npm install -g nodemon
nodemon <entry-file>
```
<br>
✔ Modularize routes and controllers for cleaner code.
✔ Use environment variables (.env) for sensitive data like database URLs.

📚 Learning Goals:

This repository is designed to help you:
📌 Understand backend fundamentals
📌 Learn Express routing & middleware
📌 Build RESTful APIs
📌 Connect Node.js with databases
📌 Work with both SQL & NoSQL
📌 Practice real-world backend scenarios


# MongoDB Basics — Learning Notes & Practice

This repository/folder contains my **MongoDB learning journey**, covering the fundamentals of MongoDB using the **Mongo Shell (mongosh)**.  
I learned how MongoDB stores data, performs CRUD operations, and works with documents and collections.

---

## 📚 Topics Covered

### 1️⃣ Mongo Shell
- Introduction to `mongosh`
- Connecting to MongoDB
- Running database commands from CLI

---

### 2️⃣ How MongoDB Stores Data (BSON)
- MongoDB uses **BSON (Binary JSON)**
- Faster and more efficient than plain JSON
- Supports additional data types like `Date`, `ObjectId`, etc.

---

### 3️⃣ Document & Collection
- **Document** → JSON-like object
- **Collection** → Group of documents
- Schema-less structure

Example:
```
{
  name: "Ayush",
  age: 21,
  skills: ["JavaScript", "Node.js"]
}
```

✏️ CRUD Operations


➕ INSERT Operations:

Insert One : 
```
db.users.insertOne({ name: "Ayush", age: 21 })
```

Insert Many:
```
db.users.insertMany([
  { name: "Rahul", age: 22 },
  { name: "Ankit", age: 20 }
])
```

🔍 FIND Operations:
```
db.users.find()
db.users.find({ age: { $gt: 20 } })
db.users.findOne({ name: "Ayush" })
```
<br>
🔎 Query Operators:
$gt → greater than
$lt → less than
$gte, $lte
$in, $ne
$and, $or

Example:
```
db.users.find({ age: { $gte: 21 } })
```

✏️ UPDATE Operations:

Update One:
```
db.users.updateOne(
  { name: "Ayush" },
  { $set: { age: 22 } }
)
```
Update Many:
```
db.users.updateMany(
  { age: { $gt: 20 } },
  { $inc: { age: 1 } }
)
```
🗑️ DELETE Operations:

Delete One:
```
db.users.deleteOne({ name: "Ankit" })
```
Delete Many:
```
db.users.deleteMany({ age: { $lt: 20 } })
```

<br><br><br>

📂 Nesting (Embedded Documents):

MongoDB supports nested objects and arrays.

Example:
db.users.insertOne({
  name: "Ayush",
  address: {
    city: "Ahmedabad",
    state: "Gujarat"
  },
  skills: ["JS", "Node", "MongoDB"]
})

🧠 SQL vs MongoDB (Quick Comparison):
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>SQL</th>
      <th>MongoDB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Database</td>
      <td>Database</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>Collection</td>
    </tr>
    <tr>
      <td>Row</td>
      <td>Document</td>
    </tr>
    <tr>
      <td>Column</td>
      <td>Field</td>
    </tr>
    <tr>
      <td>JOIN</td>
      <td>Embedded Documents</td>
    </tr>
  </tbody>
</table>

<br><br>

🛠️ Tools Used : 
MongoDB Community Server
MongoDB Shell (mongosh)
Windows PowerShell

🎯 Learning Outcome:
By completing these topics, I now understand:
MongoDB fundamentals
CRUD operations
Query operators
Nested documents
How MongoDB differs from SQL databases

<br>

# 📘 MongoDB with Mongoose (Part 2)

This repository contains my learning notes and practice code for **MongoDB using Mongoose**.  
It covers schema design, models, CRUD operations, validations, and update behaviors in Mongoose.

---

## 📌 Topics Covered

### 1️⃣ What is Mongoose?
- Mongoose is an **ODM (Object Data Modeling) library** for MongoDB and Node.js
- Provides:
  - Schema-based structure
  - Data validation
  - Built-in CRUD methods
- Acts as a bridge between **MongoDB** and **Node.js**

---

### 2️⃣ Installation & Setup
Steps to set up Mongoose in a Node.js project:

```
npm init -y
npm install mongoose
```

Basic connection example:
```
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
```

3️⃣ Schema
A Schema defines the structure of documents

Specifies:
Fields
Data types
Validations

Example:

```
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
```

4️⃣ Models
A Model is created using a schema
It represents a collection in MongoDB

```
const User = mongoose.model("User", userSchema);
```

5️⃣ Insert in Mongoose
Insert a single document:
```
const user = new User({
  name: "Ayush",
  age: 21,
  email: "ayush@gmail.com"
});
user.save();
```

6️⃣ Insert Multiple Documents

```
User.insertMany([
  { name: "A", age: 20 },
  { name: "B", age: 22 }
]);
```

7️⃣ Find in Mongoose
Retrieve documents from database:
```
User.find({});
User.find({ age: 21 });
User.findOne({ name: "Ayush" });
User.findById("ObjectId");
```

8️⃣ Update in Mongoose
```
User.updateOne(
  { name: "Ayush" },
  { age: 22 }
);
```

9️⃣ FindAndUpdate
Find and update in one step:
```
User.findOneAndUpdate(
  { name: "Ayush" },
  { age: 23 },
  { new: true }
);
```
🔟 Delete in Mongoose
```
User.deleteOne({ name: "Ayush" });
User.findByIdAndDelete("ObjectId");
```
1️⃣1️⃣ Schema Validations
Used to ensure data correctness
```
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18
  }
});
```
1️⃣2️⃣ Schema Type Options
Common options:
required
default
min / max
enum
unique

Example:
```
email: {
  type: String,
  required: true,
  unique: true
}
```

1️⃣3️⃣ Validation in Update & Errors
Validations do not run by default during update.
Enable validation manually:
```
User.findOneAndUpdate(
  { name: "Ayush" },
  { age: 15 },
  { runValidators: true }
);
```
🚀 Key Learnings
Mongoose simplifies MongoDB operations
Schema ensures structured and validated data
CRUD operations are easy and readable
Validations are essential for data integrity

📚 Useful Commands
```
mongod
```
```
mongo
```
```
node app.js
```


<br>
📌 Author:
Ayush Patel
Learning Backend Development 🚀

📄 License
This project is for learning and educational purposes.



---

If you want, I can also:
- 🔥 Make a **combined README** for your full backend repo  
- 🧠 Add **interview-oriented MongoDB notes**
- 🚀 Create a **MongoDB + Node.js mini project README**

Just tell me 👍
