// function toys(k,prices,N){
//     let count = 0;
//     let sum = 0;
//     for(let i = 0; i <N;i++){
//         if(sum + prices[i] <= k){
//             sum += prices[i];
//             count++;
//         }else{
//             break;
//         }
//     }
//     // return sum
//     return count;
// }



function maximumToys(prices, k) {
    let cost=0,count=0;
    var x = prices.sort((a,b)=>a-b);
    for(let i=0; i<prices.length; i++)
        {
            if(cost<k)
            {
                cost+=x[i];
                count++;
            }
        }
        return count-1;
    }
                let k = 50;
                let prices = [1, 12, 5, 111, 200, 1000, 10];
                prices = prices.sort((a, b) =>a-b);
                let N = prices.length-1;
                
                console.log(maximumToys(prices, k));