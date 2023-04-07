import axios from 'axios';
import { useEffect, useState } from "react";

import CustomTable from '../components/customtable';
import NewRacePopup from '../components/newracepopup'

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal"

export default function RacesScreen() {

  const [show, setShow] = useState(false);
  const handleOpen = function () {
    console.log("Opening Modal")
    setShow(true)
  };
  const handleClose = function () {
    console.log("Closing Modal")
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

      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}

      >
        <NewRacePopup />

      </Modal>
    </div>
  );
}