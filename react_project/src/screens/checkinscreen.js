import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import PositionPicker from './positionPicker.js';
import Waiver from './waiver.js';


const currencies = [
    {
        value: 'teamA',
        label: 'Team A',
    },
    {
        value: 'teamB',
        label: 'Team B',
    },

    {
        value: 'teamC',
        label: 'Team C',
    },

];

export default function CheckInScreen() {

    return (
        <Box>

            <StepperFunction/>
        </Box>
    )
}

function ContactInfo(){
    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Contact Information
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="lastName"
                            id="lastName"
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            name="phone"
                            label="Phone #"
                            type="phone"
                            id="phone"
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            name="team"
                            label="Team"
                            type="team"
                            id="team"
                            select
                            defaultValue="teamA"
                            helperText="Please select your team"
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        
                    </Box>
                </Box>

            </Container>
    );

}

//export {ContactInfo}


function StepperFunction(){
    const steps = ['Contact Info', 'Position', 'Waiver', 'Submit'];
    const steps2 = [<ContactInfo/>, <PositionPicker/>, <Waiver/>]
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
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {steps2[activeStep]}

                    {/*This box is for the two buttons*/}
                    <Box sx={{ display: "flex", flexDirection: "row" , pt:2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >Back</Button>
                        <Box sx={{ flex: '1 1 auto'}} />


                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>

            )}
        </Box>
    );


}