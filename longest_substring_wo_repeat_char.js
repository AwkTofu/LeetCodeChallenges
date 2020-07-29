/**

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0;
    //var s = "aab"
    let currentWord = "";
    let currentLength = 0;
    
    let currentIndex = 0;
    while (currentIndex < s.length)
    {

        let currentChar = s.charAt(currentIndex);
        
        
        if (currentWord.includes(currentChar)) //True if repeated
        { 
            if (currentLength > longestLength)
            {
                longestLength = currentLength;
            }
            currentWord = currentChar;
            currentLength = 1;
        }
        else //Character doesn't exist in the current Word;
        {
            currentWord += currentChar;
            currentLength++;
        }
        currentIndex++;
    }
    console.log("Word:", s, "currentLen",currentLength, "longestLen:", longestLength)
    if (currentLength > longestLength)
        return currentLength;
    return longestLength;
};