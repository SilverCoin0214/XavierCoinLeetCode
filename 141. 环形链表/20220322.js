/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // 快慢双指针.
    let fast = head
    let slow = head

    while (fast) {
        if (fast.next == null) {
            return false
        }

        fast = fast.next.next
        slow = slow.next

        if (fast == slow) {
            return true
        }
    }

    return false
};
