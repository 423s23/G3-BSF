import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const printableDate = function(d){
    const date = new Date(d)

    const dayNames = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const day = dayNames[date.getDay()];
    const month = date.getMonth().toString();
    const monthDate = date.getDate().toString();

    const res = day + " " + month + "/" + monthDate

    return res;
}

export default function DateChipArray(props) {

    const { dates } = props;

    const [focus, setfocus] = useState(0)

    function changeFocus(key){
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
                            color = {date == focus ? "secondary" : "primary" }
                            size='medium'
                            label={printableDate(date)}
                            onClick={() => {changeFocus(date)}}

                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}