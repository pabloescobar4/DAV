function result(res){
    let count_a = 0, count_i=0, count_o=0,count_u = 0;
    // console.log(res);
    for(let k = 0;k<res.length;k++){
       if(res[k] == "a") {
           count_a++
       }
       if(res[k] == "i") {
        count_i++
    }
    if(res[k] == "o") {
        count_o++
    }
    if(res[k] == "u") {
        count_u++
    }
       
    }
    console.log(count_a);
}
function runProgram(input) {
    let str = input;
    //    console.log(str);
    for(let i = 0;i<str.length;i++){
        let res = ""
        for( let j = i;j<str.length;j++){
            res += str[j]
            // console.log(res[0]);
            result(res)        
    }
}   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`dangerouscovid`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }