
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
const theme = createTheme();
const columns = [

  { field: 'pos', headerName: 'Position', width: 130 },
  { field: 'desc', headerName: 'Description', width: 412 },
  { field: 'num', headerName: 'Volunteers Needed', width: 150 },

];

const rows = [
  { id: 1, desc: 'Non-licensed, volunteer position. Some experience helpful but not required. Meet with Head Gatekeeper at 8:15am at the BSF team room. Be at Start 20min prior to race for gate assignment.', pos: 'Gate Keepers' },
  { id: 2, desc: 'Official position. Must have current Referee/JA license. Load lift at 8:15am and set up finish corral & finish eyes. BSF first right of refusal.', pos: 'Finish Referee' },
  { id: 3, desc: 'N/A', pos: 'Bird Watcher' },
];


export default function PositionPicker() {
  const cellClickRef = React.useRef(null);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const RaceId = "hhIyHeFAC7HiyoHhf6Qi"
  const [PositionData, setPositionData] = useState([]);
  useEffect(() => {
    axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + RaceId + "/positions")
      //axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/abstractPositions/')
      .then(function (response) {
        setPositionData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setPositionData("There was an error: " + error)
      })
  }, [])


  const testRow = PositionData.map(test => {
    return {
      id: test.PositionId,
      desc: test.Position,
      pos: test.PositionId,
      num: test.VolunteersNeeded
    }
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ height: 400, width: '190%' }}>
          <DataGrid
            getRowHeight={() => 'auto'}
            rows={testRow}
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
      </Box>
      <p>
        {JSON.stringify(PositionData, null, 2)}
      </p>

    </Container>

            

  );
}