const { db } = require('../util/admin');

exports.getRaces = (request, response) => {
     db.collection('Races').get()
    .then((data) => {
        let races = [];
        data.forEach((doc) => {
            races.push({
                raceId: doc.id,
                raceName: doc.data().RaceSeriesName,
                raceStartDate: doc.data().StartDate,
            });
        });
        return response.json(races);
    })
}

exports.getRace = (request, response) =>  {
    raceId = request.params.raceId

    db.collection('Races').doc(raceId).get().then(
        (data) => {
            return response.json(data);  
    })
}

exports.getVolunteerPositions = async (request, response) => {
    raceId = request.params.raceId
    db.collection("RacePositions").where("RaceId", "==", raceId).get().then(
        (data) => {
            let positions = [];
            data.forEach((doc) => {
                positions.push({
                PositionId: doc.id,
                PositionData: doc.data()
            });
        });
        return response.json(positions);
        }
        )
}
