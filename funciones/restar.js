function restar(a, b) {
  return a - b;
}

const metaRestar = {
  nombre: 'restar',
  descripcion: 'Resta dos números (a - b).',
  parametros: [
    { nombre: 'a', tipo: 'number' },
    { nombre: 'b', tipo: 'number' }
  ],
  ejecutar: restar
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaRestar;
} else {
  window[metaRestar.nombre] = metaRestar;
}