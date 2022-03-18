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
    // 设立一个前置节点, 保存下一个节点, 然后修改每个节点指向
    let prev = null

    while (head) {
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }

    return prev
};
