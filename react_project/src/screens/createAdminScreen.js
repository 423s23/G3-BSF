import Box from "@mui/material/Box";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { auth } from "../firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import {useEffect, useState} from "react";

export default function CreateAdminScreen() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // This section below helps display if a user is logged in and gives us functionality to sign out
    //--------------------

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

    const logout = async () => {
        await signOut(auth);
    };

    //--------------------

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    //Everything in the return statement is what is actually appearing on the webpage
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create Account
                </Typography>

                {/*This code is for the email input*/}
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange = {(e) => setRegisterEmail(e.target.value)}
                    />

                    {/*This code is for the password input*/}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange = {(e) => setRegisterPassword(e.target.value)}
                    />

                    {/*This code is for sign in button*/}
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={register}
                    >
                        Create Account
                    </Button>

                    <Button onClick={logout}> Sign Out </Button>

                    {/*This code displays the current user that is logged in or it tells us that no one is logged in*/}
                    <Box>
                        {user ? user.email : "Not Logged In"}
                    </Box>

                </Box>
            </Box>
        </Container>
    );
}