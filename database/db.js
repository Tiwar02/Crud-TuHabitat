const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'reservas_db'
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Esta conectado a la bd');
})

module.exports = conexion;