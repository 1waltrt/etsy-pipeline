const { ejecutar } = require('./sumar');

test('2 + 3 es 5', () => {
  expect(ejecutar(2, 3)).toBe(5);
});