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
import AuthDetails from "../authDetails";

export default function AdminLoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log("what");

            })
            .catch((error) => {
                //console.log(error);
                console.log("fail");
            });
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
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
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
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />

                        {/*code for sign in button*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={signIn()}

                        >
                            Sign In
                        </Button>

                    <AuthDetails>

                    </AuthDetails>

                    </Box>
                </Box>
            </Container>
    );
}