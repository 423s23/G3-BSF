const { db } = require('../util/admin');
const { firestore } = require("firebase-admin/firestore")


exports.getAbstractVolunteerPositions = async (request, response) => {
    snapshot = db.collection("AbstractVolunteerPositions")

    snapshot.get().then(
        (data) => {
            let positions = [];
            data.forEach((doc) => {
                positions.push({
                    PositionId: doc.id,
                    PositionName: doc.data().PositionName,
                    Description: doc.data().Description,
                    LicenseRequired: doc.data().LicenseRequired,
                    LicenseName: doc.data().LicenseName
                });
            });
            return response.json(positions);
        }
    )
}