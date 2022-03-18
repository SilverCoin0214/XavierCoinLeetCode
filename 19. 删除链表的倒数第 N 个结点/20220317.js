/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 快慢指针, 快的先走n步, 然后到结束时, 慢指针就到了删除节点, 进行操作
    // 需要判断删除第一个节点, 所以需要前置节点
    let dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy

    while (n > 0) {
        fast = fast.next
        n--
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next
};
