import axios from 'axios';
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";


import CustomTable from '../components/customtable';
import NewRacePopup from '../components/newracepopup'

import Button from "@mui/material/Button";

export default function RacesScreen() {

  const [appBarTitle, setTitle] = useOutletContext();

  useEffect(()=> {
    setTitle("BSF Race Screen!")
  },[appBarTitle])

  const [show, setShow] = useState(false);
  const handleOpen = function () {
    setShow(true)
  };
  const handleClose = function () {
    setShow(false);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races')
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setData("There was an error: " + error)
      })
  }, [])


  return (
    <div>
      <CustomTable raceData={data} />
      <div 
        id="NewRaceButtonRow"
        style={{
          display:"flex",
          flexDirection:"column",
          alignItems: "flex-end",
        }}
      >
        <Button 
        variant="contained" 
        onClick={handleOpen}
        >
          New Race Series
        </Button>
  
      </div>

      <NewRacePopup 
        open={show}
        onClose={handleClose}
      />


    </div>
  );
}