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
                    StartDate: doc.data().StartDate,
                    VolunteerDays: doc.data().VolunteerDays,
                });
            });
            return response.json(races);
        })
}

exports.getRace = (request, response) => {
    const raceId = request.params.raceId

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

exports.updateRace = async (request, respones) => {
    vdays = []
    request.params.volunteerDays.forEach((dt) => {
        vdays.push(new Date(dt))
    })
    const raceData = {
        RaceName: request.body.raceName,
        StartDate: Timestamp.fromDate(new Date(request.body.startDate)),
        VolunteerDays: vdays,
    }

    ref = db.collection('Races').doc(request.params.raceId);
    const res = await ref.update(raceData)
    return response.json({ raceId: res.id })
}

exports.updateVolunteerDates = async () => {
    const vdates = request.body.volunteerDays;
    vdates.map((dt) => {
        return new Timestamp.fromDate(new Date(dt))
    })

    ref = db.collection('Races').doc(request.body.volunteerDays);
    const res = await ref.update({VolunteerDays: vdates})
    return response.json({ raceId: res.id })

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