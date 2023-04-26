import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { Fragment, useState } from 'react';
import NewPositionPopop from './newpositionpopup';
import DateChipArray from "./datechiparray"



export default function PositionsForDay({activeDate, changeActiveDate, dates, positions, raceId }) {

    //functionality for new volunteer position
    const [show, setShow] = useState(false);
    const handleOpen = function () {
        setShow(true)
    };
    const handleClose = function () {
        setShow(false);
    }

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <DateChipArray dates={dates} raceId={raceId} changeActiveDate={changeActiveDate} />
                </ListSubheader>
            }
        >
            {   //each item here is an expandable sublist
                positions.map((position) => {
                    return (<PositionDetails position={position} />)
                })
            }
            <ListItemButton onClick={handleOpen} >
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Position" />
            </ListItemButton>
            <NewPositionPopop raceId={raceId} open={show} onClose={handleClose} date={activeDate} />
        </List>
    )

}

function PositionDetails({ position }) {
    const [open, setOpen] = useState(true)
    const handleClick = (i) => {
        setOpen(!open);
    };


    return (
        <Fragment>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={position.positionName} />
                {position.registeredVolunteers.length}/{position.volunteersNeeded} slots filled:
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {position.registeredVolunteers.map((volunteer) => {
                        return <VolunteerListItem volunteer={volunteer} />
                    })}
                </List>
            </Collapse>
        </Fragment>
    )

}

function VolunteerListItem({ volunteer }) {

    return (
        <ListItemButton >
            <ListItemText inset primary={volunteer.Name} />

        </ListItemButton>
    )

}
