import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

import Bars from './Bars';
import Line from './Line';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';
import background from "./BACKGROUND.png";
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    backgroundColor: grey[800],
    borderRadius: 20,
  },
   large: {
    width:80,
    marginTop:'2vh',
    marginLeft: theme.spacing(12),
    height:'70px',
    borderRadius: 15,

  },
    formControl: {
    marginTop:'2vh',
    marginLeft: theme.spacing(3),
    minWidth: 120,
    border: '2px solid #9e9e9e',
    borderRadius: 15,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  box: {
      backgroundColor: 'white',
      borderRadius: 20,
    },

  text:{
    marginRight: theme.spacing(3),

    color: grey[300],
  },
  butt:
  {
    color: grey[100],

    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: 15,
    border: '2px solid #00B337',
    width: '20vw',
    '&:hover': {
      backgroundColor: green[600],
      borderColor: green[600],
      boxShadow: 'none',
    },
  },
  buttRisk:
  {
    color: grey[100],
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: 15,
    border: '2px solid #FFA900',
    width: '20vw',
    '&:hover': {
      backgroundColor: '#FFA900',
      borderColor: '#FFA900',
      boxShadow: 'none',
    },
  },

}));

const columns = [
  { field: 'id', headerName: 'ID', width: 100},
  {
    field: 'firstName',
    headerName: 'Лесоматериалы (тыс.кб/м.)',
    width: 260,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Скот и птица (тыс.тонн)',
    width: 250,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Налог на прибыль',
    type: 'number',
    width: 200,
    editable: true,
  },
];

const columnsSec = [
  { field: 'id', headerName: 'Год', width: 100},
  {
    field: 'firstName',
    headerName: 'Оборот розничной торговли',
    width: 260,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Объем платных услуг населению',
    width: 250,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Фонд заработной платы',
    type: 'number',
    width: 200,
    editable: true,
  },
   {
    field: 'a',
    headerName: 'железорудные окатыши. тыс.тонн',
    width: 260,
    editable: true,
  },
  {
    field: 'b',
    headerName: 'древесина необработанная. тыс.куб.м.',
    width: 250,
    editable: true,
  },
  {
    field: 'c',
    headerName: 'мешки бумажные. млн.шт.',
    type: 'number',
    width: 200,
    editable: true,
  },
    {
    field: 'd',
    headerName: 'НДФЛ значения',
    type: 'number',
    width: 200,
    editable: true,
  },
];


const rows = [
  { id: 1, lastName: 641.00, firstName: 12.20, age: 3980212142.40},
  { id: 2, lastName: 689.60, firstName: 11.80, age: 6262562069.63},
  { id: 3, lastName: 670.80, firstName: 11.70, age: 5279887784.70},
  { id: 4, lastName: 621.80, firstName: 12.60, age: 2200021502.01},
  { id: 5, lastName: 687.70, firstName: 12.10, age: 1837840442.62},
  { id: 6, lastName: 703.60, firstName: 12.10, age: 3114014266.32},
  { id: 7, lastName: 724.10, firstName: 11.50, age: 4280042099.75},
  { id: 8, lastName: 782.10, firstName: 8.10, age: 4022683492.19},
  { id: 9, lastName: 854.10, firstName: 5.50, age: 8128882485.27},
  { id: 10, lastName: 945.60, firstName:5.10, age: 8162340492.33},

];
const rowsSec = [
  { id: 2009, lastName: 53440.3, firstName: 15758.5, age: 51718.7, a:8533.0, b:5309.40, c:316.00, d:4633271242.06},
  { id: 2010, lastName: 60033.4, firstName: 17128.8, age: 54935.5, a:9790.1, b:5517.5, c:337.50, d:5071976900.53},
  { id: 2011, lastName: 69919.6, firstName: 20254.7, age: 60180.00, a:10120.0, b:5481.2, c:351.70, d:5533844914.83},
  { id: 2012, lastName: 78438.8, firstName: 22655.6, age: 67080.0, a:10325.00, b:5406.00, c:368.70, d:5901864384.86},
  { id: 2013, lastName: 86819.8, firstName: 25093.7, age: 72633.2, a:10560.0, b:5860.1, c:407.60, d:7078488026.54},
  { id: 2014, lastName: 97333.1, firstName: 27318.4, age: 74523.9, a:10589.9, b:6053.3, c:421.80, d:6848875168.12},
  { id: 2015, lastName: 103880.9, firstName: 28843.0, age: 75642.5, a:10624.0, b:6269.4, c:395.20, d:7238028674.73},
  { id: 2016, lastName: 107326.0, firstName: 30795.6, age: 76762.8, a:10877.5, b:6681.4, c:453.90, d:7678123844.12},

  { id: 2017, lastName: 112645.0, firstName: 33410.2, age: 80426.1, a:11170.0, b:6829.3, c:427.00, d:8771476122.73},
  { id: 2018, lastName: 121317.8, firstName:34583.4, age: 90725.00, a:11200.0, b:6703.2, c:491.90, d:8933293474.95},
];

export default function DataTable() {
  const classes = useStyles();

  const [RealRow, setRealRow] = React.useState([{id: ""}]);
  var PredicRow = {id: ""};
  var ColumnReal = [{field: 'id', headerName: 'Год'}];
  const [rowz,setRowz] = React.useState(RealRow);
  const [columz,setColumz] = React.useState(ColumnReal);
  const [jsonTable, setJsTable] = React.useState('');
  const [Json,setJson] = React.useState({});

  async function getJson() {
    let url = 'https://b61f-62-84-114-189.ngrok.io/all'
    let response = await fetch(url);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json();
      //console.log(json);
      setJson(json);

    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
  React.useEffect(()=>{
    getJson();
  },[]);
    
    const handleChange = (event) => {
      setJsTable(event.target.value.toString());
      console.log(event.target.value);
      funcReal(event.target.value.toString());
      funcPrediction(event.target.value.toString());
    };



  function getJsValue(val)
  {
    console.log(Json, val);
    if (val === '0')
    {
        return [Json.all_real, Json.all_prediction];
    }
    if (val === '1')
    {
        return [Json.all_real, Json.all_prediction];
    }
    if (val === '2')
    {
        return [Json.ndfl_real, Json.ndfl_prediction];
    }
    if (val === '3')
    {
        return [Json.npo_real, Json.npo_prediction];
    }
  }


  function funcReal(val) {
    if (val === undefined) val = jsonTable;

    let rows = getJsValue(val);
    setRowz(rows[0]);

    var list = [];
    for (var i in rows[0][0]) {
      console.log(i)
      list.push({ field: i, headerName: i, width: 200},);
    }
    setColumz(list);
  }

  function funcPrediction(val) {
    if (val === undefined) val = jsonTable;
    let rows = getJsValue(val);
    setRowz(rows[1]);

    var list = [];
    for (var i in rows[1][0]) {
      console.log(i)
      list.push({ field: i, headerName: i, width: 200},);
    }
    setColumz(list);
  }
  const chartBox = {
    width: '100%',
    marginTop:'2vh',
    marginBottom:'2vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  }
  const chartBoxSec = {
    width: '100vw',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  }
  const GridBox = {
    backgroundImage: `url(${background})`,
    position: 'absolute',
    bottom: 0,
    top: 0,
    justifyContent:'center',
    alignItems: 'center',
  }
  const Allign = 
  {
    height: '320px',
    width:'60%', 
    alignItems: 'center', 
    justifyContent: 'center',
  }
  const  BarBox = {
    padding: '10px',
    backgroundColor: 'white',
    border: '2px solid #00B337',
    borderRadius: '20px',
  }

  return (
   <Grid container   direction="row-reverse" justifyContent="space-around" alignItems="center">
    <div style={GridBox}>
      <div style= {chartBox}>

          <div style={Allign}>

              <DataGrid className={classes.box}
                rows={rowz}
                columns={columz}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
              />
          </div>


              <Card className={classes.root}>
              <CardActionArea>
              <div style={{display:'flex'}}>
                <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="filled-age-native-simple" style={{color:"#e0e0e0"}}>Таблица</InputLabel>
                <Select
                  labelId="filled-age-native-simple"
                  id="filled-age-native-simple"
                  value={jsonTable}
                  onChange={handleChange}
                  label="jsTable"
                >
                  <MenuItem value={0}>
                    <em>-</em>
                  </MenuItem>
                  <MenuItem value={1}>
                    <Typography style={{color:"#9e9e9e"}}>
                      Все
                    </Typography></MenuItem>
                   <MenuItem value={2}>
                    <Typography style={{color:"#9e9e9e"}}>
                      НДФЛ
                    </Typography></MenuItem>
                    <MenuItem value={3}>
                    <Typography style={{color:"#9e9e9e"}}>
                      НПО
                    </Typography></MenuItem>
                    <MenuItem value={10}>
                    <Typography style={{color:"#9e9e9e"}}>
                      Расходы
                    </Typography></MenuItem>
                </Select>
              </FormControl>
                <Avatar variant="rounded" className={classes.large}/>
                 </div>
                  <CardContent>

                    <Typography align="right" variant="h6" component="h4" className={classes.text}>
                      Ваше Имя
                    </Typography>
                    <Typography align="right" variant="p" component="p" className={classes.text}>
                      Компания
                    </Typography>
                  </CardContent>

                </CardActionArea>
                

                <CardActions>
                  <Button variant="outlined" size="medium" className={classes.butt} onClick={()=>funcReal()}>
                    Реальные данные
                  </Button>
                </CardActions>
                         <CardActions>
                  <Button variant="outlined" size="medium" className={classes.butt} onClick={()=>funcPrediction()}>
                    Предсказания
                  </Button>
                </CardActions>
                         <CardActions>
                  <Button variant="outlined" size="medium" className={classes.buttRisk}>
                    Оцените Риски
                  </Button>
                </CardActions>
              </Card>
        </div>
        <div style= {chartBoxSec} >
          <div style= {BarBox}>
            <Bars labels={rowsSec.map((it)=> it.id.toString())} data={rows.map((it)=> it.age)} dataNDFL={rowsSec.map((it)=> it.d)}/>
          </div>
          <div style= {BarBox}>
            <Line labels={rowsSec.map((it)=> it.id.toString())} data={rows.map((it)=> it.age)} dataNDFL={rowsSec.map((it)=> it.d)}/>
          </div>
        </div>
    </div>
</Grid>

  );
}
