function weirdTraversal(N, arr){
    let half = Math.floor(N/2)
    var middle = Math.floor(N/ 2);
    // console.log(middle);
    let c1=0,c2=0,c3=0;
    for( let i = 0;i<N;i++){
        for( let j  = 0;j<N;j++){
        if( (j== 0) && (i <half)){
            c1+=arr[i][j]
        }} }

        for( let i = 0;i<N;i++){
            for( let j  = 0;j<N;j++){
            if(  (i ==middle)){
            c2+=arr[i][j]
            }} }
            for( let i = 0;i<N;i++){
                for( let j  = 0;j<N;j++){
                if(  (j ==N-1) && (i > half) ){
                c3+=arr[i][j]
                }} }
let result = (3*c1)+ (2*c3)+c2
console.log(result);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let arr = []
   for( i = 1;i<input.length; i++ ){
       arr.push(input[i].trim().split(' ').map(Number))
   }
//    console.log(arr);
// console.log(   weirdTraversal(N, arr));
weirdTraversal(N, arr)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25`);
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