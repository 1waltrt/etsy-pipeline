function esPar(numero) {
  return numero % 2 === 0;
}

const meta = {
  nombre: 'esPar',
  descripcion: 'Verifica si un número es par.',
  ejecutar: esPar
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = meta;
} else {
  window[meta.nombre] = meta;
}