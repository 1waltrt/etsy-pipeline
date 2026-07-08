const { ejecutar } = require('./esPositivo');

test('5 es positivo', () => {
  expect(ejecutar(5)).toBe(true);
});