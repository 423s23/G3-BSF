import axios from "axios";

export class Race{

    constructor(raceName, raceId, startDate, raceDays = []){
        this.raceId = raceId;
        this.reaceName = raceName;
        this.startDate = startDate;
        this.raceDays = raceDays;
    }
    getVolunteerPositions = function(){
        
    }
}

export function getRace(raceId){
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
                return data
            })
            .catch(function (error) {
                // handle error
                return("There was an error: " + error)
            })
}