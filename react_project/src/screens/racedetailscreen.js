import { Container, Divider, Stack } from '@mui/material';
import Button from "@mui/material/Button";
import axios from 'axios';
import { Fragment, useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

import PositionsForDay from "../components/positionsforday"

import { useLoaderData } from "react-router-dom";
export async function loader({ params }) {
    const raceId = params.raceId
    return raceId;
}


export default function RaceDetailScreen() {
    const raceId = useLoaderData();

    const [appBarTitle, setTitle] = useOutletContext();

    //functionality for date selection
    const[isActive, setActive] = useState(false)
    const [activeDate, setActiveDate] = useState("")
    const changeActiveDate = function (date) {
        setActiveDate(date)
        setActive(true)
        console.log("New active date: ", date)

    }



    //get race data
    const [raceData, setRaceData] = useState([]);
    useEffect(() => {
        axios.get(`https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/${raceId}`)
            .then(function (response) {
                const data = response.data
                data.StartDate = new Date(data.StartDate._seconds)
                const vdates = []
                data.VolunteerDays.forEach(
                    (day) => {

                        var d = new Date(day._seconds * 1000)

                        vdates.push(d)
                    }
                )
                data.VolunteerDays = vdates
                setRaceData(data)
                setTitle(data.Name)

            })
            .catch(function (error) {
                // handle error
                setRaceData("There was an error: " + error)
            })
    }, [])

    //get volunteer positions
    const [positions, setPositionData] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + raceId + "/positions")
            .then(function (response) {

                const positionData = []
                const resPositions = response.data
                resPositions.forEach((pos) => {
                    positionData.push({
                        positionId: pos.positionId,
                        raceId: pos.raceId,
                        positionName: pos.positionName,
                        description: pos.desciption,
                        startTime: new Date(pos.startTime._seconds * 1000),
                        endTime: new Date(pos.endTime._seconds * 1000),
                        licenseRequired: pos.licenseRequired,
                        licenseName: pos.licenseName,
                        volunteersNeeded: pos.volunteersNeeded,
                        registeredVolunteers: pos.registeredVolunteers,
                    })
                })
                setPositionData(positionData)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setPositionData("There was an error: " + error)
            })
    }, [])

    const SendVouchers = function () {
        console.log("sending email")

        positions.forEach((position) => {
            position.registeredVolunteers.forEach((volunteer) => {
                console.log("emailing...")
                console.log("name: ", volunteer.Name)
                console.log("email: ", volunteer.Email)

                axios.post(
                    "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/" + raceId + "/emailvouchers",
                    {
                        name: volunteer.name,
                        email: volunteer.email
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
            })
        })


        


    }

    return (
        <Fragment>
            <PositionsForDay dates={raceData.VolunteerDays} activeDate={activeDate} changeActiveDate={changeActiveDate} positions={positions} raceId={raceId} />

            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Button
                    variant="contained"
                    onClick={SendVouchers}
                >
                    Email Vouchers
                </Button>
                <Link 
                to={isActive ? `/checkin/${raceId}/${activeDate.valueOf()}`: `#`}
                >
                    <Button variant="contained" 
                    disabled={!isActive}
                    >Launch CheckIn</Button>
                </Link>

                
            </Stack>
        </Fragment>
    );
}