const express = require('express')
const { where } = require('sequelize')
const Gasto = require('./Modelos/Gasto')

var cors = require('cors')

const app= express()

app.use(express.json())
app.use(cors())

app.get('/gasto', async (req,res) =>{

    try {
        
        const gastos = await Gasto.findAll();

        res.status(200).json(gastos);

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error'});
    }
})


app.post('/gasto', async (req,res) =>{

    try {
        

        console.log(req.body)
        const gasto = await Gasto.create(req.body)
        

        res.status(200).json({'mesnaje': 'gasto agregado correctamente'});

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error' + error});
    }
})

app.put('/gasto/:idgasto', async (req,res) =>{

    try {
        

        const [updated] = await Gasto.update(req.body,{
            where: {idgasto: req.params.idgasto}
        })

        if(updated){
            res.status(200).json({'mesnaje': 'gasto actualizado correctamente'});
        }
        else{
            res.status(400).json({'mesnaje': 'No se actualizo'});
        }
       

    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error' + error});
    }
})



app.delete('/gasto/:idgasto', async (req, res) => {
    try {
        const deleted = await Gasto.destroy({
            where: { idgasto: req.params.idgasto },
        });
        if (deleted) {
            res.status(200).send({'mesnaje': 'gasto eliminado correctamente'});
        } else {
            res.status(404).json({ error: 'gasto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar gasto' +error});
    }
});

app.listen(5000,()=>{
    console.log('aplcacion ejecutando en puerto 5000')
})