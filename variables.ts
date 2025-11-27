let greetings: string='hello';
console.log(greetings)


let user = 333;//inference it get auto type
console.log(user)

//any type
let hero;
//or
let heroine: any;
hero='batman';
heroine='wonder'
console.log(hero,heroine)
hero=1
console.log(hero)
//union for two type
let value3:string|number = 'hi'
value3=2
console.log(value3)

function sum(value:number){
    return value*value
}
console.log(sum(1))

function strLower(str:string){
    return str.toLocaleLowerCase()
}
strLower('veeru')

//any type
function strupp(str){
    return str.toLocaleLowerCase()
}
strupp('veeru')
//multiple arguments
function login(name:string,password:number,islogin:boolean,email:string){
    return 0
}
login('veeru',1234,true,'@Wemail.com')

//arrow fn

let signin=(name:string,islogin:boolean)=>{
console.log(name,islogin)
}
signin('veeru',false)


//add type for return

function sum1(value:number):number{
    return value*value
}
console.log(sum1(1))

//void with or without para
function print():void{
    console.log('hi')
}
print()

//array auto types of all
let arr = [1, "hello"];

arr.map(item => {
  console.log(item);  // item: string | number
});

//never
function error(msg: string): never {
  throw new Error(msg);
}
//takes whole obj
function create(user: { name: string; age: number }) {
  console.log(user.name, user.age);
}

let obj = { name: "Veeru", age: 25 };

create(obj);  // ✔ pass whole object

//enum
enum Role{
  host="host",
  user='user'
}
console.log(typeof Role.host)
console.log(Role.host)

function checkUser(host:Role):boolean{
  return host==='host'
}
console.log(checkUser(Role.user))

let id:number=12  //Type Assertion
id = 'hello' as any

const input = document.getElementById("myInput") as HTMLInputElement;//Type Assertion



export {} //to remove a error so 