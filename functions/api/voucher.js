
const { db } = require('../util/admin');
const { Timestamp } = require('firebase-admin/firestore');

exports.uploadVoucherList = async(request, response) => {
    const voucherCode = request.body.voucherCode;
    console.log("Upload vouchers called", request.body.voucherCode)
    const skiSeason = 24;
    console.log("Ski season", request.body.skiSeason)
    const uploadTime = new Date()
    console.log("Upload time", request.body.uploadTime)
    const res = await db.collection('VoucherList').add({
        Code: voucherCode, 
        IsUsed: false,
        IssuedTime: uploadTime,
        Season: "23-24",
        UploadTimeStamp: uploadTime, 
    });
    //console.log("Created a new code", res.id);

    /*
    Code: voucherCode, 
        Season: skiSeason,
        UploadTimeStamp: uploadTime, 
        IsUsed: false,
        IssuedTime: null
    */
 return response.json(res);
    
}