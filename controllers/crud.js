const conexion = require('../database/db');

exports.save = (req,res) => {
    const id_usuario = req.body.id_usuario;
    const fecha = req.body.fecha;
    const instalacion = req.body.instalacion;
    const num_personas = req.body.num_personas;
    //console.log(id_usuario + " - " + fecha + " - " + instalacion + " - " + num_personas);
    conexion.query('INSERT INTO reservas SET ?' ,{id_usuario:id_usuario, fecha:fecha, instalacion:instalacion, num_personas:num_personas}, (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}


exports.update = (req, res) => {
    const id = req.body.id;
    const id_usuario = req.body.id_usuario;
    const fecha = req.body.fecha;
    const instalacion = req.body.instalacion;
    const num_personas = req.body.num_personas;
    conexion.query('UPDATE reservas SET ? WHERE id = ?', [{id_usuario:id_usuario, fecha:fecha, instalacion:instalacion, num_personas:num_personas}, id], (error, results)=> {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    }) 
}
