import axios from 'axios';
import { useEffect, useState, Fragment } from "react";
import CustomTable from '../components/customtable';

export default function VolunteerScreen() {

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
        <Fragment>
            <h1>
                Members
            </h1>
            {JSON.stringify(data, null, 2) }
        </Fragment>

    )
} 