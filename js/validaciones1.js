function validar_nombre_usuario(string) {
    var dato_nombre_usuario;
    dato_nombre_usuario = document.getElementById("dato_nombre_usuario").value;

    if (/^[a-zA-Z]+$/.test(dato_nombre_usuario)) {
        if (/^[A-Z]/.test(dato_nombre_usuario)) {
            if (dato_nombre_usuario.charAt(0) != ' ' && dato_nombre_usuario.charAt(dato_nombre_usuario.lenght) != ' ') {
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false
}

function validar_edad_usuario(edad) {
    var dato_edad_usuario;
    dato_edad_usuario = document.getElementById("dato_edad_usuario").value;

    if (!isNaN(dato_edad_usuario)) {
        if (dato_edad_usuario > 0) {
            if ((dato_edad_usuario > 13) && (dato_edad_usuario < 110)) {
                console.log(true);;
                return true;
            }
        }
        
    } 
    console.log(false);
    return false;
}

function validar_contrasena(string) {
    var dato_contrasena;
    //expresion = /[A-Za-z0-9]+$/;
    expresion = /[a-z]+$/;
    dato_contrasena = document.getElementById("dato_contrasena").value;

    

    if (dato_contrasena.lenght == 6) {
      console.log(dato_contrasena);
       if (expresion.test(dato_contrasena)) {
          console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}
function enviar_formulario(){
    
    console.log("Formulario enviado")
}

//================================================//
//Enviar formularo


var registros = [];

function agregarRegistro() {
    let usuario = document.getElementById("dato_nombre_usuario").value;
    let edad = document.getElementById("dato_edad_usuario").value;
    let contrasena = document.getElementById("dato_contrasena").value;
    
    console.log(usuario);
    console.log(edad);
    console.log(contrasena);

    registros.push({
        usuario: usuario,
        edad: edad,
        contrasena: contrasena
    });
    
    console.log(registros);
    OrdenarArreglo(registros);
    
}

function OrdenarArreglo(registros) {
    registros.sort(function (a, b) {
        if (a.edad > b.edad) {
            return 1;
        }
        if (a.edad < b.edad) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(registros);
    return registros;
}

//module.exports.registros = registros;
//module.exports.agregarRegistro = agregarRegistro;
//module.exports.ordenarArreglo = OrdenarArreglo;



/*

// el array a ordenar
var items = [
  { "usuario": "Edward", "edad": 21 , "contrasena":"jaja"},
  { "usuario": "PANCHO", "edad": 37 , "contrasena":"jaja"},
  { "usuario": "jUANCHO", "edad": 45 , "contrasena":"jaja"},
  { "usuario": "TheRESA", "edad": -12 , "contrasena":"jaja"},
  { "usuario": "MagneticO", "edad": 13 , "contrasena":"jaja"},
  { "usuario": "Zeros", "edad": 37 , "contrasena":"jaja"}];

//console.log("Hola mundo");
ordenar(items);


function ordenar(items) {
  items.sort(function (a, b) {
    if (a.edad > b.edad) {
      return 1;
    }
    if (a.edad < b.edad) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(items);
    //console.log(items.join('\n') + '\n\n')
    division=document.getElementById("imprime_arreglo");
    items.forEach(function(item, index, array) {
    console.log(item, index)
    division.innerHTML=(item,index);
    })
    //items.forEach=(element => console.log(element));
    //division.innerHTML=item;
}

items.push({ usuario: 'Falcao', edad: 37 , contrasena:'jaja'});
items.push({ usuario: 'Neymar', edad: 30 , contrasena:'jaja'});
items.push({ usuario: 'Messi', edad: 32 , contrasena:'jaja'});

// ejemplo sort com MAP
var mapped = items.map(function (el, i) {
  return { index: i, edad: el.edad };
})

// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function (a, b) {
  if (a.edad > b.edad) {
    return 1;
  }
  if (a.edad < b.edad) {
    return -1;
  }
  return 0;
});

// contenedor para el orden resultante
var result = mapped.map(function (el) {
  return items[el.index];
});
//console.log(result);

*/
//module.exports.validar_nombre_usuario = validar_nombre_usuario;
//module.exports.validar_edad_usuario = validar_edad_usuario;
//module.exports.validar_contrasena = validar_contrasena;
