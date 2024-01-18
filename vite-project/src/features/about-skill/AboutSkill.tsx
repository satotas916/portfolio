import styled from "styled-components";
import TitleComponent from "../../components/title/Title";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const title = { title:'Skill', icon: 'frame_person' }

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`
const Skill = styled.div`
  width: 820px;
  margin: 45px auto 0;
`

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
};

const data = {
  labels: ['html', 'css', 'js', 'ts', 'vue', 'react'],
  datasets: [{
    label: 'My Skill',
    data: [100, 100, 90, 80, 80, 60],
    backgroundColor: [
      'rgb(255, 99, 132, 0.4)',
      'rgb(255, 159, 64, 0.4)',
      'rgb(255, 205, 86, 0.4)',
      'rgb(75, 192, 192, 0.4)',
      'rgb(54, 162, 235, 0.4)',
      'rgb(153, 102, 255, 0.4)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)'
    ],
    borderWidth: 1
  }],
};

function AboutSkill() {
  return (
    <Container>
      <TitleComponent {...title} />
      <Skill>
        <Bar data={data} options={options} />
      </Skill>
    </Container>
  )
}

export default AboutSkill