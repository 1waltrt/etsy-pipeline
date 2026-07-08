function esPositivo(numero) {
  return numero > 0;
}

const meta = {
  nombre: 'esPositivo',
  descripcion: 'Verifica si un número es mayor que cero.',
  ejecutar: esPositivo
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = meta;
} else {
  window[meta.nombre] = meta;
}