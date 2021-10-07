// el array a ordenar
var items = [
  { usuario: 'Edward', edad: 21 , contrasena:'jaja'},
  { usuario: 'PANCHO', edad: 37 , contrasena:'jaja'},
  { usuario: 'jUANCHO', edad: 45 , contrasena:'jaja'},
  { usuario: 'TheRESA', edad: -12 , contrasena:'jaja'},
  { usuario: 'MagneticO', edad: 13 , contrasena:'jaja'},
  { usuario: 'Zeros', edad: 37 , contrasena:'jaja'}];

console.log("Hola mundo");
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
console.log(result);
