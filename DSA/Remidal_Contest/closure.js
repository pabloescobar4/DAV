// var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

// names.forEach(function(element){
//     console.log(element)
// })

function sum(x, y, callBack){
    var total = x + y
    callBack(total)
}

var print = function(toPrint){
    console.log(toPrint)
}

sum(4, 5, print)