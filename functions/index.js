const functions = require("firebase-functions");
const app = require('express')();
const {getRace, getRaces, getVolunteerPositions} = require('./api/race')
const cors = require('cors');
app.use(cors({origin: true}));




app.get('/races', getRaces);
app.get('/races/:raceId', getRace);
app.get("/races/:raceId/positions", getVolunteerPositions);


exports.api = functions.https.onRequest(app);
