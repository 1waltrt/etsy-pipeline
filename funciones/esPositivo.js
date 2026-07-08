function esPositivo(numero) {
  return numero > 0;
}

const metaEsPositivo = {
  nombre: 'esPositivo',
  descripcion: 'Verifica si un número es mayor que cero.',
  parametros: [{ nombre: 'numero', tipo: 'number' }],
  ejecutar: esPositivo
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaEsPositivo;
} else {
  window[metaEsPositivo.nombre] = metaEsPositivo;
}