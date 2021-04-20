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
router.post('/saveR', crud.saveR)
router.post('/updateR', crud.updateR)


router.get('/indexIns', (req, res)=>{

    
    conexion.query('SELECT * FROM instalaciones', (error, results)=>{
       if(error){
            throw error;
        }else{
            res.render('indexIns' ,{results:results});
        }
    }); 
})

router.get('/createIns', (req, res) => {
    res.render('createIns');
})

//RUTA PARA EDITAR 
router.get('/editIns/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM instalaciones WHERE id=?',[id], (error,results) =>{
        if(error){
            throw error;
        }else{
            res.render('editIns' ,{instalaciones:results[0]});
        }
    })
});

router.get('/deleteIns/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM instalaciones WHERE id = ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect('/indexIns');
        }
    })
})

module.exports = router;

