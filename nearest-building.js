const findLastNotNull = (grid, i, j) => {
  while (i >= 0) {
    if (grid[i][j] !== null) return i;
    i--;
  }
  return null;
};

const setLastNull = (grid, i, j) => {
  let weight = 1;
  while (i >= 0 && grid[i][j] === null) {
    grid[i][j] = weight;
    weight++;
    i--;
  }
  return null;
};

const maxTransition = (arr) =>
  arr.reduce((acc, curr) => (acc > curr ? acc : curr), -Infinity);

const findBuilding = (blocks, req) => {
  const reqArr = Array.from(req, () => null);
  const grid = Array.from(blocks, () => [...reqArr]);

  for (let i = 0; i < blocks.length; i++) {
    let hasReq = 0;
    for (let j = 0; j < req.length; j++) {
      if (blocks[i][req[j]]) {
        hasReq += 1;
        setLastNull(grid, i - 1, j);
        grid[i][j] = 0;
      } else {
        const last = findLastNotNull(grid, i - 1, j);

        if (last !== null) grid[i][j] = i - last + grid[last][j];
      }
    }
    if (hasReq === req.length) return i;
  }

  let minTransitionIdx = 0;
  let minTransition = maxTransition(grid[minTransitionIdx]);
  for (let i = 1; i < grid.length; i++) {
    const rowAvg = maxTransition(grid[i]);
    if (rowAvg < minTransition) {
      minTransitionIdx = i;
      minTransition = rowAvg;
    }
  }
  return minTransitionIdx;
};

const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const req = ["gym", "school", "store"];

console.log(findBuilding(blocks, req));
