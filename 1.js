let arr = [1,2,3]
console.log(arr.map((a) => a+1))
let array1 = [1,2,3,4,5]
console.log(array1.reduce((a,b) => a+b))

let obj ={name: 'Elie', rank: 'Pro'}
// let x =(JSON.stringify(obj))
// let y =(JSON.parse(x))
const myJSON = JSON. stringify(obj);
//console.log(myJSON.toString())
//console.log(String.valueOf(obj))

let  array= [1, 3, 4, 6, 7, 8, 2, 5]
array.sort((a, b) => b-a)
//console.log(array[0])


function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(7))


// const y = fetch('https://api.github.com/orgs/axios')
//   .then(response => response.json())    // one extra step
//   .then(data => {
//     console.log(data) 
//   })
//   .catch(error => console.error(error));

  let user = {
    name: "abhi",
    rank: "pro",
  };
  //let abhishek = JSON.stringify(user);
  let x = ""
  x =  Object.values(user) +" "+ Object.keys(user) + Object.entries(user)
  //console.log(x.toString());

  //console.log(Object.entries(user).join(" "));

let obj1 = {name: 'Elie', rank: 'Pro'}
  var ans = Object.entries(obj1).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
  console.log(ans)

  let user1 = {
    name: "abhi",
    rank: "pro",
  };
  
  var str = Object.keys(user).map(function (key) { 
      return   key + ": " + user[key]; // line break for wrapping only
  }).join(", ");
  let ab = JSON.stringify(str);
  console.log(ab)
  console.log(str)
//   let n = 5;
//   let string = "";
//   // External loop
//   for (let i = 1; i <= n; i++) {
//     // creating spaces
//     for (let j = 1; j <= n - i; j++) {
//       string += " ";
//     }
//     // creating numbers
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       string += k;
//     }
//     string += "\n";
//   }
//   console.log(string);
  let n = 4;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for(j=1;j<=n-i;j++)
//   {
//     string += " "
//   }

//   for(j=1;j<=i;j++)
//   {
//     string +=  j 
//   }

//   for(j=i-1;j>=1;j--)
//   {
//     string +=  j 
//   }
//   console.log("\n");
// }
// console.log(string + "\n");

var i, j, k;
let str = ""
for(i=1; i<=5; i++)
{
 for(j=1; j<=i; j++)
  str+=j
 for(k=i-1; k>=1; k--)
 str+=k
 console.log("\n");
}