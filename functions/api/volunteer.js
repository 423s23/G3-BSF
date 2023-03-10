const { db } = require('../util/admin');

exports.getVolunteers = async (request, response) => {
    snapshot = db.collection("Volunteers")
    
    try{
        let reqContent = request.params.volunteers;
        //if this fails, get all volunteers

        if ((typeof reqContent == String)){
            // make single item into a list with one element
            snapshot.doc(reqContent)
        }
        else if(Array.isArray(reqContent)){
            // do get volunteers with .where('MemberId', 'in', reqContent)
            snapshot.where(firestore.FieldPath.documentId(), 'in', reqContent)
        }
    }
    catch(e){}

    snapshot.get().then(
        (data) => {
            let positions = [];
            data.forEach((doc) => {
                positions.push({
                PositionId: doc.id,
                PositionData: doc.data()
            });
        });
        return response.json(positions);
        }
    )
}

