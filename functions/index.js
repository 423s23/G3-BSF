const functions = require("firebase-functions");
const {getVolunteers} = require("./api/volunteer")
const{getAbstractVolunteerPositions} = require("./api/abstract")
const {
    checkUserIn, 
    addVolunteerPosition,
    getRace, 
    getRaces, 
    getVolunteerPositions, 
    createRace, 
    emailVouchers, 
    editRaceDays,
} = require('./api/race')

//const {getVoucherList, voucherList} = require("./api/voucher")
const {uploadVoucherList} = require("./api/voucher")


//create express app
const app = require('express')();
const cors = require('cors');
app.use(cors({origin: true}));

//race data
app.get('/races', getRaces);
app.get('/races/:raceId', getRace);
app.get("/races/:raceId/positions", getVolunteerPositions);
app.post("/races/new", createRace)
app.post("/races/:raceId/editracedays", editRaceDays);
app.post("/races/:raceId/addVolunteerPosition",addVolunteerPosition)
app.post("/races/:raceId/emailvouchers",emailVouchers)

//check in actions
app.post("/races/:raceId/:date/checkin", checkUserIn)


//volunteer data APIs
app.get("/volunteers", getVolunteers);

//voucher list
app.post("/uploadvoucherlist", uploadVoucherList);

//get abstract volunteer descriptions
app.get("/abstractpositions", getAbstractVolunteerPositions);



exports.api = functions.https.onRequest(app);
