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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // 层序遍历是用队列来保存

    if (root == null) {
        return [];
    }

    let res = []
    let queue = [root]

    while (queue.length !== 0) {
        let subRes = []
        let len = queue.length

        for (let i = 0; i < len; i++) {
            let cur = queue.shift()
            subRes.push(cur.val)

            if (cur.left != null) {
                queue.push(cur.left)
            }

            if (cur.right != null) {
                queue.push(cur.right)
            }
        }

        res.push(subRes)
    }

    return res
  };
