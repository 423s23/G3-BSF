import axios from 'axios';
import { useEffect, useState } from "react";


export default function RaceDetailScreen({params}) {

    //const RaceId = params.raceId
    const RaceId = "hhIyHeFAC7HiyoHhf6Qi"

    const [RaceData, setRaceData] = useState([]);
    useEffect(() => {
        axios.get(`https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/${RaceId}`)
            .then(function (response) {
                setRaceData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setRaceData("There was an error: " + error)
            })
    }, [])

    const [PositionData, setPositionData] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/' + RaceId + "/positions")
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
        <div>
            <h2>Implement me!</h2>
            <h3>
              Race data: 
            </h3>
            <p>
            {JSON.stringify(RaceData, null, 2) }
            </p>
            <h3>
                Volunteer Positions
            </h3>
            <p>
            {JSON.stringify(PositionData, null, 2) }
            </p>

        </div>
    );
}