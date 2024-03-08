// 1-function
function maxNumbers(arg1, arg2, arg3) {
    let max;
    if(arg1 > arg2) {
        max = arg1;
    } else {
        max = arg2;
    }
    if(arg3 > max) {
        max = arg3;
    }   
    return max;
}
// let a = +prompt("Ixtiyoriy son kiriting...");
// let b = +prompt("Ixtiyoriy son kiriting...");
// let c = +prompt("Ixtiyoriy son kiriting...");
// alert(maxNumbers(a, b, c))



// 2-function
function sumNumbers(arg1, arg2){
    let sum = 0;
    for(let i = a; i <=b; i++){
        if(i %2 == 0) {
            sum += i;
        }
    }
    return  sum;
}
// let a = +prompt("Ixtiyoriy son kiriting...");
// let b = +prompt("Ixtiyoriy son kiriting...");
// alert(sumNumbers(a, b))


// 3-function
function functionNumbers(arg1){
    let b = arg1%10;
    let o = Math.trunc(arg1 / 10)%10;
    let y = Math.trunc(arg1 / 100)%10;
    let sum = b + o + y;
    return sum;
}
// let a = +prompt("Ixtiyoriy 3 xonali son kiriting...");
// alert(functionNumbers(a))


// 4-function
// function functionCouple(arg1){
//     let b = arg1%10;
//     let o = Math.trunc(arg1 / 10)%10;
//     let y = Math.trunc(arg1 / 100)%10;
//     let sum = 0;
//     if(b % 2==0){
//         sum += b;
//     }
//     if(o % 2==0){
//         sum += o;
//     }
//     if(y % 2==0){
//         sum += y;
//     }
//     return sum;
// }
// let a = +prompt("Ixtiyoriy son kiriting...");
// alert(functionCouple(a))


// 5-function
function multiplyNumber(arg){
    let multiply = 1;
    for (let i = 1; i <= arg; i++){
        if(i % 3 == 0 && i % 5 == 0){
            continue;
        }
        multiply *= i;
    }
    return multiply;
}
// let a = +prompt("Ixtiyoriy 3 xonali son kiriting...");
// alert(multiplyNumber(a))


// 6-function
function dividingNumber(arg){
    let res = 0;
    for(let i = 1; i <= arg; i++){
        if(i % 5 == 0 || i % 7 == 0){
            res ++
        }
    }
    return res
}
// let a = +prompt("Ixtiyoriy son kiriting...");
// dividingNumber(a)


// 7-function
function tubSonnilar(arg) {
    let sum = 0;
    for (let i = 2; i <= arg; i++) {
        let isTub = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isTub++;
                break;
            }
        }
        if (isTub == 0) {
            sum += i
        }
    }
    return sum;
}
// let n = parseInt(prompt("Ixtiyoriy son kiriting"));
// console.log(tubSonnilar(n));  

function functionCouple(arg) {
    let sum = 0;
    for (let i = 1; i <= arg; i++) {
      let counter = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          counter++;
        }
      }
      if (counter == 2) {
        sum += i;
      }
    }
    return sum
}
alert(functionCouple(10))