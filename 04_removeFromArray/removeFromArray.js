const removeFromArray = function(arr, ...args) {
    let allArgs = args;
    let result = arr;

    for(let i = 0; i <= allArgs.length; i++ ){
        for(let j = 0; j <= result.length; j++){
            if(result[j] === allArgs[i]){
                result.splice(j, 1)
            }
        }
        
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
