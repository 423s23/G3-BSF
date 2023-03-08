import axios from 'axios';
import { useEffect, useState } from "react";
import RacesTable from '../components/racestable';


export default function RacesScreen(){

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races')
  .then(function (response) {
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setData("There was an error: " + error)
  })
  },[])


  return(
        <div>
            <p>
                this will be the screen where users can view and create all races. 
                all checked in members can be seen
            </p>
            <RacesTable raceData={data}/>
        </div>
    );
}