function esPar(numero) {
  return numero % 2 === 0;
}

const metaEsPar = {
  nombre: 'esPar',
  descripcion: 'Verifica si un número es par.',
  parametros: [{ nombre: 'numero', tipo: 'number' }],
  ejecutar: esPar
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaEsPar;
} else {
  window[metaEsPar.nombre] = metaEsPar;
}