const {  DataTypes } = require('sequelize')
const sequelize  =require('../db/connection');

const Gasto = sequelize.define('gasto', {

    idgasto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria : {
        type:DataTypes.STRING,
        allowNull: false
    },
    monto:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fecha :{
        type:DataTypes.DATE,
        allowNull: false
    },
},
{
    tableName:'gasto',
    timestamps: false,
}

);

module.exports= Gasto
