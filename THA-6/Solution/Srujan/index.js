// -----------------------------------THA-6--------------------------------------------------------
// Solution : 1

function checkArray(arr)  {
    return Array.isArray(arr);
 }
 console.log(checkArray([1, 2, 4, 0]));
 
 
 // --------------------------------------------------------------------------------------------------
 // Solution: 2
 
 function cloneArr(arr) {
     const b = arr.slice(0);
     return b;
 }
 console.log(cloneArr([1, 2, 4, 0]));
 
 
 // ---------------------------------------------------------------------------------------------------
 // Solution : 3
 
 function retEle(arr,n=1) {
     return arr.slice(0,n);
 }
 console.log(retEle([1,4,7,8],3));
 
 
 // --------------------------------------------------------------------------------------------------
 // Solution : 4
 
 function arrToString(arr) {
     console.log(arr.join(','));
     console.log(arr.join(' + ')); 
 }
 arrToString(["Red", "Green", "White", "Black"]);
 
 // --------------------------------------------------------------------------------------------------
 // Solution : 5
 
 function dupValue(arr) {
     let vals = {};
    for(i of arr){
        if(i in vals) {
            vals[i]++;
        } else {
            vals[i] = 1;
        }
    }
     repeated = 0;
    for(keys in vals) {
        if(vals[keys] > repeated){
        repeated = vals[keys];
        times = keys;
        }
    }
    console.log(`${repeated} (${times} times)`)
 }
 dupValue([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
 