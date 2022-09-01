class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [curr, prev] = [head, null];

  while (curr) {
    const nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
};
const node4 = new ListNode(1, new ListNode(2, new ListNode(3)));
const node5 = new ListNode(
  4,
  new ListNode(5, new ListNode(6, new ListNode(7)))
);
console.dir(reverseList(node4), { depth: null });
console.dir(reverseList(node5), { depth: null });
