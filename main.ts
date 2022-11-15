export {}

let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';


let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//array of mixed type
let person1: [string,number] = ['Chris', 22];

//enum type
enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;


let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj && typeof obj === 'object' && "name" in obj
}
if (hasName(myVariable)){
    console.log(myVariable.name);
}


let a;
a = 10;
a = true;

let b = 20;


let multiType: number | boolean;
multiType = 20;
multiType = true;
multiType


// functions

function add(num1: number,num2: number = 10): number {
    if (num2) 
        return num1 + num2;
     else 
        return num1;
}
console.log(add(5,10));
console.log(add(5));

interface Person {
    firstName: string;
    lastName?: string;
}
function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}


let p = {
    firstName: 'Bruce',

}

fullName(p);


//Classes
