/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    // 想法1: 遍历一遍链表获得值存进数组, 变成数组回文题
    //
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let a1 = [...arr]

    let b1 = arr.reverse()
    let res = true
    for (let i = 0; i < arr.length; i++) {
        if (a1[i] != b1[i]) {
            res = false
        }
    }

    return res
};
