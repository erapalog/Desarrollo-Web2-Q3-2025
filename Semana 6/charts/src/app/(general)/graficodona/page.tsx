'use client'
import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import { fetchSalarioMaximo } from '@/app/Services/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);


export default function page() {

  const [charData, setCharData]=useState({
    labels:[],
    datasets:[{
      data:[],
      backgroundColor:[] as any[]
    }]
  });

  fetchSalarioMaximo(20)
  .then(data=>{

      const label= data.map((item:any)=> `${item.DEPARTMENT_ID}`)
      const salarios= data.map((item:any)=> item.salario_maximo);

      setCharData({
        labels:label,
        datasets:[{
          data:salarios,
          backgroundColor:['rgba(255, 99, 132, 0.2)']
        }]
      })

  })
  .catch(()=> alert('Ocurrio un error'))

  return (
    <div>

      {
        charData ? (
          <div>
            <h2>Grafico de Dona</h2>
            <Pie data={charData}></Pie>
          </div>
        )
        :
        (
          <p>Cargando Informacion</p>
        )
      }

    </div>
  )
}
