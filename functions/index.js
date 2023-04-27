const functions = require("firebase-functions");
const {getRace, getRaces, getVolunteerPositions, createRace, emailVouchers, updateRace, updateVolunteerDates} = require('./api/race')
const {getVolunteers} = require("./api/volunteer")
const{getAbstractVolunteerPositions} = require("./api/abstract")
const {getVoucherList, voucherList} = require("./api/voucher")



const app = require('express')();
const cors = require('cors');
app.use(cors({origin: true}));

//race data
app.get('/races', getRaces);
app.get('/races/:raceId', getRace);
app.get("/races/:raceId/positions", getVolunteerPositions);
app.post("/races/new", createRace)
app.post("/races/:raceId/emailvouchers", emailVouchers);
app.post("/races/:raceId/update", updateRace)
app.post("/races/:raceId/addvolunteerdate", updateVolunteerDates)


//volunteer data
app.get("/volunteers", getVolunteers);
app.get("/abstract", getAbstractVolunteerPositions);

//voucher list
app.get('/voucherlist', getVoucherList)
app.post("/voucherlist", voucherList);



exports.api = functions.https.onRequest(app);
