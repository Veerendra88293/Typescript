interface User{
    name:string;
    greet():void
}
let person:User={
    name:'veeru',
    greet() {
        return 0
        
    },
}
console.log(person.greet())

interface User1{
    name:string
}
interface User1{ //we redcalre existing interface to add more types 
    password:string
}
function greet(user:User1):void{
console.log(user)
}
let obj:User1={
    name:'veeru',
    password:'9999'
}
greet(obj)

//inheritance
interface Animal{
    name:string;
}
let forest:Animal={
    name:'bear'
}
interface Tiger extends Animal{
    color:string
}
let Tiger1:Tiger={
    name:'tiger',
    color:'yellow'
}
console.log(Tiger1.name,Tiger1.color)


// for type we use & ansimal and tiger all are type not infterface
// type tiger =Animal & Tiger &{
//     color:string
// }




