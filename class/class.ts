class Person{
    name:string;//public 
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getname(){
        console.log(this.name)
    }
}
let user = new Person('veeru',2)
console.log(user)

export{}

// class Person{
//     private name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     getname(){
//         console.log('hi',this.name)
//     }
// }
// let user = new Person('veerulll')
// console.log(user.getname())

// Noraml get adn set
// class Person {
//   private age: number = 20;

//   getAge() {
//     return this.age;
//   }

//   setAge(value: number) {
//     this.age = value;
//   }
// }

// const p = new Person();

// console.log(p.getAge()); // function call
// p.setAge(30);            // function call

// class Person {
//   private _age: number = 20;

//   get age() {
//     return this._age;
//   }

//   set age(value: number) {
//     this._age = value;
//   }
// }

// const p = new Person();

// console.log(p.age); // looks like a property
// p.age = 30;         // looks like changing property

//protected
// class Student extends Person {
//   showAge() {
//     console.log(this.age); // ✔ allowed (protected)
//   }
// }

