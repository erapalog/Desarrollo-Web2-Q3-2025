'use client'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
import { fetchEmpleadoDepto } from '@/app/Services/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement);

export default function page() {

  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: '',
      fill: true
    }]
  });

  useEffect(()=>{

    fetchEmpleadoDepto()
    .then(data=>{

      const label= data.map((item:any)=> `${item.DEPARTMENT_ID}- ${item.JOB_ID}`)
      const cantidadEmpleados= data.map((item:any)=> item.total_empleados);

      setCharData({
        labels:label,
        datasets:[{
          label:'Cantidad de empleados por departamento-Puesto',
          data:cantidadEmpleados,
          borderColor:'rgba(180, 166, 42, 1)',
          fill:true
        }]
      })
    })
    .catch(()=>alert("Ocurrio un error"))

  },[]);

  return (
    <div>


      {
        charData ? (
          <div>
            <h2>Grafico lineal/ empleados por departamento</h2>
            <Line data={charData}></Line>
          </div>
        )
        :
        (
          <p>INformacion se esta cargando</p>
        )

      }
    </div>
  )
}
