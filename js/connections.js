//Importa paquete mysql
var mysql = require('mysql');

//Accede a archivo que contiene Credeciales para acceder a la base de datos
const connection =require('key');

const pool = mysql.createPool(connection);


//conecta a mysql
pool.getConnection((err,connection)=>{
    //en caso de error
    console.log(err.code);
    console.log(err.fatal);
});

//Realiza consulta
$query = 'SELECT * FROM USUARIOS';

pool.query($query, function(err,rows,fields){
    if(err){
        console.log("Ha ocurrdio un error ejecutando la consulta");
        return;
    }
    console.log("Consulta ejecuta con exito", rows);
});

//Cerrar la conexion
pool.end(function(){
    
});