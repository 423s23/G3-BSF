import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Container, CssBaseline, Drawer} from '@mui/material';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Palette from './Palette'
import Button from '@mui/material/Button';

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
                <Stack direction="column" alignItems="left" gap={0.25}>
                        <Button variant="contained" component={Link} to={'races'}>
                            Races
                        </Button>
                        <Button variant="contained" component={Link} to={'series'}>
                            Series 
                        </Button>
                        <Button variant="contained" component={Link} to={'checkin'}>
                            Check In Screen
                        </Button>
                        <Button variant="contained" component={Link} to={'adminlogin'}>
                            Admin Login
                        </Button>
                        <Button variant="contained" component={Link} to={'createadmin'}>
                            Create Admin
                        </Button>
                        <Button variant="contained" component={Link} to={'help'}>
                            Help
                        </Button>
                </Stack>

            </Drawer>
            <Container>
                < Outlet context={[appBarTitle, setTitle]} />
            </Container>


        </Container>
        </Palette>

    )

}
