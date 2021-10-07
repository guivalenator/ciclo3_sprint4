//Importa paquete mysql
var mysql = require('mysql');
//Credeciales para acceder a la base de datos
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Mrdbhk1256I',
    database : 'mafecar',
});
//conecta a mysql
connection.connect(function(err){
    //en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
//Realiza consulta
$query = 'SELECT * FROM USUARIOS';

connection.query($query, function(err,rows,fields){
    if(err){
        console.log("Ha ocurrdio un error ejecutando la consulta");
        return;
    }
    console.log("Consulta ejecuta con exito", rows);
});

//Cerrar la conexion
connection.end(function(){
    
});