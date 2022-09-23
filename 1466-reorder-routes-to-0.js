/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  //   const set = new Set();
  let reorders = 0;
  const neighbors = {};
  const edges = new Set();

  for (const connection of connections) {
    const [from, to] = connection;
    if (!neighbors[to]) neighbors[to] = [];
    if (!neighbors[from]) neighbors[from] = [];
    neighbors[to].push(from);
    neighbors[from].push(to);

    edges.add(connection.toString());
  }

  const visited = {};

  const dfs = (node) => {
    for (const neighbor of neighbors[node]) {
      if (visited[neighbor]) continue;
      visited[node] = true;

      if (!edges.has([neighbor, node].toString())) reorders++;

      dfs(neighbor);
    }
  };
  visited[0] = true;
  dfs(0);

  return reorders;
};

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
); //3
console.log(
  minReorder(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ])
); //2
console.log(
  minReorder(3, [
    [1, 0],
    [2, 0],
  ])
); // 0
