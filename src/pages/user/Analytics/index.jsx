import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import { CarruselAnalytics} from "../Analytics/Componentes/CarruselAnalytics";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'KILOS',
    },
  },
};
const numeros =[ 12, 31,54, 767, 123, 65, 124]

const labels = ['SEMANA 1', 'SEMANA 2', 'SEMANA 3','SEMANA 4' ];
 const data = {
  labels,
  datasets: [
    {
      label: 'Ejercicio 1',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Ejercicio 2',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Ejercicio 3',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(103, 170, 25)',
      backgroundColor: 'rgba(103, 170, 25, 0.5)',
    },
  ],
};


const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'REPS',
    
    },
  },
};
const numeros2 =[ 12, 31,54, 767, 123, 65, 124]

const labels2 = ['SEMANA 1', 'SEMANA 2', 'SEMANA 3','SEMANA 4' ];
 const data2 = {
  labels,
  datasets: [
    {
      label: 'Ejercicio 1',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Ejercicio 2',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Ejercicio 3',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(103, 170, 25)',
      backgroundColor: 'rgba(103, 170, 25, 0.5)',
    },
  ],
};




export default function PageAnalytics() {
  return (
    <div className="h-screen ">
      <main>
        <HeaderRoutine title="Progresiones" />
   
      <CarruselAnalytics/>
       

        <div className="mx-auto mb-20 max-w-3xl" >
        <Line options={options} data={data} />
        <Line options={options2} data={data2} />
        </div>
      </main>
    </div>
  );
}


