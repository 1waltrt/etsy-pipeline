function dividir(a, b) {
  return a / b;
}

const metaDividir = {
  nombre: 'dividir',
  descripcion: 'Divide dos números (a / b).',
  parametros: [
    { nombre: 'a', tipo: 'number' },
    { nombre: 'b', tipo: 'number' }
  ],
  ejecutar: dividir
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaDividir;
} else {
  window[metaDividir.nombre] = metaDividir;
}