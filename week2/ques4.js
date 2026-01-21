



const nestedData = [2,[7,[8]]]



function customFlat(arr, depth =1){
    let result = [];
    for(let elm of arr){
        if(Array.isArray(elm) && depth > 0){
            result.push(...customFlat(elm,depth-1));
        }else{
            result.push(elm);
        }
    }
    return result;
}


console.log(customFlat(nestedData,1)); // [2,7,[8]]
console.log(customFlat(nestedData,2)); // [2,7,8]