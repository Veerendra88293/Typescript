var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getname = function () {
        console.log(this.name);
    };
    return Person;
}());
var user = new Person('veeru', 2);
console.log(user);
