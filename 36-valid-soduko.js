/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //   // columns
  //   for (let i = 0; i < 9; i++) if (!isValid(board, { i })) return false;

  //   // rows
  //   for (let i = 0; i < 9; i++) if (!isValid(board, { j: i })) return false;

  //   //blocks
  //   for (let i = 0; i < 9; i++) if (!isValidBlock(board, i)) return false;

  for (let i = 0; i < 9; i++)
    if (
      !isValidBlock(board, i) ||
      !isValid(board, { j: i }) ||
      !isValid(board, { i })
    )
      return false;

  return true;
};

function isValidBlock(board, i) {
  const holder = {};
  const blockX = (i % 3) * 3;
  const blockY = Math.floor(i / 3) * 3;
  for (let x = 0; x < 3; x++)
    for (let y = 0; y < 3; y++) {
      const value = board[x + blockX][y + blockY];
      if (value === ".") continue;
      if (holder[value]) return false;
      holder[value] = true;
    }
  return true;
}

function isValid(board, { i, j }) {
  const holder = {};
  for (let x = 0; x < 9; x++) {
    const value = board[i ?? x][j ?? x];
    if (value === ".") continue;
    if (holder[value]) return false;
    holder[value] = true;
  }
  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
