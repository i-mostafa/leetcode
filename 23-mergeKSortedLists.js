class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0] || null;

  const emptyIndices = {};
  let emptyCount = 0;

  const getMin = () => {
    let stock = {};
    for (let i = 1; i < lists.length; i++) {
      if (emptyIndices[i]) continue;

      const node = lists[i];
      if (!node) {
        emptyIndices[i] = true;
        emptyCount++;
        continue;
      }
      if (!stock.hasOwnProperty("val")) {
        stock = {
          val: node.val,
          indices: [i],
        };
        continue;
      }
      if (stock.val === node.val) {
        stock.indices.push(i);
        continue;
      }

      if (stock.val > node.val) {
        stock = {
          val: node.val,
          indices: [i],
        };
      }
    }
    if (!stock.hasOwnProperty("val")) return { result: null };
    const result = new ListNode(stock.val);
    lists[stock.indices[0]] = lists[stock.indices[0]].next;

    let resultNode = result;
    stock.indices.slice(1).forEach((i) => {
      resultNode.next = new ListNode(lists[i].val);
      lists[i] = lists[i].next;
      resultNode = resultNode.next;
    });
    return { result, resultNode };
  };

  let { result, resultNode } = getMin();
  if (!result) return null;

  while (emptyCount < lists.length) {
    const { result: nextResult, resultNode: nextResultNode } = getMin();
    if (!nextResult) break;
    resultNode.next = nextResult;
    resultNode = nextResultNode;
  }
  return result;
};

// const node = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(7))));
// const node2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
// const node3 = new ListNode(2, new ListNode(6, null));
// console.dir(mergeKLists([node, node2, node3]), { depth: null });

const node4 = new ListNode(1, new ListNode(2, new ListNode(3)));
const node5 = new ListNode(
  4,
  new ListNode(5, new ListNode(6, new ListNode(7)))
);
console.dir(mergeKLists([node4, node5]), { depth: null });

// console.dir(mergeKLists([]), { depth: null });
// console.dir(mergeKLists([new ListNode(1), new ListNode(0)]), { depth: null });
// console.dir(mergeKLists([new ListNode(0), new ListNode(1)]), { depth: null });
