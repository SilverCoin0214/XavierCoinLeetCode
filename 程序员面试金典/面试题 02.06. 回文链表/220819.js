/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-19 14:48:56
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-19 14:49:00
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 02.06. 回文链表/220819.js
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    // 思路: 递归, 先递归到最底层, 然后一步步对比嵌套回来
    let left = head

    const recursion = (head) => {
        let right = head
        if (right == null) {
            return true
        }

        let res = recursion(right.next)

        res = res && right.val === left.val
        left = left.next

        return res
    }

    return recursion(head)
};
