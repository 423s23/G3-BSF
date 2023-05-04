import React, {useState} from "react";
import Papa from "papaparse";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import { useLoaderData } from "react-router-dom";

import { getRace, Race } from '../models/racemodel';
import axios from "axios";
import { ThemeContext } from "@mui/styled-engine";

export async function loader({ params }) {
    let race = new Race();
    race = getRace(params.raceId)
    return race;
}

export default function ImportCSVScreen(){
    
    //Arrays to hold our file data
    const[parsedData, setParsedData] = useState([]);
    const [race, updateRace] = useState(useLoaderData());
    const [values, setValues] = useState([]);
    const [disabled, setDisabled] = useState(false);    

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
            console.log(valuesArray)
            },
        });
        
    };
    const [uploadingvouchers, uploadingVouchers] = useState([]);
    const uploadToFirebase = function() {
        for(let j = 0; j < values.length; j++){

        
        console.log("I work")
        axios.post('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/uploadvoucherlist',
        {
            voucherCode: values[j], 
        },
        ).then(function (response) {
            console.log(response.data)
          }).catch(function (error) {
            // handle error
            console.log(error.response.data);
            console.log("There was an error: " + error)
          })
        }
        setDisabled(true);

    }
    //another fucntion that goes through all the entries in 
    // the results array and calls sendTODb on that index
    
    /*
    function goThroughCSV(){
        for(let j = 0; j< setParsedData.length; j++){
            sendToDB(setParsedData[j]);
        }
    }*/


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
        <Button variant="contained" component="label">
            Import Codes
            <input hidden  accept=".xlsx, .xls, .csv" multiple type="file"  onChange={changeHandler}/>
        </Button>
        <br />
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
        <br />
        <Button disabled ={disabled} variant="contained" component="label" onClick={uploadToFirebase}>
            Upload Codes
        </Button>

        </div>
        </Box>
    </Container>
    );
}
