const { crearArchivo3 } = require( './utils/multiplicar' );
const argv = require( './config/yargs.js' )
require( 'colors' )
 
crearArchivo3( argv.b, argv.l, argv.e )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ))
    .catch( error => console.log( error ))


// A traves del siguiente codigo se obtiene un parametro desde consola
// el valor recibido se splitea con el signo = y se extrae el valor
//console.log( process.argv );
//const [,,arg3] = process.argv; 
//const [,valorBase] = arg3.split('=');
//console.log(valorBase);
