import axios from 'axios';
import { RacePositionModel } from './racepositionmodel';

export class Race {

    constructor(raceName, raceId, startDate, volunteerDays = []) {
        this.raceId = raceId;
        this.raceName = raceName;
        this.startDate = startDate;
        this.volunteerDays = volunteerDays;
    }

    _updateRace = function() {

        const res = axios.post(
            "https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/"+ this.RaceId + "/update",
            {
                raceName: this.raceName,
                startDate: this.startDaxte,
                VolunteerDays: this.volunteerDays,
            },
         ).then((res) => {
            //do something
         })

    }
    
    // get race position objects and check in objects
    getVolunteerPositions = function () {
        const res = axios.get("https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/"+ this.RaceId + "/positions")
        const data = res.data
        const positions = []

        data.forEach((pos) => {
            positions.push(new RacePositionModel(
                pos.PositionId,
                pos.PositionName,
                pos.RaceId,
                pos.Description, 
                new Date(pos.StartTime._seconds * 1000),
                new Date(pos.EndTime._seconds * 1000), 
                pos.VolunteersNeeded,
                pos.LicenseRequired,
                pos.LicenseName
            ))
        })
        return positions;
    }

    //add race day (or array of dates)?
    addRaceDay = function (date) {
     console.log("adding race day " + date.toDateString())   
     this.volunteerDays.push(date)

     this._updateRace()
    }




}

export async function getRaces() {
    try {
        const res = await axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races')
        const data = res.data
        const races = []

        data.forEach((r) => {
            let vdates = []
            races.push(new Race(
                r.Name,
                r.RaceId,
                new Date(r.StartDate._seconds * 1000)),
                )
        })
        return races
    }
    catch (error) {

        // handle error
        return error;
    }

}

export async function getRace(raceId) {

    try {
        const res = (await axios.get(`https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races/${raceId}`))
        const data = res.data
        const vdates = []
        data.VolunteerDays.forEach(
            (day) => {

                var d = new Date(day._seconds * 1000)
                vdates.push(d)
            }
        )
        data.VolunteerDays = vdates

        const race = new Race(
            data.Name,
            data.RaceId,
            new Date(data.StartDate._seconds * 1000),
            data.VolunteerDays,
        )
        return race;

    }
    catch (error) {
        return error
    }

}