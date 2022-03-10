function anagram(arr1,arr2){
  let flag = false
if(arr1.length != arr2.length){
  return "False"
}else{
  for( let i = 0; i< arr1.length; i++){
    if(arr1[i] == arr2[i]){
    flag= true;   
    }
  }
  if( flag){
    return "True"
  }
  else{
   
    return "False"
  }
}
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let arr1 = input[0].trim().split("")
    arr1.sort()
    arr1 = arr1.filter(function(entry) { return entry.trim() != ''; });
    let arr2 = input[1].trim().split("");
    arr2.sort()    
    arr2 = arr2.filter(function(entry) { return entry.trim() != ''; });
  //  console.log(arr1);
  console.log( anagram(arr1,arr2));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`masai school a transformation
    trasnformation school a masai`);
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