import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";
import Box from "@mui/material/Box";
import * as React from "react";


export default function Help(){

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])
    const [data, setData] = useState([]);

    return(
        <div>
            <h1>Help Page</h1>
            <hr></hr>
            <h3>Volunteer Registration</h3>
            <p>
                 - To register a volunteer go to the 'CheckInScreen' page.
            </p>
            <h3>Edit Volunteer</h3>
            <p>
                - To edit the volunteer list to delete, move around, or change something: go to the 'editRegisteredVolunteers' page.
                - Then click on the 'EDIT' button below the table to make the changes.
            </p>
            <h3>Create and View Races</h3>
            <p> 
                - Go to the 'Races' page to make and look at changes.
            </p>
            <h3>Bugs!</h3>
            <p>
                - If there are any bugs/probelms with the website please contact Alex Krings @406.202.1296 or A1Krings@gmail.com
                - We have a bug tracker located in our <a href="https://tasks.office.com/montanaedu.onmicrosoft.com/Home/PlanViews/8zZX43In5U-nne1L0M6HVWQAGiwh?Type=PlanLink&Channel=Link&CreatedTime=638140670776530000">backlog</a>
            </p>
            <h3>Github: </h3>
            <a href="https://github.com/423s23/G3-BSF.git">GitHub Repo</a>

            <h3>Working Features/Commands</h3>
            <ul> 
                <li>We can pull from db</li>
                <li>Pretty(ish) looking pages</li>
                <li>Waiver Working</li>
            </ul>

            <Box>
                {user ? "" : navigate("/adminlogin")}
            </Box>

        </div>
    );
}