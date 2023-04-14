import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Popover from "@mui/material/Popover"
import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const printableDate = function (d) {
    const date = new Date(d)

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const day = dayNames[date.getDay()];
    const month = date.getMonth().toString();
    const monthDate = date.getDate().toString();

    const res = day + " " + month + "/" + monthDate

    return res;
}

export default function DateChipArray(props) {

    const { dates, addDateHandler } = props;


    const [focus, setfocus] = useState(0)

    function changeFocus(key) {
        console.log(key)
        setfocus(key)
    }

    //const handleDelete = (chipToDelete) => () => {
    //    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    //};

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
                            color={date === focus ? "secondary" : "primary"}
                            size='medium'
                            label={printableDate(date)}
                            onClick={() => { changeFocus(date) }}

                        />
                    </ListItem>
                );
            })}
            <NewDateChip addDateHandler={addDateHandler} />

        </Paper>
    );
}

function NewDateChip(addDateHandler) {
    const [open, handleOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [date, setDate] = useState(null)




    const toggleOpen = function (event) {

        setAnchorEl(event.currentTarget);
        handleOpen(!open)
    }

    const addNewDate = function () {
        handleOpen(false)
        addDateHandler()
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
                        type="date"
                        onChange={(d) => { setDate(d) }}
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



