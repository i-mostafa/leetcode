// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function (head, n) {
//   const nodes = [];
//   let current = head;
//   while (current) {
//     nodes.push(current);
//     current = current.next;
//   }
//   const index = nodes.length - n;
//   if (index === 0) return head.next;
//   let i = 0;
//   current = nodes[0];
//   while (i < nodes.length) {
//     i++;
//     if (i === index) continue;
//     current.next = nodes[i] || null;
//     current = current.next;
//   }
//   return nodes[0];
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  if (head.next === null) return null;

  let ptrBeforeN = head;
  let count = 1;

  // While there are more elements
  let el = head.next;
  while (el !== null) {
    if (count > n) ptrBeforeN = ptrBeforeN.next;
    el = el.next;
    count++;
  }

  if (count === n) return head.next;

  ptrBeforeN.next = ptrBeforeN.next.next;
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.dir(removeNthFromEnd(head, 4), { depth: null });
