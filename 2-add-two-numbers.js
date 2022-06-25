// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   const maxLength = Math.max(l1.length, l2.length);
//   const result = [];
//   let carry = 0;
//   const add = (a = 0, b = 0) => {
//     const sum = a + b + carry;
//     if (sum <= 9) {
//       carry = 0;
//       return result.push(sum);
//     }
//     carry = Math.floor(sum / 10);
//     result.push(sum % 10);
//   };

//   for (let i = 0; i < maxLength; i++) {
//     add(l1[i], l2[i]);
//   }
//   if (carry) add();

//   return result;
// };

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const add = (a = 0, b = 0) => {
    const sum = a + b + carry;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    return sum % 10;
  };

  const result = new ListNode(add(l1.val, l2.val));
  l1 = l1.next;
  l2 = l2.next;
  let current = result;

  while (l1 || l2 || carry) {
    current.next = new ListNode(add(l1.val, l2.val));
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return result;
};
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
