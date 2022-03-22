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
    // 递归, 先嵌套到最底层, 然后一步步回调结果
    let left = head

    const recursion = (head) => {
        let right = head
        if (right == null) {
            return true
        }

        let res = recursion(right.next)

        res = res && right.val == left.val
        left = left.next

        return res
    }

    return recursion(head)
};
