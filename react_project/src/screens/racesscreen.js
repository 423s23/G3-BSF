import axios from 'axios';
import { useEffect, useState } from "react";
import {useNavigate, useOutletContext} from "react-router-dom";


import CustomTable from '../components/customtable';
import NewRacePopup from '../components/newracepopup'

import Button from "@mui/material/Button";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";
import Box from "@mui/material/Box";
import * as React from "react";

export default function RacesScreen() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

  const [appBarTitle, setTitle] = useOutletContext();

  useEffect(()=> {
    setTitle("BSF Race Screen!")
  },[appBarTitle])

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

      <NewRacePopup 
        open={show}
        onClose={handleClose}
      />
        <Box>
            {user ? "" : navigate("/adminlogin")}
        </Box>


    </div>
  );
}