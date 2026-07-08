function restar(a, b) {
  return a - b;
}

const meta = {
  nombre: 'restar',
  descripcion: 'Resta dos números (a - b).',
  parametros: [
    { nombre: 'a', tipo: 'number' },
    { nombre: 'b', tipo: 'number' }
  ],
  ejecutar: restar
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = meta;
} else {
  window[meta.nombre] = meta;
}