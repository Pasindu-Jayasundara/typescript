"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20)); // 30
console.log(add(10, 20, 30)); // 60
const sub = (num1, num2, num3 = 10) => {
    return num1 - num2 - num3;
};
console.log(sub(20, 10)); // -10
console.log(sub(20, 10, 5)); // 5
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(10, 20)); // 200
function addTo(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
}
let numbers = [10, 20, 30, 40, 50];
console.log(addTo(10, 20, ...numbers)); // 150
console.log(addTo(10, 20, 30, 40, 50)); // 150
function getItems(items) {
    return new Array().concat(items);
}
let numList2 = getItems([1, 2, 3, 4, 5]);
console.log(numList2); // [1, 2, 3, 4, 5]
let strList = getItems(["John", "Doe", "Jane"]);
console.log(strList); // ["John", "Doe", "Jane"]
//# sourceMappingURL=functions.js.map