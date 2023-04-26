import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Popover from "@mui/material/Popover"
import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

//function to make printable dates for the chips
const printableDate = function (d) {
    const date = new Date(d)

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const day = dayNames[date.getDay()];
    const month = date.getMonth().toString();
    const monthDate = date.getDate().toString();

    const res = day + " " + month + "/" + monthDate

    return res;
}

export default function DateChipArray({ dates, changeActiveDate,raceId }) {

    const [focus, setfocus] = useState(0)

    function changeFocus(key) {
        setfocus(key)
        changeActiveDate(key)
    }

    const updateDates = function (date) {
        const newDates = [...dates, date]

        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/" + raceId + "/editracedays",
            {
                raceId: raceId,
                dates: newDates
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
    }



    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                marginBottom: 2,
                marginTop: 0,
            }}
            component="ul"
        >
            {dates?.map((date) => {
                return (
                    <ListItem key={date}>
                        <Chip
                            color={date === focus ? "primary" : "secondary"}
                            size='medium'
                            label={printableDate(date)}
                            onClick={() => { changeFocus(date) }}

                        />
                    </ListItem>
                );
            })}
            <NewDateChip updateDates={updateDates} />

        </Paper>
    );
}

function NewDateChip({ updateDates }) {
    const [open, handleOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);


    const [date, datehandler] = useState("")
    function updateDate(date) {
        console.log("date changed to ", date)
        datehandler(date)
    }


    const toggleOpen = function (event) {
        setAnchorEl(event.currentTarget);
        handleOpen(!open)
    }

    const addNewDate = function () {
        handleOpen(false)
        updateDates(date)
    }


    return (
        <ListItem>
            <Chip
                color="primary"
                size="medium"
                variant="outlined"
                icon={<AddIcon />}
                label="Add"
                onClick={toggleOpen}
            />
            <Popover
                open={open}
                onClose={toggleOpen}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

            >
                <Stack>
                    <TextField
                        label="Date"
                        focused
                        type="date"
                        variant="outlined"
                        onChange={
                            (e) => { updateDate(e.target.value) }
                        }
                    />
                    <Button
                        variant="contained"
                        onClick={addNewDate}
                    >
                        Add
                    </Button>
                </Stack>
            </Popover>

        </ListItem>

    )

}



