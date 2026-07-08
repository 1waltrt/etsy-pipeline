function sumarDosNumeros(a, b) {
  return a + b;
}

const meta = {
  nombre: 'sumarDosNumeros',
  descripcion: 'Suma dos números.',
  ejecutar: sumarDosNumeros,
  tipo: 'dosNumeros'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = meta;
} else {
  window[meta.nombre] = meta;
}