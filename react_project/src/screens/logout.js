import {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";
import Box from "@mui/material/Box";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";

export default function LogOut() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

    const logout = async () => {
        await signOut(auth);
    };

    return(
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    marginBottom: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {user ? "You are signed in as: " + user.email : navigate("/adminlogin")}
                </Box>

                <Button variant="contained" onClick={logout}> Sign Out </Button>
            </Box>
        </Container>
    )

}