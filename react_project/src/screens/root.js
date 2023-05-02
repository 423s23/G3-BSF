import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Container, CssBaseline, Drawer } from '@mui/material';
import { useState, useEffect, } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Palette from './Palette'
import Button from '@mui/material/Button';
import { auth } from "../firebase";
import {onAuthStateChanged} from "firebase/auth";
import AdminLoginScreen from './adminLoginScreen';
import { signOut, } from "firebase/auth";

export default function Root() {

    //authentication to pass down
    const [authUser, setAuthUser] = useState(null);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
                handleDrawer()
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    
    //to customize app bar title
    const [appBarTitle, setTitle] = useState("BSF App")
    
    //drawer controler
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
                            disabled={!authUser}
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
                        <Button
                            variant="contained"
                            onClick= {handleDrawer}
                            component={Link}
                            to={'races'}>
                            Races
                        </Button>
                        <Button 
                            variant="contained" 
                            component={Link} 
                            onClick= {handleDrawer}
                            to={'createadmin'}>
                            Create Admin
                        </Button>
                        <Button 
                            variant="contained" 
                            component={Link} 
                            onClick= {handleDrawer}
                            to={'importcsv'}>
                            Import Codes
                        </Button>
                        <Button variant="contained" component={Link} to={'help'}>
                            Help
                        </Button>
                        <Button variant="contained"  onClick={userSignOut}>
                            Log Out
                        </Button>
                    </Stack>

                </Drawer>
                <Container>
                    {authUser ? 
                        <Outlet context={[appBarTitle, setTitle, authUser]} /> 
                        : <AdminLoginScreen authuser={authUser}/>}
                </Container>
            </Container>
        </Palette>

    )

}
