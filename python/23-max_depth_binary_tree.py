

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if (root == None):
            return 0
        l = self.maxDepth(root.left)
        r = self.maxDepth(root.right)
        return 1 + max(l, r)


class Solution2(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.depth = 0

        def bfs(node, level):
            if (node == None):
                return
            if level > self.depth:
                self.depth = level
            bfs(node.left, level + 1)
            bfs(node.right, level + 1)
        bfs(root, 1)
        return self.depth
