const fs = require( 'fs' );
const colors = require('colors')

const crearArchivo = (base = 5) => {
    console.clear();
    console.log("============".red)
    console.log(`Tabla del ${ base }`)
    console.log("============".red)


    let salida = '';

    for( let x=1; x<=10; x++){
        salida += `${ base } multiplicado por ${ 'x'.green } ${ '='.green } ${ base * x }\n`;
    }   

    console.log( salida ); 

//Otra forma de hacer lo anterior, pero menos recomendada

//fs.writeFile(`tabla-${base}.txt`, salida, ( error ) => {
//        if( error ) throw error;
//        console.log('Archivo tabla-5.txt creado exitosamente!');
//    });

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
};

module.exports = {
    crearArchivo
}


const crearArchivo2 = async( base ) => {
    
    return new Promise( (resolve, reject)  => {
        console.log("============".red)
        console.log(`Tabla del ${ base }`)
        console.log("============".red)
    
        let salida = '';
    
        for( let x=1; x<=10; x++){
            salida += `${ base } multiplicado por ${ 'x'.green } ${ '='.green } ${ base * x }\n`;
        }   
    
        console.log( salida ); 
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt creado`);
    })
    
}

module.exports = {
    crearArchivo2
}

//Esta forma es mas simple que la de crearArchivo2, ya que no es necesario declarar dentro la promesa
//pero para controlar un posible error es necesario el try catch
const crearArchivo3 = async( base, listar, limite ) => {

    try{    
        let salida = '';
        let consola = '';
        
        for( let x=1; x<=limite; x++){
            salida += `${ base } x ${ x } = ${ base * x }\n`;
            consola += `${ base } ${ 'x'.green } ${ x } ${ '='.green } ${ base * x }\n`;
        }   
    
        if( listar ){
            console.log("============".red)
            console.log(`Tabla del ${ base }`)
            console.log("============".red)
            console.log( consola ); 
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    }catch ( error ){
        throw error
    }
 }
    
module.exports = {
    crearArchivo3
}