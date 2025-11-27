//type narrow and Type Guards
function checktype(a) {
    if (typeof a === 'string') {
        console.log('its a str');
        return a.length;
    }
    console.log('its a num');
    return a;
}
checktype(1);
//truthyness
function log(msg) {
    if (msg) {
        console.log('str comes ');
        return msg.toUpperCase(); // msg is string
    }
}
console.log(log(''));
//equall
function login(user) {
    if (user === 'admin') {
        console.log('welcome admin');
        // msg is string
    }
    else {
        console.log('welcome normal user');
    }
}
var a = 'admin';
var b = 'Normaluser';
console.log(login(b));
function getobj(user) {
    if ('hostname' in user)
        console.log(user.hostname);
    else
        console.log('user is there');
}
getobj({ hostname: 've' });
//array
function show(val) {
    if (Array.isArray(val)) {
        console.log('it is array');
        console.log(val.join(", "));
    }
    else {
        console.log('it is not array');
        console.log(val.toUpperCase());
    }
}
show(['mango', 'apple']);
function isString(val) {
    return typeof val === "string";
}
console.log(isString(1));
function test(input) {
    if (isString(input)) {
        input.toUpperCase(); // now TypeScript knows it's a string
    }
}
function getFish(pet) {
    return pet;
}
var pet1 = getFish({ name: 'Catfish', swim: function () {
    }, });
console.log(pet1.name);
