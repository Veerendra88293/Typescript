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



//partial used for make it all properties optional
type User={
    name:string;
    age:number
}
let person: Partial<User> = {
    name:'verendra',
    
}
console.log(person.name)

function update(id: number, data: Partial<User>) {
  console.log(data);
}
update(1, { age: 22 });

//Required<T> make all optional to required 
interface User2{
    name:'veeru',
    age?:number
}
let person2: Required<User2> = {
    name:'veeru',
    age:2//required compulsory
}
console.log(person.name)

//readonly
interface User4 { name: string; age: number; }

const user: Readonly<User4> = {
  name: "veeru",
  age: 22
};
// user.age = 23 ❌

//record make key value pair like obj
const marks: Record<string, number> = {
  math: 90,
  eng: 85
};

//pick specific properties
interface User7 { id: number; name: string; password: string; }
const user9: Pick<User7,'id'> = {
  id: 22
  
};
//omit specific properties
type fruits={
    name:string;
    id:number;
}

const mango:Omit<fruits,'id'> ={
name:'mango'
}

export{}
