let str = "abc";
for (let i = 0; i < str.length; i++) {
  let sub_string = "";
  for (let j = i; j < str.length; j++) {
    sub_string += str[j];
    // console.log(sub_string);
    let obj = {};
    for (let k = 0; k < sub_string.length; k++) {
      if (obj[sub_string[i]] === undefined) {
        obj[sub_string[i]] == 1;
      } else {
        obj[sub_string[i]]++;
      }
    }
    console.log(obj);
  }
}
