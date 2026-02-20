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


const cars = [
    { name: "toyota", year: 1999, color : "red" },
    { name : "nissan", year : 2023, color : "blue" },
    { name : "Honda" , year : 2022 , color : "gray" },
    { name : "bYD" , year : 2025, color : "brown" }
]

cars.sort(function(a,b){
    const LetterofA = a.name.toUpperCase();
    const LetterofB = b.name.toUpperCase();

    
    if (LetterofA < LetterofB ) return -1;
    if (LetterofA > LetterofB ) return 1;
    return 0
})
console.log(cars)







// const finder = comb.find(function(student){
//    return student === "beti"
        
// })


// console.log(finder)

