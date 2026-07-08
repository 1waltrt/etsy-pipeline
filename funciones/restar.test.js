const { ejecutar } = require('./restar');

test('5 - 3 es 2', () => {
  expect(ejecutar(5, 3)).toBe(2);
});