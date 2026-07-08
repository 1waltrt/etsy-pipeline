function sumarDosNumeros(a, b) {
  return a + b;
}

const meta = {
  nombre: 'sumarDosNumeros',
  descripcion: 'Suma dos números.',
  parametros: [
    { nombre: 'a', tipo: 'number' },
    { nombre: 'b', tipo: 'number' }
  ],
  ejecutar: sumarDosNumeros
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = meta;
} else {
  window[meta.nombre] = meta;
}