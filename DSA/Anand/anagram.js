var str1= "abcdd";
let str2= "dcb";


// need to check whether angram or not



// using object  time coplexity o(n)
function ana(str1, str2){

  if(str1.length != str2.length){
    return "No"
  }

var obj1={};

for(var i=0; i < str1.length; i++){
  if( obj1[str1[i]] === undefined  ){
    obj1[str1[i]] = 1;
  }else{
    obj1[str1[i]]++;
  }
}

var obj2= {};

for(var i=0; i <str2.length; i++){
 
  if(obj2[str2[i]] === undefined){

    obj2[str2[i]] = 1;
  }else {
    obj2[str2[i]]++;
  }

}

// console.log(obj1, obj2);

var flag=true;
for(key in obj1){
if(obj1[key] === obj2[key]){
  flag=false;
}
}

if(flag){
  return "Yes"
}else{
  return "No"
}

}

var res= ana(str1,str2);
console.log(res);