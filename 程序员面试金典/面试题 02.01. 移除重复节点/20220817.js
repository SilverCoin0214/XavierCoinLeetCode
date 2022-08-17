/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-17 11:24:58
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-17 11:25:03
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 02.01. 移除重复节点/20220817.js
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
 * @return {ListNode}
 */
 var removeDuplicateNodes = function(head) {
    // 链表的值保存在set中
    if (head == null) {
        return head
    }

    const set = new Set()
    set.add(head.val)
    let prev = head
    let cur = head.next


    while (cur) {
        if (set.has(cur.val)) {
            prev.next = cur.next
            cur = cur.next
        } else {
            set.add(cur.val)
            prev = prev.next
            cur = cur.next
        }
    }

    return head
};
