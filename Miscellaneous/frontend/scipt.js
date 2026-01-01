/* this is the factory function implementation


// function personInit(name , age){
//     const person = {
//         name : name,
//         age : age,
//         greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//     };

//     return person;
// }



// const person1 = personInit('John', 30);
// const person2 = personInit('Jane', 25);





/* this is the constructor implementation   */


// function Person(name , age){
//     this.name = name ;
//     this.age = age;
//     console.log(this)
// }

// Person.prototype.talk = function(){

//     console.log(`hello ${this.name}`)

// }


// const person1 = new Person('John', 30);
// const person2 = new Person('Jane', 25);







/* this is the class  implementation   */


class person {
   constructor(name , age){
    this.name = name;
    this.age = age;
   }

    talk(){
console.log(console.log(`hello ${this.name}`))
   }

}

let p1 = new person("ayush" , 19);
let p2 = new person("vinit" , 19);