const { ejecutar } = require('./dividir');

test('10 / 2 es 5', () => {
  expect(ejecutar(10, 2)).toBe(5);
});