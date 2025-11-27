// function getElement(array:any[]){
//     return array[0]
// }
// let arrayNO = [1,2,3,4]
// let arrayStr = ['a','b']

// console.log(getElement(arrayNO))
//to avoid using any type  like above

//we use generic
function getElement<Type>(array : Type[]):Type[]{ //if return type is just Type you should return only one number
    return array
}
let arrayNO = [1,2,3,4]
let arrayStr = ['a','b']

console.log(getElement(arrayStr))

function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("hello");

let numbers: Array<number> = [1,2,3];
let names: <string>[]= ["ram", "sam"];
//generic
function name<T>(a:T):T{
return a
}
name(1)//auto
//or name<number>(1)
type Apiobj<T>={
name:string,
status:T
}
let objapi:Apiobj<number> = {
  name:'hi',
  status:1
}
//strict generic only one typr allowed
function name2<T extends number>(a:T):T{
return a
}
name2(2)

interface obj4<T>{
  name:T
}
const per:obj4<string>= {
name:'hi'
}
//with two T and V.....
function Twogenrics<T,V>(a:T,b:V):T{  //or[T,V]
 
return a //or [a,b]
}
Twogenrics(1,2)

interface KeyValuePair<T, V> {
  key: T;
  value: V;
}

const kv1: KeyValuePair<string, number> = { key: "age", value: 30 };
const kv2: KeyValuePair<number, boolean> = { key: 1, value: true };


