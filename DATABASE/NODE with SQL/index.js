const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ayush',
  password: 'Ayush@19102005'
});


try{
  connection.query("SHOW TABLES" , (err,result)=>{
if(err) throw err;
  console.log(result);
});
}
catch(err) {
  console.log(err);
}

connection.end();
// let getRandomuser = ()=>{
//      return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
  
//   };
// }

// console.log(getRandomuser());