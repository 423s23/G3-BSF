import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Drawer, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom'

export default function Root(){

    const [drawerState, toggleDrawer] = useState(false)

    const handleDrawer = function(){
        toggleDrawer(!drawerState); 
    }

    return (
        <div>
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
                        Bridger Ski Foundation
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerState}
                onClose={() => handleDrawer()}
            >
                <List>
                    <Link to={`series`}>SeriesDetailScreen</Link>
                    <Link to={`checkin`}><ListItemButton>CheckInScreen</ListItemButton></Link>
                </List>
                
            </Drawer>

            <Container>
                < Outlet />
            </Container>
            

        </div>
    
    )

}