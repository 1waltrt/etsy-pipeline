const fs = require('fs');
const path = require('path');

const carpetaFunciones = path.join(__dirname, '..', 'funciones');
const carpetaDestino = path.join(__dirname, '..', 'docs', 'funciones');

fs.mkdirSync(carpetaDestino, { recursive: true });

const archivos = fs.readdirSync(carpetaFunciones)
  .filter(archivo => archivo.endsWith('.js') && !archivo.endsWith('.test.js'));

const manifest = archivos.map(archivo => {
  const rutaOriginal = path.join(carpetaFunciones, archivo);
  const funcion = require(rutaOriginal);

  fs.copyFileSync(rutaOriginal, path.join(carpetaDestino, archivo));

  return {
    archivo: archivo,
    nombre: funcion.nombre,
    descripcion: funcion.descripcion
  };
});

fs.writeFileSync(
  path.join(__dirname, '..', 'docs', 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('Manifest generado con', manifest.length, 'funciones');