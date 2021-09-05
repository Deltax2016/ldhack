import React from 'react';
import {Bar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import green from '@material-ui/core/colors/green';

defaults.font.size = 20;

function Bars(props) {
	const {labels, data, dataNDFL, dataRisk} = props;
	return (
	<div style={{width: '40vw', height:'44vh', justifyContent:'center'}}>
	<Bar
	data={{
        labels: labels,
        datasets: [{
          label: "Реальные значения",
          type: "bar",
          backgroundColor: "rgba(255, 170, 8, 1)",
          data: data,
        }, {
          label: "Предсказание",
          type: "bar",
          backgroundColor: green[600],
          backgroundColorHover: "#3e95cd",
          data: dataNDFL,
        }, {
          label: "Риски",
          type: "bar",
          backgroundColor: '#f44336',
          backgroundColorHover: "#f44336",
          data: dataRisk,
        }
      ]
    }}
	height = {400}
	width = {600}
	options= {{
			maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Ступенчатая диаграмма'
                    }
                },
                legend: {
				      labels: {
				        padding: 20
				      }
				    }
            }}
	/>
	</div>
	)
}
export default Bars