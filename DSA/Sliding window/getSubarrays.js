function getSubArrays(arr) {
    const subArrays = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    return subArrays;
}


const data = getSubArrays([1,2,3,4,5])
console.log(data);