function sumFirstNSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i,2);
  }
  return sum;
}

function squareFirstNSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum,2);
}

export function squaresDifference(n) {
  return squareFirstNSum(n) - sumFirstNSquares(n);
}