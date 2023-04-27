
const { db } = require('../util/admin');
const { Timestamp } = require('firebase-admin/firestore');


exports.getVoucherList = (request, response) => {
    snapshot = db.collection('VoucherList').get()
    .then((data) =>{
        let vouchers =[];
        data.forEach((doc) => {
            vouchers.push({
                Code:doc.data().Code,
                Season:doc.data().Season,
                UploadTimeStamp:doc.data().UploadTimeStamp,
                IsUsed: doc.data().IsUsed,
                IssuedTime: doc.data().IssuedTime
                
            });
        });
        return response.json(vouchers);
    })
}

exports.voucherList = async(request, response) => {
    voucherCode = request.body.voucherCode;
    skiSeason = 24;
    uploadTime = TimeStamp.fromDate(new Date(request.body.uploadTime));
    const res = await db.collection('VoucherList').add({
        Code: voucherCode, 
        Season: skiSeason,
        UploadTimeStamp: uploadTime, 
        IsUsed: false,
        IssuedTime: null

    });
    console.log("Created a new code", res.id);
 return response.json({res});
    
}