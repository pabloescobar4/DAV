// const data = (a) => {
//   let ab = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     ab = ab + a[i];
//   }
//   return ab;
// };
let str = "abhishek";
function reverse(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return (
      str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1))
    );
  }
}

console.log(reverse(str));
