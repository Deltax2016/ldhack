import React from 'react';
import {Bar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import green from '@material-ui/core/colors/green';

defaults.font.size = 20;

function Bars(props) {
	const {labels, data, dataNDFL} = props;
	return (
	<div>
	<Bar
	data={{
        labels: labels,
        datasets: [{
          label: "НПО",
          type: "bar",
          backgroundColor: "rgba(255, 170, 8, 1)",
          data: data,
        }, {
          label: "НДФЛ",
          type: "bar",
          backgroundColor: green[600],
          backgroundColorHover: "#3e95cd",
          data: dataNDFL,
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