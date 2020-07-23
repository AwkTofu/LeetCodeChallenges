/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry) {
    console.log(l1)
    console.log(l2)
    console.log(carry != null)
    
    /*let result = new ListNode(); 
    let carryOver = 0;
    console.log("len", l2.val, l2.next, l2.next.next)
    
    while (l1 != null)
    {
        console.log("current l1", l1.val, "current l2", l2.val);
        let val = l1.val + l2.val + carryOver;
        carryOver = 0;
        if (val >= 10)
        {
            val -= 10;
            carryOver = 1;
        }
        console.log("val", val)
        l1 = l1.next;
        l2 = l2.next;
        result.next = new ListNode(val);
        result= result.next
        console.log("result", result);
    }*/
    let result = null;
    
    if (l1 || l2)
    {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let val =  val1 + val2;
        
        if (carry)
            val += carry;
        let nextCarry = null;
        
        if (val >= 10)
        {
            val -= 10
            nextCarry = 1; 
        }
        
        result = new ListNode(val)
        let next1 = l1 ? l1.next : null
        let next2 = l2 ? l2.next : null
        result.next = addTwoNumbers(next1, next2, nextCarry)
    }
    else if (carry != null)
        result = new ListNode(1);
    
    
    return result;
};