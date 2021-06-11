function isArray(variable){
    return Array.isArray(variable) ;
}

function arrayClone(arr){
    return [...arr];
}

function first(arr, range=1){
    return arr.slice(0,range);
}

function toString(arr){
    return `"${arr.toString()}"`;
}

function mostFreq(arr){
    mapObj={}
    arr.forEach(data => {
        if(data in mapObj){
            mapObj[data]+=1;
        }
        else{
            mapObj[data]=1;
        }
    })
    maximumFreqValue=0;
    maximumFreqElement="";
    for(key in mapObj){
        if(mapObj[key]>maximumFreqValue){
            maximumFreqValue=mapObj[key];
            maximumFreqElement=key;
        }
    }
    return `${maximumFreqElement} (${maximumFreqValue} times)`;
}


console.log(isArray("aswe"))
console.log(arrayClone([1,2,[3,9]]))
console.log(first([1,2,[3,9]]))
console.log(toString(["Red", "Green", "White", "Black"]));
console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));