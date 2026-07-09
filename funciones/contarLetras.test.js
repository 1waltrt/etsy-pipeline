const { ejecutar } = require('./contarLetras');

test('hola tiene 4 letras', () => {
  expect(ejecutar('hola')).toBe(4);
});