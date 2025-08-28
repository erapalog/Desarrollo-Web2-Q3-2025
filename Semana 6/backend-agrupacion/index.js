const express = require('express')
const sequelize = require('./Conexion/database')
const Employee = require('./Modelos/Employee')

const app = express();

app.use(express.json())

//Get, 

//select SUM(salary) as 'Total Salario x DEpto',department_id from employees group by department_id
app.get('/sum-salario-por-departamento', async (req, resp) => {


    try {
        const resultado = await Employee.findAll({
            attributes: [
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'Salario_Total']
            ],
            group: ['DEPARTMENT_ID']
        });

        if (resultado.length > 0) {
            resp.json({ 'Mensaje': 'Datos Encontados', data: resultado })
        }
        else {
            resp.status(400).json({ 'Mensaje': 'Datos No Encontados', data: [] })
        }

    } catch (error) {
        resp.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })
    }



})

//select count(*), department_id,job_id from employees group by department_id,job_id order by job_id;
app.get('/conteo-empleados-por-depto', async (req, resp) => {
    try {

        const resultado = await Employee.findAll({
            attributes: ['DEPARTMENT_ID',
                'JOB_ID',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_empleados']
            ],
            group: ['DEPARTMENT_ID', 'JOB_ID']
        })

        if (resultado.length > 0) {
            resp.json({ 'Mensaje': 'Datos Encontados', data: resultado })
        }
        else {
            resp.status(400).json({ 'Mensaje': 'Datos No Encontados', data: [] })
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })

    }
});

app.get('/salario-maximo-por-departamento/:idDepto', async (req, resp) => {
    try {

        const { idDepto } = req.params;

        const resultado = await Employee.findAll({
            attributes: [
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'salario_maximo']
            ],
            where: { DEPARTMENT_ID: idDepto },
            group: ['DEPARTMENT_ID']
        })

        if (resultado.length > 0) {
            resp.json({ 'Mensaje': 'Datos Encontados', data: resultado })
        }
        else {
            resp.status(400).json({ 'Mensaje': 'Datos No Encontados', data: [] })
        }

    } catch (error) {
        resp.status(500).json({ 'Mensaje': 'Ocurrio un error', data: error })

    }
})
app.listen(5000, () => {
    console.log('Aplicaicon iniciada en puerto 5000')
})