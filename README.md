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

✏️ CRUD Operations


➕ INSERT Operations:

Insert One : 
db.users.insertOne({ name: "Ayush", age: 21 })

Insert Many:
db.users.insertMany([
  { name: "Rahul", age: 22 },
  { name: "Ankit", age: 20 }
])

🔍 FIND Operations:

db.users.find()
db.users.find({ age: { $gt: 20 } })
db.users.findOne({ name: "Ayush" })

🔎 Query Operators:
$gt → greater than
$lt → less than
$gte, $lte
$in, $ne
$and, $or

Example:

db.users.find({ age: { $gte: 21 } })

✏️ UPDATE Operations:

Update One:
db.users.updateOne(
  { name: "Ayush" },
  { $set: { age: 22 } }
)
Update Many:
db.users.updateMany(
  { age: { $gt: 20 } },
  { $inc: { age: 1 } }
)

🗑️ DELETE Operations:

Delete One:
db.users.deleteOne({ name: "Ankit" })

Delete Many:
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

🚀 Next Steps:
MongoDB with Node.js
Mongoose
REST APIs using Express + MongoDB
Schema design & indexing

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
