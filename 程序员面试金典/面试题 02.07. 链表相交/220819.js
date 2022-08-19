/*
 * @Author: zzx_xavier zhangzuoxuan@gmail.com
 * @Date: 2022-08-19 14:54:23
 * @LastEditors: zzx_xavier zhangzuoxuan@gmail.com
 * @LastEditTime: 2022-08-19 14:54:26
 * @FilePath: /XavierCoinLeetCode/程序员面试金典/面试题 02.07. 链表相交/220819.js
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    // 思路: A链走完去B链, B链走完去A链, 相交时就是重合
    let pa = headA
    let pb = headB

    while (pa != pb) {
        pa = pa ? pa.next : headB
        pb = pb ? pb.next : headA
    }

    return pb
};
