
import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
const theme = createTheme();


const edit = (Selection) => {
    console.log('Needs API calls to be fully working.')
}

const columns = [
 
  { field: 'vol', headerName: 'Volunteer', width: 130 },
  { field: 'job', headerName: 'Signed Up For:', width: 412 },
  { field: 'time', headerName: 'Time Slot:', width: 130},
  
];

const rows = [
  { id: 1, job: 'Gate Judge', vol: 'Nathan Parnell', time: '13:00-13:15'},
  { id: 2, job: 'Race Coordinator', vol: 'Guy McDude', time: '00:00 - 23:59'},
  { id: 3, job: 'Freeloader', vol: 'David', time: '00:00 - 00:00'},
];


export default function PositionPicker() {
const cellClickRef = React.useRef(null);
const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
        <div style={{ height: 400, width: '190%' }}>
        <DataGrid
            getRowHeight={() => 'auto'}
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            rowsPerPageOptions={[5]}
            hideFooterSelectedRowCount={true}
            selectionModel={selectionModel}
            onCellClick={() => (cellClickRef.current = true)}
            onSelectionModelChange={(selection, detail) => {
              if (cellClickRef.current) {
                if (selection.length > 1) {
                  const selectionSet = new Set(selectionModel);
                  const result = selection.filter((s) => !selectionSet.has(s));
      
                  setSelectionModel(result);
                } else {
                  setSelectionModel(selection);
                }
              } else {
                setSelectionModel(selection);
              }
              cellClickRef.current = null;
            }}
        />
        </div>
        <React.Fragment>
            <Box 
            sx={{
                pt:2,
                alignItems: 'center'}}>
                <Button onClick = {edit(Selection)}>
                    {'Edit'}
                </Button>
            </Box>
        </React.Fragment>
        </Box>
        </Container>
        
    </ThemeProvider >
      
    
  );
}