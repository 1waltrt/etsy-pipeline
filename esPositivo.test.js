const esPositivo = require('./esPositivo');

   test('5 es positivo', () => {
     expect(esPositivo(5)).toBe(true);
   });