// let str = ""
// let n =5
// for(i=1; i<=n; i++)
// {
// 	for(l=1;l<=n-i;l++)
//   {
//      str += " "
//    }
//  for(j=1; j<=i; j++)
//  str+=j+" "
//  for(k=i-1; k>=1; k--)
//  str+=k
//  console.log("\n");
// }
// console.log(str)

// let n = 5;
// for(let i=0; i < n; i++){
//     for(let j=0; j < 2*n; j++){
//        var abs = Math.abs(n-j);
//     console.log(abs>i ? " " : i-abs+1);
//     }
//     console.log(abs)
// }

// let n = 5;
// let output = ""
// for(let i=0; i < n; i++){
//     for(let j=0; j < 2*n; j++){
//        let abs = Math.abs(n-j);
//     //    console.log(abs>i ? " " : i-abs+1);
//        output += abs>i ? " " : i-abs+1
//     }
//     console.log();
// }
// //console.log()
// console.log( "\n" +output );

let n = 5;
let output = "";
for(let i=0; i < n; i++){
    for(let j=0; j < 2*n; j++){
       let abs = Math.abs(n-j);
    //    console.log(abs>i ? " " : i-abs+1);
       output+=(abs>i ? " " : +i-abs+1+" ")
	  
    }
    console.log();
	console.log({output});
}

console.log(obj1 [ obj2 , objN])