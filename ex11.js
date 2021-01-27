console.log("====== 배열 메소드: concat ========");

let colors = ['balck', 'white', 'yellow'];
let fruits = ['mango', 'banana', 'apple'];

let test = fruits.concat(colors);
console.log(test);

console.log("====== 배열 메소드: join ========");
let str = fruits.join(',');
console.log(str);

console.log("====== 배열 메소드: stack 지원(pop, push) ========");
let color = colors.pop();
console.log(color);
console.log(colors);
colors.push('red');
console.log(colors);

console.log("====== 배열 메소드: reverse ========");
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("====== 배열 메소드: shift ========");
let numbers = [4000, 8000, 3000, 5000, 1000];

console.log(numbers);
numbers.shift();
console.log(numbers);

console.log("====== 배열 메소드: slice ========");
let numbers2 = numbers.slice(1, 3);
console.log(numbers2);

console.log("====== 배열 메소드: sort ========");
console.log(numbers);
numbers.sort();
console.log(numbers);

console.log("====== 배열 메소드: splice ========");
// index부터 count개 삭제 후, 삭제 된 요소를 배열로 반환
console.log(fruits);
let fruits2 = fruits.splice(0/*index*/, 3/*count*/)
console.log(fruits2);
console.log(fruits);

let a1 = [0, 1, 2, 3, 4];
a1.splice(1, 3, 10);
console.log(a1);

let a2 = [0, 1, 2, 3, 4];
let a3 = a2.splice(1, 1, 10);
console.log(a3);
console.log(a2);

let a4 = [0, 1, 2, 3, 4];
let a5 = a4.splice(1, 0, 10);
console.log(a5);
console.log(a4);