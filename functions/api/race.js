const { db } = require('../util/admin');
const { Timestamp } = require('firebase-admin/firestore');
const { generateVoucherMessage, sendMail } = require('./emailing.js')



exports.getRaces = (request, response) => {
    db.collection('Races').get()
        .then((data) => {
            let races = [];
            data.forEach((doc) => {
                races.push({
                    RaceId: doc.id,
                    Name: doc.data().RaceName,
                    StartDate: doc.data().StartDate

                });
            });
            return response.json(races);
        })
}

exports.getRace = (request, response) => {
    raceId = request.params.raceId
    console.log("RaceID: " + raceId)

    db.collection('Races').doc(raceId).get().then(
        (doc) => {
            data = {
                RaceId: doc.id,
                Name: doc.data().RaceName,
                StartDate: doc.data().StartDate,
                VolunteerDays: doc.data().VolunteerDays,
            }
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
                    PositionDescriptionId: doc.data().PositionDescriptionId,
                    RaceId: doc.data().RaceId,
                    StartTime: doc.data().PositionStartTime,
                    EndTime: doc.data().PositionEndTime,
                    VolunteersNeeded: doc.data().VolunteersNeeded,
                    RegisteredVolunteers: doc.data().RegisteredVolunteers,
                });
            });
            return response.json(positions);
        }
    )
}


exports.createRace = async (request, response) => {
    raceName = request.body.raceName;
    startDate = Timestamp.fromDate(new Date(request.body.startDate));


    const res = await db.collection('Races').add({
        RaceName: raceName,
        StartDate: startDate,
        VolunteerDays: [],
    });

    console.log('Added document with ID: ', res.id);

    return response.json({ raceId: res.id })
}

exports.emailVouchers = async (request, response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;

    const code = "test-BSF123" //TODO: remove this line once codes are working
    //code = TODO: do db lookup to get code and mark it used.


    message = generateVoucherMessage(firstName, lastName, email, code)
    res = sendMail(message)
    console.log("emailVouchers Respones: " + res)

    return response.json({ "results": res });
}