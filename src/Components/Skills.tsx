import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

// import xd_icon from '../assets/xd.png';
// import ae_icon from '../assets/ae.png';
// import ps_icon from '../assets/ps.png';
// import ai_icon from '../assets/ai.png';

const Skills: React.FC = () => {
  const data = {
    labels: ['', 'Adobe XD', 'After Effects', 'Photoshop', 'Adobe Illustrator', ''],
    datasets: [{
      data: [4, 8, 7, 9.5, 8.3, 4],
      backgroundColor: 'black',
      borderColor: 'rgba(0, 0, 0, .1)',
      pointBorderWidth: 20
    }]
  };
  const options = {
    plugins: {
      legend: { display: false }, // or whatever legend options you need
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 5,
        max: 10,
        ticks: { stepSize: 2 },
      },
    },
  };
  return (
    <div id='skills' className='Skills'>
      <div className="container">
        <h3 className="Skills-name section-name">MY <span>SKI</span>LLS</h3>
        <Line data={data} options={options}/>
      </div>
    </div>
  )
}

export default Skills