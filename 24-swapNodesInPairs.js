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
var swapPairs = function (head) {
  if (!head) return null;

  let prev = head;
  let curr = head.next;
  if (!curr) return head;

  head = curr;
  let lasNode;

  while (curr) {
    const coming = curr.next;
    curr.next = prev;
    prev.next = coming;

    if (lasNode) lasNode.next = curr;
    lasNode = prev;

    if (!coming) break;
    prev = coming;
    curr = coming.next;
  }

  return head;
};

const node4 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);

console.dir(swapPairs(node4), { depth: null });
