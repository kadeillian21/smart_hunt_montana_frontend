import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2'

export function Charts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  // const labels =  wolves.map((wolf:Wolf) => wolf.region)
  // const wolfLicenseYears = wolves.map((wolf:Wolf) => wolf.license_year)
  // const data = {
  //   labels,
  //   datasets: [
  //   {
  //     label: "Total Wolf Harvest per Square Mile",
  //     data: wolves.map((wolf:Wolf) => wolf.total_harvest_per_square_mile)
  //   }
  // ]
  // }
  return(
    <div>
      <h2>Best Hunting District Vertical Bar Chart</h2>
      {/* <Bar options={options} data={data} /> */}
      <h2>Population Trend Multi-axis Bar Chart</h2>
    </div>
  )
}