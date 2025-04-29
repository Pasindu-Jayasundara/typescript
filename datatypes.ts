let lname : string;

lname = "John Doe";

let newName = lname.toUpperCase();
console.log(newName); // JOHN DOE

let age : number;
age = 30;
age = 30.5;

let dob = "25";
let result = parseInt(dob);


let isValid : boolean = false;
console.log(isValid); // false

let emptyList : string[];
let emptyList2 : Array<string>;

emptyList = ["John", "Doe", "Jane"];
emptyList2 = ["John", "Doe", "Jane"];

let numList :Array<number>;
numList = [1, 2, 3, 4, 5];

let results = numList.filter((num)=> num > 2);
console.log(results); // [3, 4, 5]

let results2 = numList.find((num)=> num == 2);
console.log(results2); // 2

let results3 = numList.reduce((acc, num) => acc + num, 0);
console.log(results3); // 15


const enum Color{
    Red,Green,Blue
}

let color : Color = Color.Red;
console.log(color); // 0


let swapNumbers : [number, number];
function swapNum(num1:number,num2:number) : [number, number] {
    return [num2,num1];
}

swapNumbers = swapNum(1,2);
console.log(swapNumbers); // [2, 1]