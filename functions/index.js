const functions = require("firebase-functions");
const {getRace, getRaces, getVolunteerPositions, createRace, emailVouchers} = require('./api/race')
const {getVolunteers} = require("./api/volunteer")
const{getAbstractVolunteerPositions} = require("./api/abstract")



const app = require('express')();
const cors = require('cors');
app.use(cors({origin: true}));


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

//race data
app.get('/races', getRaces);
app.get('/races/:raceId', getRace);
app.get("/races/:raceId/positions", getVolunteerPositions);
app.post("/races/new", createRace)
app.post("/races/:raceId/emailvouchers", emailVouchers);

//volunteer data
app.get("/volunteers", getVolunteers);
app.get("/abstract", getAbstractVolunteerPositions);





exports.api = functions.https.onRequest(app);
