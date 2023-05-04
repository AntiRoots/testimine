const sumNumbers = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sumNumbers(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sumNumbers(0, 0)).toBe(0);
});

test('adds -1 + 1 to equal 0', () => {
  expect(sumNumbers(-1, 1)).toBe(0);
});
