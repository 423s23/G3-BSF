import { Container, Divider, Stack } from '@mui/material';
import Button from "@mui/material/Button";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import DateChipArray from '../components/datechiparray';

import { useLoaderData } from "react-router-dom";

import { getRace, Race } from '../models/racemodel';

export async function loader({ params }) {
    let race = new Race();
    race = getRace(params.raceId)
    return race;
}


export default function RaceDetailScreen() {
    const [race, updateRace] = useState(useLoaderData());

    const [appBarTitle, setTitle] = useOutletContext(race.raceName);

    const addVolunteerDate = function(dt){
        race.addVolunteerDate(dt)
    }

    const openCheckInScreen = function(){
        console.log("launching check in screen!")
    }

    const sendTestEmail = function () {
        console.log("sending email")
        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/" + race.raceId + "/emailvouchers",
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





    const [positionData, setPositionData] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + race.raceId + "/positions")
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
                <DateChipArray 
                    dates={race.volunteerDays}
                    addDateHandler={addVolunteerDate}
                    /> 
                <Divider />
                <h3>
                    {race.raceName}
                </h3>
                <ol>
                    <li>{race.raceId}</li>
                    <li>{race.startDate.toDateString()}</li>
                </ol>


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