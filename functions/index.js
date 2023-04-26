const functions = require("firebase-functions");
const {addVolunteerPosition,getRace, getRaces, getVolunteerPositions, createRace, emailVouchers, editRaceDays} = require('./api/race')
const {getVolunteers} = require("./api/volunteer")
const{getAbstractVolunteerPositions} = require("./api/abstract")


//create express app
const app = require('express')();
const cors = require('cors');
app.use(cors({origin: true}));

//race data APIs
app.get('/races', getRaces);
app.get('/races/:raceId', getRace);
app.get("/races/:raceId/positions", getVolunteerPositions);
app.post("/races/new", createRace)
app.post("/races/:raceId/emailvouchers", emailVouchers);
app.post("/races/:raceId/editracedays", editRaceDays);
app.post("/races/:raceId/addVolunteerPosition",addVolunteerPosition)

//volunteer data APIs
app.get("/volunteers", getVolunteers);

//get abstract volunteer descriptions
app.get("/abstractpositions", getAbstractVolunteerPositions);


exports.api = functions.https.onRequest(app);
