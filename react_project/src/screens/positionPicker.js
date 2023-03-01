
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
const theme = createTheme();
const columns = [
 
  { field: 'pos', headerName: 'Position', width: 130 },
  { field: 'desc', headerName: 'Description', width: 412 },
  
];

const rows = [
  { id: 1, desc: 'Non-licensed, volunteer position. Some experience helpful but not required. Meet with Head Gatekeeper at 8:15am at the BSF team room. Be at Start 20min prior to race for gate assignment.', pos: 'Gate Keepers' },
  { id: 2, desc: 'Official position. Must have current Referee/JA license. Load lift at 8:15am and set up finish corral & finish eyes. BSF first right of refusal.', pos: 'Finish Referee'},
  { id: 3, desc: 'N/A', pos: 'Bird Watcher'},
];

export default function PositionPicker() {
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
        <div style={{ height: 400, width: '150%' }}>
        <DataGrid
            getRowHeight={() => 'auto'}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterSelectedRowCount={true}
            onSelectionModelChange={(selection) => {
                if (selection.length > 1) {
                /*  const selectionSet = new Set(selectionModel);*/
                 /* const result = selection.filter((s) => !selectionSet.has(s));*/
        
                  /*setSelectionModel(result);*/
                } else {
                  /*setSelectionModel(selection);*/
                }
            }
            }
        />
        </div>
        </Box>
        </Container>
        
    </ThemeProvider >
      
    
  );
}