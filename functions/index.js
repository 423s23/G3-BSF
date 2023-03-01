const functions = require("firebase-functions");
const app = require('express')();


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


const {getRace} = require('./api/race')

app.get('/race', getRace);
exports.api = functions.https.onRequest(app);
