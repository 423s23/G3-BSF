import axios from 'axios';
import { useEffect, useState, Fragment } from "react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";
import Box from "@mui/material/Box";
import * as React from "react";
import {Container} from "@mui/material";

export default function VolunteerScreen() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/volunteers')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setData("There was an error: " + error)
            })
    }, [])

    return(
        <Container>
            <Fragment>
                <h1>
                    Members
                </h1>
                {JSON.stringify(data, null, 2) }

            </Fragment>

            <Box>
                {user ? "" : navigate("/adminlogin")}
            </Box>

        </Container>



    )
} 