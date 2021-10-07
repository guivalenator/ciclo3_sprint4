let registros = [];

function agregarRegistro() {
    let usuario = document.getElementById("dato_nombre_usuario").value;
    let edad = document.getElementById("dato_edad_usuario").value;
    let contrasena = document.getElementById("dato_contrasena").value;

    registros.push({
        usuario: usuario,
        edad: edad,
        contrasena: contrasena
    });

    console.log(registros);
}

function OrdenarArreglo(arreglo) {
    arreglo.sort((a, b)=> {
        if (a.edad > b.edad) {
            return 1;
        }
        if (a.edad < b.edad) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(arreglo);
    return arreglo;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;
