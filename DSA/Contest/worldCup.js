function worldCup(NZ_score , NZ_super, NZ_fours,Eng_score , Eng_super, Eng_fours){
if((NZ_score > Eng_score) ){
    console.log("New Zealand");
}else if(NZ_score < Eng_score){
    console.log("England");
}else if(NZ_super > Eng_super){
    console.log("New Zealand");
} else if(NZ_super < Eng_super){
    console.log("England");
}else if(NZ_fours > Eng_fours){
    console.log("New Zealand");
}else if (NZ_fours < Eng_fours){
    console.log("England");
}
}

function runProgram(input) {
    input = input.trim().split('\n'); 
   let [NZ_score , NZ_super, NZ_fours] = input[0].trim().split(' ').map(Number);
let [Eng_score , Eng_super, Eng_fours] = input[1].trim().split(' ').map(Number);
 worldCup(NZ_score , NZ_super, NZ_fours,Eng_score , Eng_super, Eng_fours);
}
  if (process.env.USERNAME === "win10") {
    runProgram(`230 48 9
    233 45 10`);
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