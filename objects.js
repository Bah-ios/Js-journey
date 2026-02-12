

``` Exercise on functions,loops and Conditional    ```


///objects,function(methods) with in objects 
const circle1 = {
    radius : 1,
    name : 'circle',
    isvisible : true,
    location : {
        x:1,
        y : 1
    },
    draw : function(){
        console.log('drawn')
    }

}

///////////////


function createCicle(radius){
    return {
        radius,
        draw(){
           console.log('drawn')
        }
    };
}

const circleDrawer = createCicle(55);
 console.log(circleDrawer);

 //////////

function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('drawn')
    }
}

const newcircle = new CreateCircle(44);
console.log(newcircle)

const circle = {
    radius : 1,
    name : 'circle'
}

console.log(otherCircle)


////////////////////

const address = {
    street : 'ras desta',
    city : 'addis ababa',
    subCity : 'nifas silk',
}

function showAddress(address){
    for (let key in address){
        console.log(key, address[key])
    }
}
showAddress(address)

////////////////////

function createAddress(street, city, subCity){
    return {
    street,
    city,
    subCity,
    }
}
const addressOfAyne = createAddress('ras desta', 'addis ababa', 'nifas silk');
console.log(addressOfAyne)

/////////////

function CreateAddress (street, city, subCity){
    this.street = street;
    this.city = city;
    this.subCity = subCity;
}

const AddressOfBelachew = new CreateAddress('ras desta', 'addis ababa', 'nifas silk');
console.log(AddressOfBelachew)


``` Objects and its properies including Constructor functions   ```
