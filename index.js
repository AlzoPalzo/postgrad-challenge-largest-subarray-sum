
function largestSubarraySum(array){
    let carryForward = 0
    let biggestSum = 0
    for (let i = 0; i < array.length; i++) {
        let val = array[i] + carryForward
        if (val > 0) {
            carryForward = val
            if (val > biggestSum) {
                biggestSum = val
            }
        }
        if (val <= 0) {
            carryForward = 0
        }
    }
    return biggestSum
}

