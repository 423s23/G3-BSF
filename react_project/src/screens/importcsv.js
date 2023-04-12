import React, {useEffect, useState} from "react";
import Papa from "papaparse";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function ImportCSV(){
    
    //Arrays to hold our file data
    const[parsedData, setParsedData] = useState([]);
    const [values, setValues] = useState([]);

    // THis is what happens when the upload file button is pressed
    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            // This is marked false, becuase there are no headers in the files
            header: false,
            //Skip any emppty lines
            skipEmptyLines: true,
            complete: function (results){
                const valuesArray =[];
                //Here we iterate datat to get column name and their values
                results.data.map((d) => {
                    valuesArray.push(Object.values(d));
                  });
            //Parsed data ub array format
            setParsedData(results.data);
            setValues(valuesArray);
            },
        });
        
    };
    //This is a single column table
    //This creates the field, and where we name it
    const columns = [
        {field: 'brCodes', headerName: 'Bridger Pass Codes', width: 'auto', editable: true}    
    ]
    
    // A little 'hacky' but gets the job done
    //This populates that row data
    let i = 0;
    const muiRow = parsedData.map((row) => {
        i++;
        return{
            id: i,
            brCodes: row
            
        };
    })

    
    return(
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
        <div style={{ textAlign: "center" }}>
        <h1>Import Ski Codes </h1>
        <form>
            <input
            type={"file"}
            name={"file"}
            accept=".xlsx, .xls, .csv"
            onChange={changeHandler}
            style={{ display: "block", margin: "10px auto" }}
            />

        </form>

        <br />

        <div style={{height: 400, width: 'auto'}}>
            <DataGrid
                getRowHeight={() => 'auto'}
                rows = {muiRow}
                columns = {columns}
                pageSize={10}
                hideFooterSelectedRowCount={true}
                disableRowSelectionOnClick
            />
        </div>

        <br />
        
        </div>
        </Box>
    </Container>
    );
}
