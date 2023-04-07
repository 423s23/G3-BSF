import { Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from 'react';


export default function NewRacePopup() {


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
        console.log("New Race!")
        console.log(name + " on " + startDate)
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
                }
            ).catch(
                function (error) {
                    console.log(error)
                }
            )
    }


    const formcontent = (
        <Stack id="NewRaceForm" spacing={2}>
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
        <CardContent>
            <p>
                these could be advanced settings if needed
            </p>
        </CardContent>
    )


    return (
        <Box maxWidth={"66%"} style={{ display: "flex", alignItems: "center" }}>
            <Card>
                <CardHeader
                    title="New Race Series"
                />

                <CardContent>
                    {formcontent}
                </CardContent>
                <CardActions
                    style={{
                        justifyContent: "space-between",
                    }}
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
                </CardActions>
                <Collapse in={showAdvanced} timeout="auto" unmountOnExit>
                    {advancedsettings}
                </Collapse>

            </Card>
        </Box>

    )
}