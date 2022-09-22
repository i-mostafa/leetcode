class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = {};
  this.maxCapacity = capacity;
  this.currCapacity = 0;
  this.list = new LinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) return -1;

  const node = this.cache[key];
  if (node.prev) {
    node.prev.next = node.next;
    node.next = this.list.head;
    node.prev = null;
    this.list.head = node;
  }

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key].value = value;
    return null;
  }
  if (this.currCapacity < this.maxCapacity) this.currCapacity++;
  else {
    const leastRecentUsed = this.list.tail;
    delete this.cache[leastRecentUsed.key];

    this.list.tail = leastRecentUsed.prev;
    this.list.tail.next = null;
  }

  const node = new Node(key, value, null, this.list.tail);

  this.list.tail = node;
  if (!this.list.head) this.list.head = node;
  this.cache[key] = node;
  console.log(key, value, this.list);
  return null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4
