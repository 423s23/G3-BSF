const { db } = require('../util/admin');
const { Timestamp, FieldValue } = require('firebase-admin/firestore');
const { sendVoucherMessage, sendConfirmationEmail } = require('./emailing.js')



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
    console.log("getRace called - RaceID: " + raceId)

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
    console.log("getVolunteerPositions called - RaceID: " + raceId)

    db.collection("RacePositions").where("RaceId", "==", raceId).get().then(
        (data) => {
            let positions = [];
            data.forEach((doc) => {
                positions.push({
                    positionId: doc.id,
                    raceId: doc.data().RaceId,
                    positionName: doc.data().PositionName,
                    desciption: doc.data().Description,
                    startTime: doc.data().PositionStartTime,
                    endTime: doc.data().PositionEndTime,
                    licenseRequired: doc.data().LicenseRequired,
                    licenseName: doc.data().LicenseName,
                    volunteersNeeded: doc.data().VolunteersNeeded,
                    registeredVolunteers: doc.data().RegisteredVolunteers,
                });
            });
            return response.json(positions);
        }
    )
}

exports.addVolunteerPosition = async (request, response) => {
    raceId = request.params.raceId
    console.log("getVolunteerPositions called - RaceID: " + raceId)
    
    const res = db.collection("RacePositions").add({
        PositionId: request.body.positionId,
        RaceId: request.body.raceId,
        PositionName: request.body.positionName,
        PositionDescription: request.body.positionDescription,
        VolunteersNeeded: request.body.volunteersNeeded,
        LicenseName: request.body.licenseName,
        LicenseRequired: request.body.licenseRequired,
        PositionStartTime: Timestamp.fromDate(new Date(request.body.startDateTime)),
        PositionEndTime: Timestamp.fromDate(new Date(request.body.endDateTime)),
        RegisteredVolunteers: [],
    })
    return response.json({ raceId: res.id })

}

exports.editRaceDays = async (request, response) => {

    raceId = request.body.raceId
    console.log("editRaceDays called - RaceID: " + raceId)


    reqDates = request.body.dates
    console.log("Dates: ", reqDates)

    //parsed dates
    const dates = [];
    request.body.dates.forEach((date) => {
        console.log(date)
        dates.push(Timestamp.fromDate(new Date(date)))
    })
    console.log("dates: ", dates)


    const res = await db.collection("Races").doc(raceId).update({
        VolunteerDays: dates
    })

    console.log("updated volunteer days for document ", res.id)

    return response.json(res)
}

exports.createRace = async (request, response) => {
    raceName = request.body.raceName;
    startDate = Timestamp.fromDate(new Date(request.body.startDate));

    console.log("Creating race with name: ", raceName)


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

    console.log("emailing voucher: ", email)


    message = sendVoucherMessage(firstName, lastName, email, code)

    return response.json("emails sent!");
}