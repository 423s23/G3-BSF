const functions = require("firebase-functions");
const app = require('express')();
const {getRace, getRaces, getRacePositions} = require('./api/race')



app.get('/races', getRaces);
app.get('/races/:raceId', getRace)
app.get("/race/:raceId/positions", getRacePositions)

exports.api = functions.https.onRequest(app);
    