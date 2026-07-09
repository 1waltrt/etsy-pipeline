function contarLetras(texto) {
  return texto.length;
}

const metaContarLetras = {
  nombre: 'contarLetras',
  descripcion: 'Cuenta cuántas letras tiene un texto.',
  parametros: [{ nombre: 'texto', tipo: 'text' }],
  ejecutar: contarLetras
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = metaContarLetras;
} else {
  window[metaContarLetras.nombre] = metaContarLetras;
}