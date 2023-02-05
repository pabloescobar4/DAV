let n = 5;
const sum = (number) => {
  if (number == 1) {
    return 1;
  } else return number + sum(number - 1);
};
console.log(sum(2));
