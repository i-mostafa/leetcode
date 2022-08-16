class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next || k <= 1) return head;

  const holder = new Array(k);

  holder[0] = head;

  for (let i = 1; i < k; i++) {
    holder[i] = holder[i - 1].next;
    if (!holder[i]) return head;
  }
  head = holder[k - 1];
  const next = head.next;

  for (let i = k - 2; i >= 0; i--) {
    holder[i + 1].next = holder[i];
  }
  if (next) holder[0].next = reverseKGroup(next, k);
  else holder[0].next = null;

  return head;
};

const node1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.dir(reverseKGroup(node1, 2), { depth: null });
const node2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.dir(reverseKGroup(node2, 3), { depth: null });

const node3 = new ListNode(1, new ListNode(2));

console.dir(reverseKGroup(node3, 2), { depth: null });
