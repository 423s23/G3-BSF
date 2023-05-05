import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';

const teams = [
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


export default function ContactInfo( {handlers}) {

    const [handleFirstName, handleLastName, handleEmail, handlePhone, handleTeam] = handlers

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
                        onChange={
                            (e) => { handleFirstName(e.target.value)}
                        }
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        type="lastName"
                        id="lastName"
                        onChange={
                            (e) => { handleLastName(e.target.value)}
                        }
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        onChange={
                            (e) => { handleEmail(e.target.value)}
                        }
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="phone"
                        label="Phone #"
                        type="phone"
                        id="phone"
                        onChange={
                            (e) => { handlePhone(e.target.value)}
                        }
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="team"
                        label="Team"
                        type="team"
                        id="team"
                        select
                        defaultValue=""
                        helperText="Please select your team"
                        onChange={
                            (e) => { handleTeam(e.target.value)}
                        }
                    >
                        {teams.map((option) => (
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
