const { ejecutar } = require('./esPar');

test('4 es par', () => {
  expect(ejecutar(4)).toBe(true);
});