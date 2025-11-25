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