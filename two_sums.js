/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //console.log("test", nums, target);
    
    if (nums.length < 2)
        console.log("This will break.")
    
    //No need for i to reach last number since J will reach it.
    for (let i = 0; i<nums.length - 1; i++)
    {
        //console.log(nums[i]);
        for (let j = i + 1; j<nums.length; j++)
        {
            //console.log("J is ", nums[j]);
            //console.log("Target: ",target,"I + J", nums[i] + nums[j] ,nums[i] + nums[j] === target)
            if (nums[i] + nums[j]=== target)
            {
                let result = [i, j]
                //console.log("Result" , result);
                return [i, j];
            
        }
    }
};