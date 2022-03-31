/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // 翻转链表需要在链表前设立一个null值, 在每次操作时存在双指针, 对调指向
    let prev = null

    while (head) {
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }

    return prev
};
