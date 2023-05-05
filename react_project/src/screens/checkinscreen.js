import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import axios from 'axios';
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PositionPicker from './positionPicker.js';
import Waiver from './waiver.js';
import ContactInfo from './contactInfo.js';

import { useLoaderData } from "react-router-dom";
export async function loader({ params }) {
    const packet = [params.raceId, params.date]
    return packet;
}



export default function CheckInScreen() {

    //get raceId and date
    var [raceId, date] = useLoaderData();
    date = new Date(parseInt(date))
    const [appBarTitle, setTitle] = useOutletContext();

    //get race data, specifically after the name
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

    //format date and set as string
    const title = raceData.Name + " - " + date.toString().slice(0, 10)
    setTitle(title)


    return (
        <Box>
            <StepperFunction raceId={raceId} date={date} />
        </Box>
    )
}

//todo: export ContactInfo into its own file



function StepperFunction({ raceId, date }) {

    //handlers for contactInfo
    const [firstName, handleFirstName] = useState("")
    const [lastName, handleLastName] = useState("")
    const [email, handleEmail] = useState("")
    const [phone, handlePhone] = useState("")
    const [team, handleTeam] = useState("")
    const [positionId, handlePosition] = useState("")

    const contactInfoHandlers = [handleFirstName, handleLastName, handleEmail, handlePhone, handleTeam]

    const steps = ['Contact Info', 'Position', 'Waiver', 'Submit'];
    const steps2 = [<ContactInfo handlers={contactInfoHandlers} />, <PositionPicker handler={handlePosition} raceId={raceId} />, <Waiver />]
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        console.log({
                "raceId": raceId,
                "volunteerDate": date,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone,
                "team": team,
                "positionId": positionId
            });
        axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/"+raceId +"/"+date.valueOf()+"/checkin",
            {
                raceId: raceId,
                //volunteerDate: date,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                team: team,
                positionId: positionId
            }).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })

    };

    return (

        // this entire box contains the next/ back buttons and the stepper
        <Box sx={{ width: '100%' }}>

            {/*this is for the stepper */}
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - Click Submit!
                    </Typography>
                    <Box sx={{ display: 'flex', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Submit</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {steps2[activeStep]}

                    {/*This box is for the two buttons*/}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >Back</Button>
                        <Box sx={{ flex: '1 1 auto' }} />


                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>

            )}
        </Box>
    );


}