let username:{name:string} = {
    name:'veerendra'
}
console.log(username.name)

//multiple value
let sign:{name:string;age:number} = { //empty {}will not work in datatype
    name:'veerendra',
    age:1
}
console.log(sign)

//method in obj
let methodinfun:{name:string;greet(a:string):string} = { //empty {}will not work in datatype
    name:'veerendra',
    greet:function greet(a){
        return a
    }
}
console.log(methodinfun.greet('ok'))
// or
let methodinfun2: { name: string; greet(a: string): void } = {
    name: 'veerendra',
    greet(a) {
        console.log(a); // prints the value
    }
};

methodinfun2.greet('veeru');

//Obj inside array
let userarray:{name:string}[]= [{name:'hi'},{name:'hi'}]
console.log(userarray[0].name);

let multipleobj:{name:string;age?:number}[]=[{name:'veeru',age:1},{name:'veeru'}]
console.log(multipleobj[1].age);

//one more way to addtype of obj
type usertype={name:string}
let username9:usertype = {
    name:'veerendra'
}
console.log(username9.name)


//list
const data :string[]=['mango']
const no :string[]|number[]=[1,2,3]//or [mango,apple]
const both :(string|number)[]=[1,2,'mango','apple']

let pi:3.14=3.14;
console.log(pi)
export{}

//tuples

const tupless:[number,number,string] = [1,2,'veeru']//strit values should follow order number,number,sr and only three values
tupless[0]=10
//but exception  for arr methods can do anything
tupless.push(100)
console.log(tupless)