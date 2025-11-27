let add:()=>void;//or with argumnets //it is a type only not fn
add=()=>{
console.log('hi i am func of type above add')
}
add()

let multipley: (a: number, b: number) => number;
multipley = (a, b) => {
  return a*b;
};
multipley(1, 2);
// or easy syntac fo fn not type
multipley = (x, y) => x * y;

// using has callback 
function calculate(fn: (a: number, b: number) => number) {
  console.log(fn(10, 20));
}
calculate(multipley)

// typealias
type addType=(a:number,b:number)=>number;
let add2 :addType;
add2=(a,b)=>a+b
function calculate2(fn: addType) {
  console.log(fn(10, 20));
}
calculate(add2)

interface AddFn {
  (a: number, b: number): number;
}
let add4: AddFn
add4= (x, y) => x + y;



type Division=(a:number)=>number;
let dividefunc:Division = function(a){
     return a
}
dividefunc(1)
let msg = 'JI'
let str: string = `hi ${msg}`.toLowerCase();
console.log(str)

type A = { name: string };
type B = { age: number };
type Person = A | B;

let p: Person = {
  name: "veeru",
  age: 22
};
            
const role = "admin" as const;
console.log(typeof role)

let a: number = 1 ;
a = '2' as any;  // now it works (but unsafe)
console.log(typeof a)
let b:any='2';
console.log(typeof b)

function genric<T>(a:T):T{
return a
}
console.log(genric(1))
