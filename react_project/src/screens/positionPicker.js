
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { List, ListSubheader, ListItem } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ListItemText, ListItemButton, IconButton, ListItemIcon, Checkbox, } from '@mui/material';



export default function PositionPicker({ handler, raceId }) {

  //get volunteer positions
  const [positions, setPositionData] = useState([]);
  useEffect(() => {
    axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + raceId + "/positions")
      .then(function (response) {

        const positionData = []
        const resPositions = response.data
        resPositions.forEach((pos) => {
          positionData.push({
            positionId: pos.positionId,
            raceId: pos.raceId,
            positionName: pos.positionName,
            description: pos.desciption,
            startTime: new Date(pos.startTime._seconds * 1000),
            endTime: new Date(pos.endTime._seconds * 1000),
            licenseRequired: pos.licenseRequired,
            licenseName: pos.licenseName,
            volunteersNeeded: pos.volunteersNeeded,
            registeredVolunteers: pos.registeredVolunteers,
          })
        })
        setPositionData(positionData)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setPositionData("There was an error: " + error)
      })
  }, [])

  const [selected, handleSelected] = useState("")
  const setSelected = function (posId) {
    console.log("Selected: ", posId)
    handleSelected(posId)
    handler(posId)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Available Positions
          </ListSubheader>
        }
      >
        {   //each item here is an expandable sublist
          positions.map((position) => {
            return (<PostionListItem position={position} selected={selected} setSelected={setSelected} />)
          })
        }
      </List>
    </Container>
  );
}

const PostionListItem = function ({ position, selected, setSelected }) {

  return (
    <ListItem
      key={position.positionId}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={() => {
        setSelected(position.positionId)
      }} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={position.positionId == selected}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={position.positionName}
          secondary={
            <p>
              {position.description}
            </p>
          }
        />

      </ListItemButton>
    </ListItem>
  );
}  