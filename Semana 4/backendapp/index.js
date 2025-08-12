const express= require('express')

const Producto= require('./Modelos/Producto')

const app= express();

var cors=require('cors')

app.use(express.json());

app.use(cors())

//get --> extraer informacion
//post -> extraer informacion , almacenar 
//put --> actualizar informacion
//delete -->eliminar informacion
//patch

//codigos de repuesta

//200 --> todo haya silido ok
//400 .--> no encontremos informacion
//500 --> errores

//request --> todo lo que recibo,
//response --> es todo es lo que devuelve

app.get('/producto',async(req,res)=>{

    try {

        //select *from producto

        const listaProducto= await Producto.findAll();

        if(listaProducto.length>0){
            res.status(200).json(listaProducto);
        }
        {
            res.status(400).json({"Mensaje":'No hay productos'})
        }
        
    } catch (error) {
        
        res.status(500).json({"Error":'Ocurrio un error' + error});
    }

});

app.post('/producto',async(req,res)=>{
    try {

        console.log(req.body);
        const producto = await Producto.create(req.body);

        res.status(200).json({"Mensaje":'Agregado Correctamente' , 'data':producto});


        
    } catch (error) {
         res.status(500).json({"Error":'Ocurrio un error' + error});
    }
})


app.put('/producto/:idProducto',async(req,res)=>{
    try {

        //update producto set nombre,adsad,sadasd, where
        const producto = await Producto.update(req.body,{
            where: {idProducto:req.params.idProducto}
        });

        res.status(200).json({"Mensaje":'Producto actualizado Correctamente' , 'data':producto});


        
    } catch (error) {
         res.status(500).json({"Error":'Ocurrio un error' + error});
    }
})


app.delete('/producto/:idProducto',async(req,res)=>{
    try {

        const producto = await Producto.destroy({
            where: {idProducto:req.params.idProducto}
        });

        res.status(200).json({"Mensaje":'Producto Eliminado Correctamente'});


        
    } catch (error) {
         res.status(500).json({"Error":'Ocurrio un error' + error});
    }
})


app.listen(5000,()=>{
    console.log('Aplicacion ejecutada correctamente en puerto 5000')
})