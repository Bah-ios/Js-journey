let vehcles = ['car','bus','motorcycle'];
console.log(vehcles);

OBJECTS//
let person = {
    name : 'shushu',
    age : 22,
    isstudent : true,
    courses : ['first aid','freshman','science']


};
console.log(person.name);
console.log(person.courses[1]);
person.courses[3] = 'math';
console.log(person.name);
console.log(person);
console.log(typeof person);
person.courses.push('history');
console.log(person)

console.log(person.courses);


ARRATYS

let vehicles = ['car','bus','motorcycle'];
console.log(vehicles);
console.log(typeof vehicles);
vehicles[2] = 1;
console.log(vehicles);
console.log(typeof vehicles);
console.log(typeof vehicles[2]);


FUNCTIONS

```looping exercise```
hour = 13 ;
function looper (){

 if (hour > 6 && hour < 12){
    console.log("Good Morning");
 }
 else if(hour > 12 && hour < 18){
    console.log("good afrernoon");
 }
 else{
    console.log("good evening");
 }

 for (let i =0; i< vehicles.length; i++) 
        console.log(vehicles[i] ); 
    
}
looper();
console.log(hour);


```    ------------   ```


``` Conditionals ```
i=0;
while(i <= 20){
    if (i % 2 !== 0)       
        console.log(i);
    i++;
}

do{
    if (i % 2 === 0)       
        console.log(i);
    i++;
}
while(i >= 20);


const car = {
    model : 'toyota',
    year : 2020 ,
    is_Electric : false,
    colors : ['red','blue','black'],
    start : function(){
        console.log("Car started");
    }
}

for (let key in car){
    console.log(key, car[key]);

}
for (let value of vehicles){
    console.log(value);
}

function compare(num1 , num2 ){
    if (num1 > num2)
        console.log(num1)
    else if (num1 < num2) 
        console.log(num2)
    else
        console.log("both are equal")



    if(num1 >  num2)
        return num1
    else return num2

    return (num1 > num2) ? num1 : num2
}


let max = compare(1, 4);
console.log(max);

``` End of Conditionals       ```
