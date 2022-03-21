function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  let n = +input[0];
  let arr1 = input[1].trim().split(' ').map(Number);
  let arr2 = input[2].trim().split(' ').map(Number);
  // console.log(arr1, arr2)
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  let res1 = Math.ceil(sum1 / n);
  let res2 = Math.ceil(sum2 / n);
  let finalans = 0;
  if (res1 > res2) {
    finalans = res1;
  } else if (res2 > res1) {
    finalans = res2;
  }
  if (finalans % 2 == 0) {
    console.log(finalans);
  } else {
    console.log(-1);
  }

  //console.log(sum1/n, sum2/n)
}
if (process.env.USER === 'dheerajmehta') {
  runProgram(`3
	10 20 30
	40 80 60`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
