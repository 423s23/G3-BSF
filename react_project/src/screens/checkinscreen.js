import { Fragment, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PositionPicker from './positionPicker.js';
import Waiver from './waiver.js';
import ContactInfo from "./contactinfo.js";


export default function CheckInScreen() {

    const [firstName, handleFirstName] = useState()
    const updateFirstName = function(fName){
        handleFirstName(fName)
    }

    const [lastName, handlelastName] = useState()
    const updateLastName = function(lName){
        handlelastName(lName)
    }

    const [email, handleEmail] = useState()
    const updateEmail = function(email){
        handleEmail(email)
    }
    
    const [phone, handlePhone] = useState()
    const updatePhone = function(phone){
        handlePhone(phone)
    }
    const [teamAssociation, handleTeam] = useState()
    const updateTeam = function(team){
        handleTeam(team)
    }
    const contactInfohandlers = {updateFirstName, updateLastName, updateEmail,updatePhone,updateTeam}


    const [positionSelected, handlePositionSelection] = useState()
    const updateSelectedPosition = function(positionId){
        handlePositionSelection(positionId)
    }
    const [waiverId, handleWaiver] = useState()
    const updateWaiver = function(waiverId){
        handleWaiver(waiverId)
    }


    const steps = ['Contact Info', 'Position', 'Waiver', 'Submit'];
    const steps2 = [
        <ContactInfo handlers={contactInfohandlers} />, 
        <PositionPicker updateSelectedPosition={updateSelectedPosition}/>, 
        <Waiver updateWaiver={updateWaiver}/>,
    ]
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());


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
    };




    return (
        <Box>
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
                    <Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </Fragment>
                ) : (
                    <Fragment>
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
                    </Fragment>

                )}
            </Box>
        </Box>
    )
}