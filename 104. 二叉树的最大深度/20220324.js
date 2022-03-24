/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 深度遍历, 递归
  const recursion = (root) => {
    if (root == null) {
      return 0
    }

    let L = recursion(root.left)
    let R = recursion(root.right)

    return Math.max(L, R) + 1
  }

  return recursion(root)
}
