const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra tabla en consola'
    })
    .option('e', {
        alias: 'end',
        type: 'number',
        default: 10,
        describe: 'Limite de registros a visualizar en tabla'
    })
    .check( (argv, options) => {
       if( isNaN( argv.b ) ) {
            throw 'La base tiene debe ser numerico' 
        }
        return true;
    } ) 
    .argv;

module.exports = argv;