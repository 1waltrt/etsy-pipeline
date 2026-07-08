function sumar(a, b) {
  return a + b;
}

const metaSumar = {
  nombre: 'sumar',
  descripcion: 'Suma dos números.',
  parametros: [
    { nombre: 'a', tipo: 'number' },
    { nombre: 'b', tipo: 'number' }
  ],
  ejecutar: sumar
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaSumar;
} else {
  window[metaSumar.nombre] = metaSumar;
}