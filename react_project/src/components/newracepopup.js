import { Box, Card, CardActions, CardContent, CardHeader, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from 'react';


export default function NewRacePopup(props) {

    const { onClose, open } = props;


    const closePopup = function () {
        onClose()
    }

    const [name, namehandler] = useState("")
    function updateName(name) {
        namehandler(name);
    }

    const [startDate, datehandler] = useState("")
    function updateDate(date) {
        datehandler(date)
    }

    const [showAdvanced, advancedhandler] = useState(false)
    const toggleAdvancedSettings = () => {
        advancedhandler(!showAdvanced)
    }

    function submitNewRace() {

        //validate name and date

        //send POST request
        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/new",
            {
                raceName: name,
                startDate: startDate,
            },
        ).then(
            function (response) {
                console.log(response)
                //open new screen
                closePopup()
            }
        ).catch(
            function (error) {
                console.log(error)
                closePopup()
            }
        )

    }


    const formcontent = (
        <Stack id="NewRaceForm" mt={1} spacing={2}>
            <TextField
                id="outlined-basic"
                label="Race Series Name"
                variant="outlined"
                onChange={
                    (e) => { updateName(e.target.value) }
                }
            />
            <TextField
                id="outlined-basic"
                label="Date"
                focused
                type="date"
                variant="outlined"
                onChange={
                    (e) => { updateDate(e.target.value) }
                }
            />

        </Stack>
    )

    const advancedsettings = (
        <DialogContent>
            <DialogContentText>
                these could be advanced settings if needed
            </DialogContentText>
        </DialogContent>
    )


    return (
        <Dialog
            keepMounted
            onClose={closePopup}
            open={open}
        >
            <DialogTitle> New Race</DialogTitle>
            <DialogContent>
                {formcontent}
            </DialogContent>
            <DialogActions
            sx={{justifyContent: "space-between"}}
            >

                <Button
                    startIcon={<KeyboardArrowDownIcon />}
                    aria-label="ShowAdvancedSettings"
                    onClick={toggleAdvancedSettings}
                >
                    Advanced
                </Button>
                <Button aria-label="Create" variant="contained" onClick={submitNewRace}>
                    Create
                </Button>
            </DialogActions>
            <Collapse in={showAdvanced} timeout="auto" unmountOnExit>
                {advancedsettings}
            </Collapse>
        </Dialog>
    )
}