// let x:number  = 10;
// console.log(x);

// function hello(a:number,b:number) : number{
//     return a+b;
// } 
// let ans = hello(3,5);
// console.log(ans)


// function checkValid(age:number):boolean{
//     return age>=18;
// }
// console.log(checkValid(54));




//how to give type to a callback ,when you pass the function as an argument
// function fun1(callback: ()=> void):void{
//     setTimeout(callback,5000);
// }
// fun1(()=>{
//     console.log("hello ji kaise ho");
// });


//step 5 " ts config file "
// target : like i am using internet explorer then my arrow function will not work there so this target would be useful there here we will write ecma version
// / rootDir and outdir in rootdir i will write ts folder name and in outdir will write js folder this thing wiil help in better structuring 
// we will not upload this dist folder in github ,nver commit this

//remove comments : true now comments of ts will not show in js 
 


//************************************ */ step 6 ********************************************************************
// what  are interfaces
// how can you assign types to objects? a user object looks like this 
const user = {
    firstName: "rishabh",
    lastName : "verma",
    email : "risabh@gmail.com",
    age : 20,
}

// function isLegal(user:{
//     firstNmae:  string;
//     lastName :  string;
//     email    :  string;
//     age      :  number;
// }){
//     return user.age > 18;
// }


// function greetUser(user:{
//     firstNmae:  string;
//     lastName :  string;
//     email    :  string;
//     age      :  number;
// }){
//     return user.age > 18;
// }

// console.log(isLegal(user) ? 'user can vote ' : 'user can not vote')
//above the code repetition is going on as we are again and again giving types to user so now we can neglect this by using interface

// interface user {
//     firstName:  string;
//     lastName :  string;
//     email    :  string;
//     age      :  number;
//     gender   ?:  string;  //optional 
// }

// function isLegal(user:user){
//     return user.age > 18;
// }
// console.log(isLegal(user) ? 'user can vote ' : 'user can not vote')

// function greetUser(user:user){
//     console.log(`welcome ${user.firstName}`)
// }

// greetUser(user);



//use interface with react components 


// /step 7 types 
// very similar to interface 
type user1 = {
    firstName:  string;
    lastName :  string;
    email    :  string;
    age      :  number;
    gender   ?:  string;  //optional 
}

// types can not be used to implement class but interface can be used to 
//  union : you want to print the id of a user which can be number or a string 
// type stringornumber = string |  number ;
// function printId(id : stringornumber){
//     console.log(id);
// }
// function greetUser(id : (string | number)){
//     console.log(id);
// }
// greetUser(101);
// greetUser("101")
// printId(101);
// printId("101");


//interface are not giving aboce functionality 


// intersection : what if you want to create a type that has every property of multiple types/interfaces
// type employee = {
//     name : string;
//     startDate : Date;
// };
// type Manager = {
//     name : string;
//     department : string;
// }

// type techLead = employee & Manager;
//             //same as above 
//             // type techLead = {
//             //     name : string;
//             //     startDate : Date;
//             //     department : string;
//             // }
// const teamLead : techLead = {
//     name: "rishabh",
//     department: "hr",
//     startDate : new Date(),
// }


// how interfaces are different from type :  when & then we use type 


//****************************************************** */
//array types -- just use [] next to type 
// you also can do this thing with type numberArr = number [] 


// function findMax(arr: number[]){
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([43,2,34,1,23,12]));


// given a list of users . filter out the users that are greater than 18
interface User {
    name: string;
    age: number;
}

const arr: User[] = [
    { name: "rishabh", age: 42 },
    { name: "gargi", age: 18 },
    { name: "heiie", age: 32 },
    { name: "kalia", age: 11 },
];

const arr1: string[] = arr.filter((user) => user.age > 18).map((data) => data.name);
console.log(arr1);

