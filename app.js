console.clear()

// Importar paquetes
const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require('./config/yargs.js')


crearArchivo( argv.base,argv.listar, argv.hasta )
  .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
  .catch( error => console.log( error))


