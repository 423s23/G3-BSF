import { Container, Divider, Stack } from '@mui/material';
import Button from "@mui/material/Button";
import axios from 'axios';
import { useEffect, useState } from "react";
import DateChipArray from '../components/datechiparray';

import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const raceId = params.raceId
    return raceId;
}


export default function RaceDetailScreen() {
    const raceId = useLoaderData();

    const openCheckInScreen = function(){
        console.log("launching check in screen!")
    }

    const sendTestEmail = function () {
        console.log("sending email")
        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/" + raceId + "/emailvouchers",
            {
                firstName: "testMichael",
                lastName: "testBuffington",
                email: "michael.t.buffington@gmail.com"
            },
        ).then(
            function (response) {
                console.log(response)
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
    }

    const [raceData, setRaceData] = useState([]);
    useEffect(() => {
        axios.get(`https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/${raceId}`)
            .then(function (response) {
                const data = response.data
                data.StartDate = Date(data.StartDate.seconds)
                const vdates = []
                data.VolunteerDays.forEach(
                    (day) => {
                        vdates.push(Date(day.seconds))
                    }
                )
                data.VolunteerDays = vdates
                console.log(data)
                setRaceData(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setRaceData("There was an error: " + error)
            })
    }, [])

    const [positionData, setPositionData] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + raceId + "/positions")
            .then(function (response) {
                setPositionData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setPositionData("There was an error: " + error)
            })
    }, [])

    return (
        <Container>
            <Stack>
                //chip array for dates
                <DateChipArray />
                <Divider >
                </Divider>
                <p>
                    list of positions with who is signed up
                </p>
                {JSON.stringify(raceData, null, 2)}
                <Divider />
                <Button
                    variant="contained"
                    onClick={sendTestEmail}
                >
                    Test Emailing
                </Button>
                <Button
                    variant="contained"
                    onClick={openCheckInScreen}
                >
                    Launch CheckIn
                </Button>


                <p>
                    launch checkin screen
                </p>
                {JSON.stringify(positionData, null, 2)}
            </Stack>
        </Container>
    );
}