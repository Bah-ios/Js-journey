const mark = [28,44,25,50,35,49,39];

mark.splice(3,2);
mark.splice(3,0, 55,56)
// console.log(mark);

const mark2 = [38,44,35,40,35,39,29];

const newMark2 = mark2.slice(3);
console.log(newMark2);

const together = mark.concat(newMark2, 11);
console.log(together);

together.forEach(marks => {
    //console.log(marks)
    const isthere = together.includes(marks);
    const index = together.indexOf(marks)
    console.log(`availablity of ${marks} is ${isthere} and is at ${index}` );
})
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
const employee = "ABEBE"
const isHIred = users.find(user => user.name === employee);


    if (isHIred !== undefined){
        console.log(`${employee} is hired`)
    }
    else 
        console.log(`${employee } is not hired`)
function evenOdd (even){
    if (even % 2 ===0 )
        return "Even";
    else 
        return "Odd";
}
const notPass = together.filter( mark => mark>=40)
// console.log(notPass)

const even = together.map(even => evenOdd(even))
const inOrder = together.sort()
console.log(inOrder);
const reversed = inOrder.reverse()
console.log(reversed);

const sum = reversed.reduce((acc,cur) => acc+=cur)
console.log(sum);

