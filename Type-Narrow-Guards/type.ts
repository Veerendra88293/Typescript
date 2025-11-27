//type narrow and Type Guards
function checktype(a:number|string){ //identify argumnets is str or number when using union
    if(typeof a==='string'){
        console.log('its a str')
        return a.length
    }
    console.log('its a num')
    return a
}
checktype(1)
//truthyness
function log(msg: string | null) {
  if (msg) {
    console.log('str comes ')
    return msg.toUpperCase();  // msg is string
  }
}
console.log(log(''))
//equall
function login(user: string){
  if (user==='admin') {
    console.log('welcome admin')
      // msg is string
  }
  else{
    console.log('welcome normal user')
  }

}
let a = 'admin'
let b = 'Normaluser'
console.log(login(b))

//in

type objtype1={
    username:string
}
type obj2={
    hostname:string
}

function  getobj(user:obj2|objtype1|{king:string}){
    if('hostname' in user) console.log(user.hostname)
 
    else console.log('user is there')
}
getobj({hostname:'ve'})

//array
function show(val: string | string[]) {
  if (Array.isArray(val)) {
    console.log('it is array')
    console.log(val.join(", "));
  } else {
    console.log('it is not array')
    console.log(val.toUpperCase());
  }
}
show(['mango','apple'])



function isString(val: unknown):val is string{
  return typeof val === "string";
}
console.log(isString(1))
function test(input: unknown) {
  if (isString(input)) {
    input.toUpperCase(); // now TypeScript knows it's a string
  }
}

type Bird = {
    name:'peakock',//can give sting also
    fly():void
}
type Fish = {
    name:'Catfish',//can give sting also
    swim():void
}
function getFish(pet:Fish|Bird){
        return pet
}

const pet1 = getFish({name:'Catfish',swim() {
},})
console.log((pet1 as Fish).name)//un safe it will make bird also fish then you call method it fails
//use type gaurd to solve (in) to see in obj 

// if ("swim" in pet1) {
//   pet1.swim();  // now safe
// }
//as
let value: unknown = "hello"; 
let str = value as string; 
console.log(str.toUpperCase()); 
