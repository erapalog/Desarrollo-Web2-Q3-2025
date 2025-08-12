const {Sequelize} = require('sequelize')

const sequelize= new Sequelize(
    'productos',
    'root',
    'admin123',
    {
        host: '127.0.0.1',
        port:3306,
        dialect: 'mysql'
    }

)

sequelize.authenticate()
    .then(()=>console.log("La conexino se hizo correctamente"))
    .catch(error=>console.log('Ocurrio un error' +error))

module.exports=sequelize;