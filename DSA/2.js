function code(str1, str) {
  // console.log(str1,str);

  function result(str1, str) {
    if (str1[0] > str[0]) {
      return 'False';
    } else if (str1[0] < str[0]) {
      return 'True';
    } else {
      if (str1[1] > str[1]) {
        return 'False';
      } else if (str1[1] < str[1]) {
        return 'True';
      } else {
        if (str1[2] > str[2]) {
          return 'False';
        } else {
          return 'True';
        }
      }
    }
    return 'True';
  }

  console.log(result(str1, str));
}

function runProgram(input) {
  input = input.trim().split('\n');
  let testCases = Number(input[0]);

  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let str1 = input[line].split('.').map(Number);
    line++;
    let str = input[line].split('.').map(Number);
    line++;

    code(str1, str);
  }
}

if (process.env.USER === 'dheerajmehta') {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
