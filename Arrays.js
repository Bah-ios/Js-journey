// const numbers = [ 2,3,4,5,6];

// console.log(numbers.indexOf(4));
// numbers.push(4,3)
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// console.log(numbers.lastIndexOf(4,2))
// console.log(numbers.lastIndexOf(4,3))
// numbers.includes(6);
// const rooms = [
//     {roomNumber:1, type:"sweet", isbooked:true },
//     {roomNumber:2, type:"presidential", isbooked:false} ,
//     {roomNumber:3, type:"standard", isbooked:false} 

// ]

// rooms.splice(1,0,{name:"abebe",age:22})
// // const room = rooms.find(function(room){
// //     return room.type === "presidential"
// // })
// // console.log(room)

// const roomPosition = rooms.findIndex(function(room){
//     return room.type === "presidential"
// })
// console.log(roomPosition)

// const room = rooms.find (room => room.type === "presidential")
// const room1 = rooms.find(function(room){
//     return room.isbooked === true 
// })

// console.log(room)
// console.log(room1)

// const section1 = ['abebe', "kebede", "beti"]
// const section2 = ["mahlet","beti","mita"]

// const combined = section1.concat(section2)

// console.log(combined)

// const combinedCopy = combined.slice(2, combined.length)
// const combinedString = combined.join(",")

// const combined2 = [...section1, '1',"2", ...section2]

// for (let key of combined2){
//     console.log(key)                            //iterating through array using for of loop
// }


// combined2.forEach(function(student){
//    console.log(student)                       //iterating through array using forEach
// })


// combined2.forEach(person => console.log(person))
// console.log(combined2)                                //Shorter way of forEach using arrow function

// let numbers = [1,2,3,4,5]
// const joined = numbers.join(",")
// console.log(joined)

// let message  = "this is the message from me to you saussage" 
// const splitting = message.split(" ")                //splitting string into an array using split method
// console.log(splitting)

// const joining = splitting.join(" ")
// console.log(joining)                    //joining array elements into a string    


// const cars = [
//     { name: "toyota", year: 1999, color : "red" },
//     { name : "nissan", year : 2023, color : "blue" },
//     { name : "Honda" , year : 2022 , color : "gray" },
//     { name : "bYD" , year : 2025, color : "brown" }
// ]

// cars.sort(function(a,b){
//     const LetterofA = a.name.toUpperCase();
//     const LetterofB = b.name.toUpperCase();               //sorting reference type elements of an array

    
//     if (LetterofA < LetterofB ) return -1;
//     if (LetterofA > LetterofB ) return 1;
//     return 0
// })
// console.log(cars)



// const together = section1.concat(section2);

// const studentname = "alem";

// const finder = together.find((student)=>{
//    return student === studentname;                 //element search in array 
// })
 
// if (finder === studentname ){
//     console.log(true);
// }
// else console.log(false);
// console.log(together.includes(studentname));



// const numbers = [ 1,3,6,2,8,-1,4,5,7,9]
// const checked = numbers.every(function(numberr){
//      return numberr >= 0                                   //testing elements of array with every and some
//     })

// const atLeastOne = numbers.some((number)=> number < 0)

// console.log(atLeastOne);
// console.log(numbers);                                    //array testing with some and sorting method
// const sorted = numbers.sort();
// console.log(sorted);



// const filtered = numbers.filter(function(number){                
//     return number >4;
// })
// console.log(filtered);

// const mapping = filtered.map(function(values){
//    return "<li>" + values + "</li>"                   //array filtering and mapping  and also method chaining
// })                                                              
// mapping.join()
// console.log(mapping)

// const Mapping_on_obj = filtered.map(function(elements){

//     const obj = { value : elements}
//     console.log(obj)

// })


///range generator exercise 

// const array = [];          
// function rangeGenerator(min,max){
//     range = max - min;
    
//     for (let i = 0; i<= range; i++ ){
//         array.push(min)
//         min++;
//     }
//     return array;                            
    
// }
// const printer = rangeGenerator(-1,3)
// console.log(printer);



///custom made inclides() method```

// const array = [2, 4, 5, 7, 8]
// function includess(arra , searchedNumber) {
//     for (let i = 0; i <= arra.length; i++ )
//         if (arra[i] === searchedNumber)
//             return 
//         else return true

// }

// const including = includess(array,9)
// console.log(including)

const numbers = [1, 4, 5, 6, 7, 9, 4,1,2,4]
let exclude = [1,4]
function execpt (array, exclude){
    const excluded = []
    for(let value of array){
        if(exclude.includes(value))
            excluded.push(value);
    
}
    return excluded;
}
const output = execpt(numbers, exclude)

console.log(output)
