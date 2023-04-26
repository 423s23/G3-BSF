import Box from "@mui/material/Box";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Root from "./root";


export default function AdminLoginScreen() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate("/races");
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };


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
                        Sign in
                    </Typography>

                    {/*code for email*/}
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
                            onChange = {(e) => setLoginEmail(e.target.value)}
                        />

                        {/*code for password */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange = {(e) => setLoginPassword(e.target.value)}
                        />

                        {/*code for sign in button*/}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={login}

                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Container>

    );
}