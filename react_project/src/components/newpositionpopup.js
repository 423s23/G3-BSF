import {Stack, TextField, MenuItem, Button, Collapse, Dialog, DialogActions, DialogContent, InputLabel, Select, DialogContentText, DialogTitle, FormControl, } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function NewPositionPopop({ raceId, onClose, open, date }) {

    //get the abstract positions to pick from 
    const [positions, setPositions] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/abstractpositions')
            .then(function (response) {
                const abstractPositions = response.data
                const temp = []
                abstractPositions.forEach((pos) => {
                    temp.push({
                        positionId: pos.positionId,
                        description: pos.description,
                        licenseName: pos.licenseName,
                        licenseRequired: pos.licenseRequired,
                        positionName: pos.positionName,
                    })
                })
                setPositions(temp)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    //these fields are handled by abstract positions
    const [positionId, handlePositionId] = useState('');
    const [positionName, handlePositionName] = useState('');
    const [positionDescription, handlePositionDescription] = useState('');
    const [licenseName, handleLicenseName] = useState('');
    const [licenseRequired, handleIsLicenseRequired] = useState(false);
    const setPositionId = (i) => {
        const pos = positions[i]
        handlePositionId(pos.positionId);
        handlePositionName(pos.positionName)
        handlePositionDescription(pos.description)
        handleLicenseName(pos.licenseName)
        handleIsLicenseRequired(pos.licenseRequired)
    };

    //these are unique to every race
    const [startTime, handleStartTime] = useState("07:30:00")
    const setStartTime = function (time){
        handleStartTime(time)
    }
    const [endTime, handleEndTime] = useState("16:30:00")
    const setEndTime = function (time){
        handleEndTime(time)
    }    
    const [volunteersNeeded, handleVolunteersNeeded] = useState(5)
    const setVolunteersNeeded = function (n){
        handleVolunteersNeeded(n)
    }


    //update DB
    const createNewPosition = function(){

        //format start and end times/update with relevant date. 
        const startDateTime = new Date(date)
        const endDateTime = new Date(date)
        startDateTime.setHours(startTime.slice(0,2))
        startDateTime.setMinutes(startTime.slice(3))
        endDateTime.setHours(endTime.slice(0,2))
        endDateTime.setMinutes(endTime.slice(3))

        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/" + raceId + "/addVolunteerPosition",
            {
                positionId: positionId,
                raceId: raceId,
                positionName: positionName,
                positionDescription: positionDescription,
                volunteersNeeded: parseInt(volunteersNeeded),
                licenseName: licenseName,
                licenseRequired: licenseRequired,
                startDateTime: startDateTime,
                endDateTime: endDateTime
            }
        ).then(
            function (response) {
                console.log(response)
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )

        onClose()
    }


    const FormContent = (
        <Stack 
        margin={1}
        useFlexGap
        spacing={{ xs: 1, sm: 2 }} 
        direction="row" 
        flexWrap="wrap">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Position"
                    onChange={
                        (e) => { setPositionId(e.target.value)}
                    }
                >
                    {
                        positions.map((position, i) => {
                            return (
                                <MenuItem value={i}>
                                    {position.positionName}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>
            <TextField
                label="Start Time"
                defaultValue={startTime}
                onChange={
                    (e) => { setStartTime(e.target.value)}
                }
                type="time"
                InputLabelProps={{ shrink: true, }}
                variant="standard" />
            <TextField
                label="End Time"
                defaultValue={endTime}
                onChange={
                    (e) => { setEndTime(e.target.value)}
                }
                type="time"
                InputLabelProps={{ shrink: true, }}
                variant="standard" />
            <TextField
                label="Volunteer Needed"
                defaultValue={volunteersNeeded} 
                onChange={
                    (e) => { setVolunteersNeeded(e.target.value)}
                }
                type="number"/>
        </Stack>
    )

    const [showAdvanced, advancedhandler] = useState(false)
    const toggleAdvancedSettings = () => {
        advancedhandler(!showAdvanced)
    }
    const advancedsettings = (
        <DialogContent>
            <DialogContentText>
                these could be advanced settings if needed
            </DialogContentText>
        </DialogContent>
    )

    return (
        <Dialog
            onClose={onClose}
            open={open}
        >
            <DialogTitle> New Volunteer Position</DialogTitle>
            <DialogContent>
                {FormContent}
            </DialogContent>
            <DialogActions
                sx={{ justifyContent: "space-between" }}
            >

                <Button
                    startIcon={<KeyboardArrowDownIcon />}
                    aria-label="ShowAdvancedSettings"
                    onClick={toggleAdvancedSettings}
                >
                    Advanced
                </Button>
                <Button 
                    aria-label="Create" 
                    onClick={createNewPosition}
                    variant="contained">
                    Create
                </Button>
            </DialogActions>
            <Collapse in={showAdvanced} timeout="auto" unmountOnExit>
                {advancedsettings}
            </Collapse>
        </Dialog>
    )
}