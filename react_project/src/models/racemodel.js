import axios from 'axios';

export class Race {

    constructor(raceName, raceId, startDate, volunteerDays = []) {
        this.raceId = raceId;
        this.raceName = raceName;
        this.startDate = startDate;
        this.volunteerDays = volunteerDays;
    }
    // get race position objects and check in objects
    // alt param: specific date
    getVolunteerPositions = function () {
    }

    //add race day (or array of dates)?
    addRaceDay = function (date) {
     console.log("adding race day " + date.toDateString())   
    }

    // remove race day ticker
    deleteRaceDay = function (date) {
        // check if there are any race positions before deleting
    }

    //add volunteerPosition
    addVolunteerPosition() {

    }

    deleteVolunteerPosition() {

    }

    edit

}

export async function getRaces() {
    try {
        const res = await axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races')
        const data = res.data
        const races = []

        data.forEach((r) => {
            races.push(new Race(
                r.Name,
                r.RaceId,
                new Date(r.StartDate._seconds * 1000)))
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
                console.log(d)
                console.log(typeof d)
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

