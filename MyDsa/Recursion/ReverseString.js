// const data = (a) => {
//   let ab = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     ab = ab + a[i];
//   }
//   return ab;
// };
let str = "abhishek";
const data = (str, start, end) => {
  let temp,
    ab = "";
  if (start <= end) {
    temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    ab += str;
    data(str, start + 1, end - 1);
    return ab;
  }
};

console.log(data(str, 0, str.length - 1));
