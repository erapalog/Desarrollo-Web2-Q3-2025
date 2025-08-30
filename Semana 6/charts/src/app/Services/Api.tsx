import axios from "axios";


const API_URL="http://localhost:5000";

export async function fetchSumSalarioDepto(){

    const response=await axios.get(`${API_URL}/sum-salario-por-departamento`);
    return response.data;
}


export async function fetchEmpleadoDepto() {

    const response = await axios.get(`${API_URL}/conteo-empleados-por-depto`)
    return response.data.data;
}

export async function fetchSalarioMaximo(idDepto:number) {

     const response = await axios.get(`${API_URL}/salario-maximo-por-departamento/${idDepto}`)
    return response.data.data;
    
}