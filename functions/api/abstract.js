const { db } = require('../util/admin');

exports.getAbstractVolunteerPositions = async (request, response) => {
    console.log("calling getAbstractVolunteerPositions")
    
    db.collection("AbstractVolunteerPositions").get().then(
        (data) => {
            let positions = [];
            data.forEach((doc) => {
                positions.push({
                positionId: doc.id,
                description: doc.data().Description,
                licenseName: doc.data().LicenseName,
                licenseRequired: doc.data().LicenseRequired,
                positionName: doc.data().PositionName,
            });
        });
        return response.json(positions);
        }
    )
}