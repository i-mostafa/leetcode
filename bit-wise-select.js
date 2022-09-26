// const bitWiseSelect = (x, y, b) => (b && x) || (!b && y);
const bitWiseSelect = (x, y, b) => ((!b - 1) & x) | ((b - 1) & y);

console.log(bitWiseSelect(5, 4, 1));
console.log(bitWiseSelect(5, 4, 0));

/**
 * mux implementation
 *
 */
