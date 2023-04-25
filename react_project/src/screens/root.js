import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, CssBaseline, Drawer, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Palette from './Palette'

export default function Root() {

    const [appBarTitle, setTitle] = useState("BSF App")

    const [drawerState, toggleDrawer] = useState(false)

    const handleDrawer = function () {
        toggleDrawer(!drawerState);
    }

    return (
        <Palette>
        <Container component="main" maxWidth="false" disableGutters="true">
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {appBarTitle}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerState}
                onClose={() => handleDrawer()}
            >
                <List>
                    <Link to={`races`}> <ListItemButton>Races</ListItemButton></Link>
                    <Link to={`series`}><ListItemButton>SeriesDetailScreen</ListItemButton></Link>
                    <Link to={`checkin`}><ListItemButton>CheckInScreen</ListItemButton></Link>
                    <Link to={`editvolunteers`}><ListItemButton>editRegisteredVolunteers</ListItemButton></Link>
                    <Link to={`volunteers`}> <ListItemButton>Volunteers</ListItemButton></Link>
                    <Link to={`races`}><ListItemButton> Races </ListItemButton></Link>
                    <Link to={`importcsv`}><ListItemButton> Import Codes </ListItemButton></Link>
                    <Link to={`adminlogin`}><ListItemButton> Admin Login </ListItemButton></Link>
                    <Link to={'help'}><ListItemButton>Help</ListItemButton></Link>

                </List>

            </Drawer>
            <Container>
                < Outlet context={[appBarTitle, setTitle]} />
            </Container>


        </Container>
        </Palette>

    )

}
