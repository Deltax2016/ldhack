import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'risk',
    headerName: 'Risk',
    type: 'percents',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, risk: 89.7 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, risk: 89.7 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, risk: 89.7 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, risk: 89.7 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, risk: 89.7 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, risk: 89.7 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, risk: 89.7 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, risk: 89.7 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, risk: 89.7 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width:'100%',marginTop:30, justifyContent: 'center'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}