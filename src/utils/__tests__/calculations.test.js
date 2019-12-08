import { squaresDifference } from '../calculations';

describe('calculations', () => {
  describe('squaresDifference', () => {
    [
      {
        n: 0,
        expected: 0
      },
      {
        n: 1,
        expected: 0
      },
      {
        n: 2,
        expected: 4
      },
      {
        n: 5,
        expected: 170
      },
      {
        n: 10,
        expected: 2640
      },
      {
        n: 99,
        expected: 24174150
      },
      {
        n: 500,
        expected: 15645770750
      },
    ].forEach(({n, expected}) => {
      it(`should calculate for n of ${n}`, () => {
        expect(squaresDifference(n)).toEqual(expected);
      })
    })
  })
})