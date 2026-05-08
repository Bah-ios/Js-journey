const word = "list-style-image"
function toCamel (word)
{
    const camelized = word.split('-')
    .map((item,index )=> { 
        if (index === 0){
          return item
        }
    else{
        
        return item.charAt(0).toUpperCase() + item.slice(1)
    }
    } ) 
    .join("")
    return camelized;
}
const newWord = toCamel(word);
console.log(newWord)

const mark = [28,44,25,50,35,49,39].sort();
console.log(mark)

// function isInRange (mark,a,b){
//     return mark.filter(item => a <= item && item <= b)
// }
// const ranged =isInRange(mark, 35, 49 );
// console.log(ranged);

function isInRange (mark,a,b){
    return mark.filter((item, index) => 
    {
        if(!(a <= item && item <= b)){
         return mark.splice(index,1)
        }
    

    }
    )
}
isInRange(mark,35,49)
console.log(mark)

const users = [
{ name: "John", surname: "Smith", id: 1 },
{ name: "Pete", surname: "Hunt", id: 2 },
{ name: "Mary", surname: "Key", id: 3 },
]
function nameExtractor (obj){
    const user = { fullName : undefined , id : null  }
    const userMapped = [];
    let NewArray = obj.map(names => {
        user.fullName = names.name.concat(" ", names.surname);
        user.id = names.id;
        }    
        // user.id = names.id;
    
    );
    

   
}
const newarr = nameExtractor(users)

console.log(newarr)