import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function DateChipArray() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '1/3/23' },
        { key: 1, label: '1/4/23' },
        { key: 2, label: '1/5/23' },
        { key: 3, label: '+' },

    ]);

    const [focus, setfocus] = useState(0)
    function changeFocus(key){
        setfocus(key)
    }

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

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
            {chipData.map((data) => {
                return (
                    <ListItem key={data.key}>
                        <Chip
                            color = {data.key == focus ? "secondary" : "primary" }
                            size='medium'
                            label={data.label}
                            onClick={() => {changeFocus(data.key)}}

                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}