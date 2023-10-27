function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//    /**
//     * @param {TreeNode} root
//     * @return {number}
//     */

// method 1
var maxDepth = function (root) {
  let depth = 0;

  let bfs = (node, level) => {
    if (node === null) return;
    if (level > depth) {
      depth = level;
    }
    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  };
  bfs(root, 1);
  return depth;
};

// method 2
var maxDepth2 = function (root) {
  if (root === null) return 0;
  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  return 1 + Math.max(l, r);
};
