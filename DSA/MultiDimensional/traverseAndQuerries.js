function traverseAndQuerries(N,M,q,arr){
    let str = ""
    if ( q == 1){
        for ( let r = 0;r<N;r++){
            if( r % 2 ==0){
            for( let c = 0;c<M;c++){
                str+= arr[r][c]+" "
            }
            }else {
                for( let c = M-1;c>=0;c--){
                    str+= arr[r][c]+" "
                }
            }
        }
    }else{
        for ( let r = 0; r< N; r++){
            if( r % 2 ==0){
                for( let c = M-1;c>=0;c--){
                    str+= arr[r][c]+" "
                }
            }else {
                for ( let c =0;c< M;c++){
                    str+= arr[r][c]+" "
                }
            }
        }
    }
console.log(str)
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0]
   let line = 1;
   for( let i = 0;i<t;i++){
       let [N,M,q] = input[line++].trim().split(' ').map(Number)
   let arr = []
   for( let j =0 ;j<N;j++){
       arr.push(input[line++].trim().split(' ').map(Number))
   }    
   console.log( traverseAndQuerries(N,M,q,arr));
}
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
    `);
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