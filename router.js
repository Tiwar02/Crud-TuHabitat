const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (req, res)=>{

    
    conexion.query('SELECT * FROM reservas', (error, results)=>{
       if(error){
            throw error;
        }else{
            res.render('index' ,{results:results});
        }
    }); 
})


router.get('/create', (req, res) => {
    res.render('create');
})

//RUTA PARA EDITAR 
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM reservas WHERE id=?',[id], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.render('edit' ,{reservas:results[0]});
        }
    })
});

//RUTA PARA ELIMINAR
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM reservas WHERE id = ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})



const crud = require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports = router;