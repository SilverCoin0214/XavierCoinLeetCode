/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-17 11:29:10
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-17 11:29:15
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 02.02. 返回倒数第 k 个节点/20220817.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    // 双指针, i 和 j 差k个距离
    if (head == null) {
        return head
    }

    let slow = head
    let fast = head

    while (k > 0) {
        fast = fast.next
        k--
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow.val
};
