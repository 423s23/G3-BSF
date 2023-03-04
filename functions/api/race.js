const { db } = require('../util/admin');

exports.getRaces = (request, response) => {
     db.collection('Races').get()
    .then((data) => {
        let races = [];
        data.forEach((doc) => {
            races.push({
                raceId: doc.id,
                raceName: doc.data().RaceSeriesName,
            });
        });
        return response.json(races);
    })
}

exports.getRace = (request, response) => {
    raceId = request.params.raceId

    db.collection('Races').doc(raceId).get().then((data) => {
        return response.json(data);  
    })
}



exports.getRacePositions = () => {
    raceId = request.params.raceId

    db.collection('Races').doc(raceId).get().then((data) => {
        return response.json(data);  
    })    

}
