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
var sumNumbers = function (root) {
  const dfs = (node, prev = 0) => {
    if (!node) return 0;

    prev *= 10;
    prev += node.val;

    if (!node.left && !node.right) return prev;
    return dfs(node.left, prev) + dfs(node.right, prev);
  };

  return dfs(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(sumNumbers(root));
