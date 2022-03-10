// function sumThem(n,current,sum){
//     if(current> n){
//         return sum
//     }
//     sum += current
//     return sumThem(n,current+1,sum)
// }
// console.log(sumThem(5,1, 0));

// function fact(n){
//     if(n==0 || n== 1){
//         return 1
//     }
//     return n* (fact(n-1))
// }
// console.log(fact(5));


function fibo(n){
    if(n==0 || n==1){
        return n
    }
    return fibo(n-1) + fibo(n-2)
}
console.log(fibo(5));

// function fibonacci(num)    {   
//         if(num==1)
//             return 0;
//         if (num == 2)
//             return 1;
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// console.log( fibonacci(5))