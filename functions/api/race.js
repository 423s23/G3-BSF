const { db } = require('../util/admin');

exports.getRace = (request, response) => {
     db.collection('Races').get()
    .then((data) => {
        let races = [];
        data.forEach((doc) => {
            races.push({
                raceId: doc.id,
                RaceSeriesName: doc.data().RaceSeriesName,
                description: doc.data().description,
                VolunteerDays: doc.data().VolunteerDays,
            });
        });
        return response.json(races);
    })
}



