const fs = require('fs'); //paquete nativo de Node
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado (${ base }) no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.red);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('=============================='.green);
    console.log(`==== Tabla del ${ base } ====`.green);
    console.log('=============================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};