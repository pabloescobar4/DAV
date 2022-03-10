function specificDiagonals(Row,Col,arr,K){
    let str = "",str2 = ""

     let res =   0,out = 0
        for( let r = 0;r< Row ; r++){
            for( let c = 0; c< Col; c++){
                         if( arr[r][c] == K){           
                        res +=( [r]-[c])                        
                    }
        }
        }
        for( let r = 0;r< Row ; r++){
            for( let c = 0; c< Col; c++){   
                if([r] - [c] == res){
                    str+= (arr[r][c])+" "
                }  
                
            }
        }
        for( let r = 0;r< Row ; r++){
            for( let c = 0; c< Col; c++){     
                    if( arr[r][c] == K){     
                        out += r+c                            
                    }       
                }
            }
            // console.log(out);
        for( let r = 0;r< Row ; r++){
            for( let c = 0; c< Col; c++){   
                if(r + c == out){
                    str2+= arr[r][c]+" "
                    // console.log(arr[r][c]);
                }          
        }
    }
    console.log(str);
    console.log(str2);
      
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let [Row, Col] = input[0].trim().split(' ').map(Number)
    let arr =  []
    for( let i = 1; i< input.length-1;i++){
             arr.push(input[i].trim().split(' ').map(Number))
            }
            let K = +input[input.length-1].trim()
    // console.log(arr);
    specificDiagonals(Row,Col,arr,K)
}
  if (process.env.USERNAME === "win10") {
    runProgram(`3 3
    1 2 3 
    4 5 6 
    7 8 9 
    6`);
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