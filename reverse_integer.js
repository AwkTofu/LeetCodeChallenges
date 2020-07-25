/**
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //change X to string, split it into an array.
    //Then reverse the order of the array, and combine them back to a single string
    //We then parse it back into Integer, * math.sign(x) to get positive/negative.
    let reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);

    //Since this is 32-bit signed integer, if it goes over bound, return 0
    //the max 32-bit integer is (2^31) which is 2,147,483,647. 
    //This is so that negative values can be stored as well (-2^31) being 
    //the 32 bit limit (this is what "signed" means)
    if (Math.abs(reversed) > Math.pow(2, 31))
        reversed = 0;
    return reversed;
};