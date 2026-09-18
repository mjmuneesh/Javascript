//  Question 1 
//  let age = 20;
// let country = "USA";
// if(age>18 && country == "India"){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// 2. check even or odd 

// for(let i =1; i<11; i++){
//     if(i%2== 0){
//         console.log( `${i} is even `);
//     }else{
//         console.log(`${i} is odd`);
//     }

// }

// 3. check number is positive or negative 

// let ans = prompt("Enter a number to check whether its positive or negative");
// if(ans >0){
//     console.log(`${ans} is positive`);
// }else console.log(`${ans} is negative`);



//4. user age and allow to vote 

// let age = +prompt("enter your age");
// if(age >= 18){
//     console.log("your are eligible ");

// }else{
//     console.log("not eligible");
// }


//5. user age to vote  with error handling 

// let age = prompt("enter your age");
// if(age ==null){
//     console.error("You clicked the canceled button");
// }else{
//     if(age.trim().length === 0){
//         console.error("You did not enter any value");
//     }else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.error("Please eneter a number");
//         }else if(age<0){
//             console.error("Age cannot be negative");
//         }else if(age>18){
//                 console.log("eligible")
//             }else{
//                 console.log("not eligible");
//             }
//         }
//     }


//6. multiplication table of 5 

// for(let i =1;  i<11; i++){
//     console.log(` 5 * ${i} = ${5*i}`);
// }


// 7. lopp through the number from 1 to 15 and count how many are greater than 8 

// let count =0;
// for(let i=1; i<16; i++){
//     if(i>8){
//         count ++;
//     }
// };
//  console.log(count);

//8. ask user for password and print access status 

// let password = 12345;

// let userPass = prompt("Enter your password");
// if(userPass === null){
// console.error("You clicked the cancel button");
// }else {
//     if(userPass.trim().length === 0){
//         console.error("enter something")
//     }else {
//         userPass = Number(userPass);
//         if(isNaN(userPass)){
//             console.error("Please enter a valid number");
//         }else{
//             if(userPass === password){
//                 alert("Access Granted");
//             }else{
//                 alert("Access Denied");
//             }
//         }
//     }
// }


// 9. allow only 3 attempts to enter correct password , if user gets it right allow access, if not "account locked" 

// let attempts = 0;
// let pass ="Muneesh";
// let access =false;

// let userPass = prompt("Enter your password");
// attempts++;

// if(userPass === pass){
//     access = true;
// }

// while(userPass !== pass ){
//   if(attempts ===3){
//     console.error("acess denied");
//     break;
//   }
//   userPass = prompt("Enter your password");
//   attempts++;
//   if(userPass === pass){
//     access = true;
//   }
// }

// if(access === true){
//   console.log("aceess granted")
// };

// 10. ask user for words  until they said stop count how many times they said yes

// let count = 0;

// let userAns = prompt("give any random words");

// while(userAns !== "stop"){
// if(userAns === "yes"){
//     count++;
// }
//   userAns = prompt("give any random words");

// }
// console.log(`You said yes ${count} times`);

// 11. print numbers divisible by 7 from 1 to 50 using mudole and loop


// let i=1;
// while(i<51){
//   if(i%7 === 0){
//     console.log(i);
//   };
//   i++;
// }

// 12. sum of all ofdd numbers from 1 to 30 and print the result.

// let sum =0 ;

// for(let i=1; i<31;i++){
//   if(i%2 !==0){
//     sum += i;
//   }
// }
// console.log(sum)

// 13. keep asking number until user enters a even number

// let num = prompt("Enter a number");
// num = Number(num);

// while(num%2 !==0){
//   num = prompt("Enter a number");
//   num = Number(num);
// }
// console.log("You entered an even number");

// 14. ask for two user input and print all the number from start to end 

// let start = prompt("Enter starting number");
// start = Number(start);
// let end = prompt("Enter ending number");
// end = Number(end);

// if(start> end){
//   console.error("Starting number should be less than ending number");
// }
// for(let i = start; i<=end; i++){
//   console.log(i);
// }

// 15. print first 3 odd numbers from 1 to 20 . 

// let counter =0;

// for(let i=1; i<21;i++){
//   if(counter ===3){
//     break;
//   }
//   if(i%2 !== 0 ){
//     counter++;
//     console.log(i);
//   }
// }

// 16. ask user 5 numbers . count how many are positive. 

// let numasked = 0;
// let counter =0;


// while (numasked <5){
//   let num = prompt("Enter a number"); 
//   num = Number(num);
//   numasked++;
//   if(num >=0 ){
//     counter++;
// }
// }
// console.log(counter)


// Classes, Object , Call, Bind, Apply  questions 

// Q1. Create a car class with the following: brand and price and a drive method that prints the car brand and price 

// class Car {
//    constructor(brand, price) {
//       this.brand = brand;
//       this.price = price;
//    }
//    drive() {
//       console.log(this.brand, this.price)
//    }

// };

// let car1 = new Car("Ford", 300)
// car1.drive();

// Q2. Create two different person objects from the same class and verify that their data is different 

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age
//    }
// }

// let user1 = new Person("Muneesh", 27);
// let user2 = new Person("Ashima", 25);
// console.log(user1);
// console.log(user2);

// Q3. create a student class whose constructor accepts name and roll no and add a method introduce that print both values 

// class Student {
//     constructor(name, rollNo) {
//         this.name = name;
//         this.rollNo = rollNo;
//     }
//     introduce() {
//         return this.name + ' ' + this.rollNo;
//     }
// }

// let student1 = new Student("Muneesh", 12);
// console.log(student1.introduce());

// Q4.create a person constructor function without using class syntax and add a login method 

// function Person() {
//    this.name = "muneesh",
//       this.age = 27;
// }
// Person.prototype.login = function () {
//    console.log("logged in")
// }

// let user1 = new Person();

// user1.login();

// Q5.create a function that prints this.name using Call

// function Abcd() {
//     console.log(this.name)
// }

// let obj = {
//     name: "muneesh"
// };

// Abcd.call(obj);  without call this refers to the window when inside a function but call refers it to the object which changes the value of this . 

// Using Bind 


// let obj = {
//    name: "muneesh"
// };
// function abcd(a, b, c) {
//    console.log(this.name, a, b, c)
// }

// let newfnc = abcd.bind(obj, 1, 2, 3)
// newfnc();

// Using Apply 

// let obj = {
//    name: "muneesh"
// };
// function abcd(a, b, c) {
//    console.log(this.name, a, b, c)
// }

// abcd.apply(obj, [1, 2, 3])

// GETTER AND SETTER

// class Car {
//    constructor(brand) {
//       this.brand = brand
//    }
//    get brand() {
//       return this._brand
//    };
//    set brand(val) {
//       if (val.length <= 2) {
//          console.log("Brand name too short");
//          return;
//       }
//       this._brand = val
//    }
// }
// let car1 = new Car("ford");
// console.log(car1.brand)
// car1.brand = "Vo"
// console.log(car1.brand)

// CALLBACK FUNCTION

// function getUserDetails(url, callback) {
//     // logic for details 
//     callback("Username: Muneesh , Age: 27 , UserID : 22");
// }

// getUserDetails('url', function (details) {
//     console.log(details);
// })

// Q1. "Suppose you need to fetch a user from a database, and after getting the user, fetch all posts belonging to that user. How would you do it using callbacks?" 

// function getUser(username, callback) {
//    console.log("getting user name")
//    setTimeout(function () {
//       callback({ id: "1", username: username });
//    }, 1000)

// };

// function getUserPosts(id, cb) {
//    console.log("getting user posts")
//    setTimeout(function () {
//       cb(["post1", "post2", "post3"]);
//    }, 2000)
// }

// getUser('Muneesh', function (details) {
//    getUserPosts(details.id, function (val) {
//       console.log(details.username, val)
//    });
// });

// Q2.  Suppose you have three asynchronous APIs:

// loginUser()
// fetchPermission()
// loadDashboard()

// Each API depends on the result of the previous API.

// How would you execute them in sequence using nested callbacks?

// OR 

// You are building an authentication system.

// When a user logs in:

// First fetch the user details.
// After the user details are received, fetch the user's permissions.
// After permissions are received, load the dashboard.
// Finally display a success message saying the dashboard has loaded.

// Implement this flow using callbacks only (do not use Promises or async/await).

// Ans : function loginUser(user, cb1) {
//     console.log("getting user");
//     setTimeout(() => {
//         cb1({ userid: 1, name: "muneesh", age: 12 })
//     }, 1000)
// };

// function fetchPermission(userID, cb2) {
//     console.log("Fetching Permission");
//     setTimeout(() => {
//         cb2(["Edit = No", "View =yes", "Read = yes"]);
//     }, 1000)
// };

// function loadDashboard(permissions, cb3) {
//     console.log("Loading Dashboard");
//     setTimeout(() => {
//         cb3("Dashboard Loaded");
//     }, 1000)
// };

// loginUser("Muneesh", function (userObj) {
//     fetchPermission(userObj.userid, function (permissionsArray) {
//         loadDashboard(permissionsArray, function (e) {
//             console.log(e)
//         })
//     })
// });

// Promise : it is an object that represent the future result of the asynchronous operation

// example 1 :
//  let prm1 = new Promise((resolve, reject) => {
//    reject();
// })
// prm1.then(() => {
//    console.log("Matter reslove hogya bhau.")
// })
//    .catch(() => {
//       console.log("Bhau matter mein error aagya.")
//    })

// example 2 :

// always remember that fatch will have two .then, first is to convert the data into readeable json and then we have another .then to read the data 

// fetch(`https://randomuser.me/api/`)
//    .then((raw) => {
//       return raw.json();
//    })
//    .then((data) => {
//       console.log(data.results[0].name.first)
//    })

// Async Await

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10);
//             if (num > 5) {
//                 resolve(num);
//             } else {
//                 reject("Number is less than 5");
//             }
//         }, 1000)
//     });
// }


// async function abcd() {
//     try {
//         let ans = await getNum();
//         console.log(ans);
//     } catch (err) {
//         console.log(err);
//     }
// }

// abcd();


