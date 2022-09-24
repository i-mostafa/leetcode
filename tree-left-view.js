class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}
const treeLeftView = (root) => {
  const result = [];

  const bfs = (node, level = 0) => {
    if (!node) return;

    if (result.length === level) result.push(node.value);

    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  };

  bfs(root);
  return result;
};

const tree = new Node(
  1,
  new Node(2),
  new Node(3, new Node(4), new Node(5, null, new Node(6)))
);
console.log(treeLeftView(tree));
