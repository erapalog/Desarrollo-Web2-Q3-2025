const { DataTypes } = require('sequelize')
const sequelize= require('../db/Conexion')

const Producto =sequelize.define('producto',{
    idProducto :{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombreProducto:{
        type: DataTypes.STRING,
        allowNull:false
    } ,
    precioProducto:{
        type:DataTypes.FLOAT
    } ,
    isvProducto:{
        type:DataTypes.FLOAT
    } ,
    imgProducto:{
        type:DataTypes.STRING
    }

},
{
    tableName:'producto',
    timestamps:false
})

module.exports=Producto;