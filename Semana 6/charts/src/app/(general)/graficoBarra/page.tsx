'use client'
import { fetchSumSalarioDepto } from '@/app/Services/Api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function page() {

  const [charData, setCharData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: ''
    }]
  });


  useEffect(() => {
    fetchSumSalarioDepto()
      .then(data => {

        const departamentoLabel = data.data.map((item: any) => item.DEPARTMENT_ID);
        const salarios = data.data.map((item: any) => item.Salario_Total);

        setCharData({
          labels: departamentoLabel,
          datasets: [{
            label: 'Salario totales por departamentos',
            data: salarios,
            backgroundColor: 'rgb(75,89,0)'
          }

          ]
        })

      })
      .catch((error) => alert('Ocurrio un error al invocar el servicio'+error))
  }, []);

  return (
    <div>
      {
        charData ? (
          <div>
            <h3>Grafico de barras</h3>
            <Bar data={charData}></Bar>
          </div>

        )
          :
          <p>Informacion Cargando...</p>
      }
    </div>
  )
}
