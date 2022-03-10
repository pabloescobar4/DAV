function spiralTraversal(matrix,row, col){
    let left  = 0, right =col-1, top = 0,bottom = row -1; let count = 0;    let size = row*col;
    let str = ""
for( let r = 0 ; r<row ; r++){
    if(r % 2 == 0 ){
    for( let c = 0; c< col; c++){
      str+= matrix[r][c]+" "
   }
}else{
    for( let c = col-1;c>=0;c--){
        str+= matrix[r][c]+" "
        }
}
}
console.log(str)
}function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0]
    let line = 1;
    for ( let i = 0; i < t; i++){
        let [row ,col] = input[line++].trim().split(' ').map(Number)
        let matrix = []
        for( let j = 0; j< row; j++){
            matrix.push(input[line++].trim().split(' ').map(Number))
        }
        // console.log(matrix);
    spiralTraversal(matrix,row,col);
    }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1
    3 3
    1 2 3
    5 6 7
    9 10 11
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
// function printTraversal(matrix,rows,cols){
//    let  top = 0, bottom = rows - 1, left = 0, right = cols - 1,size = n * m , ans = []
//     while(ans.size() < size){
//         for (i = top;i<=bottom && ans.size() < size;i++)
//             ans.add(arr[i][left])
//         left++ //incrementing the left boundary
//         for (i = left;i<=right && ans.size() < size;i++)
//             ans.add(arr[bottom][i])
//         bottom--
//         for (i = bottom;i>= top && ans.size() < size;i--)
//             ans.add(arr[i][right])
//         right--
//         for (i = right;i>= left && ans.size() < size;i--)
//             ans.add(arr[top][i])
//         top++
//     }
//     return ans
// }


//     for( let i = left;i<=right;i++){
//         res+= matrix[bottom][i]+" "
//     count++
//     bottom--
// }
// for( let i = bottom;i>=top;i--){
//     res+= matrix[i][right]+" "
// count++
// right--
// }
// for( let i = right;i>=left;i--){
//     res+= matrix[top][i]+" "
// count++
// top++
// }