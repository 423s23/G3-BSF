
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';




export default function ContactInfo( {handlers}) {
    
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
                        onChange={(e) => {handlers.updateFirstName(e.target.value)}}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        type="lastName"
                        id="lastName"
                        onChange={(e) => {handlers.updateLastName(e.target.value)}}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        onChange={(e) => {handlers.updateEmail(e.target.value)}}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="phone"
                        label="Phone #"
                        type="phone"
                        id="phone"
                        onChange={(e) => {handlers.updatePhone(e.target.value)}}
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
                        onChange={(e) => {handlers.updateTeam(e.target.value)}}
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
