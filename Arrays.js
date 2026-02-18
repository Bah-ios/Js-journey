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

const section1 = ['abebe', "kebede", "beti"]
const section2 = ["mahlet","beti","mita"]

// const combined = section1.concat(section2)

// console.log(combined)

const comb = [...section1, ...section2]
console.log(comb)


/////iterating through array
comb.forEach(function(students){
    console.log(students)
})

