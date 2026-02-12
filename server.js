// let vehcles = ['car','bus','motorcycle'];
// console.log(vehcles);

//OBJECTS//
// let person = {
//     name : 'shushu',
//     age : 22,
//     isstudent : true,
//     courses : ['first aid','freshman','science']


// };
// console.log(person.name);
// console.log(person.courses[1]);
// person.courses[3] = 'math';
// console.log(person.name);
// console.log(person);
// console.log(typeof person);
// person.courses.push('history');
// console.log(person)

// console.log(person.courses);


// ARRATYS

// let vehicles = ['car','bus','motorcycle'];
// console.log(vehicles);
// console.log(typeof vehicles);
// vehicles[2] = 1;
// console.log(vehicles);
// console.log(typeof vehicles);
// console.log(typeof vehicles[2]);


//FUNCTIONS
// hour = 13 ;
// function looper (){

//  if (hour > 6 && hour < 12){
//     console.log("Good Morning");
//  }
//  else if(hour > 12 && hour < 18){
//     console.log("good afrernoon");
//  }
//  else{
//     console.log("good evening");
//  }
//     // for (let i =0; i< vehicles.length; i++) 
//     //     console.log(vehicles[i] ); ;

// }
// looper();
// console.log(hour);


// i=0;
// while(i <= 20){
//     if (i % 2 !== 0)       
//         console.log(i);
//     i++;
// }

// do{
//     if (i % 2 === 0)       
//         console.log(i);
//     i++;
// }
// while(i >= 20);


// const car = {
//     model : 'toyota',
//     year : 2020 ,
//     is_Electric : false,
//     colors : ['red','blue','black'],
//     start : function(){
//         console.log("Car started");
//     }
// }

// for (let key in car){
//     console.log(key, car[key]);

// }
// for (let value of vehicles){
//     console.log(value);
// }

// function compare(num1 , num2 ){
    // if (num1 > num2)
    //     console.log(num1)
    // else if (num1 < num2) 
    //     console.log(num2)
    // else
    //     console.log("both are equal")



    // if(num1 >  num2)
    //     return num1
    // else return num2

//     return (num1 > num2) ? num1 : num2
// }


// let max = compare(1, 4);
// console.log(max);


// function is_landscape (width, height){
//     // if (width > height )
//     //     return  true;
//     // else return false;

// //     return (width > height) ? true : false 
//     return (width >height);

// }

// console.log(is_landscape(40,344))


// function Fizzbuzz(input){

//     if (typeof(input)!== 'number') {
//         console.log("not a number")
//     }
//     else if (input % 3 === 0 && input % 5 === 0 )
//         console.log("FIzz Buzz")
//     else if(input % 3 === 0 )
//         console.log("Fizz")
//     else if(input % 5 === 0 )
//         console.log("Buzz")
//     else 
//         console.log(input)

// }

// Fizzbuzz(150)



// function checkSpeed(speed){ 
//     const speedLimit = 70;
    
    
//     if ( speed < speedLimit + 5){
//         console.log("Ok")
        
//     }
//     else{
//         const point = Math.floor((speed - speedLimit)/5);
//         if (point > 12)
//             console.log('Licence suspended');
//         else 
//             console.log(`point is ${point}`);
//     }
// }

// checkSpeed(131)

// function ListNumbers(){
//     for( let i=0; i <= 10; i++)
//         if (i %2 === 0)
//             console.log(i , "Even")
//         else console.log(i , "odd")
// }
// ListNumbers()


// function sum(limit){
//     let sum = 0;
//     for (let i=0; i <=limit; i++){
        
//         if (i % 3 === 0 || i % 5 === 0)
//             sum +=i;
//     }
//     console.log(sum);
// }
// sum(10);

// const abebe = [ 89, 88, 99, 78, 89, 90]

// function gradeCalculator (Marks){
//     let sum = 0;
    
//     for(let grade of Marks){
//         sum += grade;
//     }
//     let avg = sum / Marks.length;
//     console.log(avg)
// }
// gradeCalculator(abebe)

// function StarGenerator (limit){
//     let pattern = '';
    
//         for(let i=0; i<limit; i++){
//             pattern += '*';
//             console.log(pattern)    
//         }
// }
// StarGenerator(5)


//objects,function(methods) with in objects 
// const circle = {
//     radius : 1,
//     name : 'circle',
//     isvisible : true,
//     location : {
//         x:1,
//         y : 1
//     },
//     draw : function(){
//         console.log('drawn')
//     }

// }


//factory finction////

// function createCicle(radius){
//     return {
//         radius,
//         draw(){
//            console.log('drawn')
//         }
//     };
// }

// const circleDrawer = createCicle(55);
//  console.log(circleDrawer);

// function CreateCircle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('drawn')
//     }
// }

// const newcircle = new CreateCircle(44);
// console.log(newcircle)
// const circle = {
//     radius : 1,
//     name : 'circle',}

// const otherCircle = {};
//#1 for (let key in circle){
//     otherCircle[key] = circle[key];
// }

// const otherCircle = Object.assign({}, circle);

// const otherCircle = {...circle};

// console.log(otherCircle)

// const address = {
//     street : 'ras desta',
//     city : 'addis ababa',
//     subCity : 'nifas silk',
// }

// function showAddress(address){
// for (let key in address){
//     console.log(key, address[key])
// }
// }
// showAddress(address)


function createAddress(street, city, subCity){
    return {
    street,
    city,
    subCity,
    }
}
const addressOfAyne = createAddress('ras desta', 'addis ababa', 'nifas silk');
console.log(addressOfAyne)

function CreateAddress (street, city, subCity){
    this.street = street;
    this.city = city;
    this.subCity = subCity;
}

const AddressOfBelachew = new CreateAddress('ras desta', 'addis ababa', 'nifas silk');
console.log(AddressOfBelachew)