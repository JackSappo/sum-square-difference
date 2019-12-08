function sumFirstNSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareFirstNSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
}

async function tickRandom() {
  const ms = Math.random() * 3000;

  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, ms);
  })
}

export async function squaresDifference(n) {
  if (typeof n !== 'number') {
    n = parseInt(n);
  }

  await tickRandom();

  return squareFirstNSum(n) - sumFirstNSquares(n);
}
