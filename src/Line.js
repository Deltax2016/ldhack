import React from 'react';
import {Line} from 'react-chartjs-2';
import green from '@material-ui/core/colors/green';

function Lines(props){
    const {labels, data, dataNDFL} = props;
	return (
	<div style={{width: '40vw', height:'44vh'}}>
	<Line
	data={{
        labels: labels,
        datasets: [{
          label: "НПО",
          type: "line",
          backgroundColor: "rgba(255, 170, 8, 1)",
          data: data,
        }, {
          label: "НДФЛ",
          type: "line",
          backgroundColor: green[600],
          backgroundColorHover: "#3e95cd",
          data: dataNDFL
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
                        text: 'Значения НПО/НДФЛ в рублях'
                    }
                }
            }}
	/>
	</div>
	)
}
export default Lines