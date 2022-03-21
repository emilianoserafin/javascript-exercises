const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0){
        return `ERROR`;
    }
    let nums = [...arguments].sort((a, b) => a - b);
    let result = 0;
    for(let i = nums[0]; i <= nums[1]; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
