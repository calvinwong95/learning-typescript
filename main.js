"use strict";
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//array of mixed type
var person1 = ['Chris', 22];
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
multiType;
// functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
//Classes
