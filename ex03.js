/* 
scope: 변수의 범위
1. 정적 스코프: global, block, function
2. ES6 이전에는 block scope가 없었다.
3. function 안에서 var를 사용하면, function scope가 된다.
4. ES6에서는 let, const 키워드를 사용해서 block scop를 만든다.
*/

let i = 10;
f = function(){
    var i = 20;
    console.log("i=" + i);
    j = 30;
    var k = 10;
    if( k == 10){
        var l = 10;
    }
    console.log("l=" + l);

}

f();
console.log("i=" + i);
console.log("j=" + j);
// error: undefined
// console.log(k);

console.log("=========================");

{
    let x = 100000;
    const PI = 3.14;

    x = 100;
    // 상수이기 때문에 오류
    // PI = 3.14270;
}

// 접근 안됨
// console.log(x);