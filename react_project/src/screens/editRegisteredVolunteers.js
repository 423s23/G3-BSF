const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

export default function editRegisteredVolunteers(){

    return (
        <div>
            {console.log("Accessed Volunteer Editing")}
            <h2>Implement me!</h2>
            <p>this will be pulling from the firebase data, to display and change the volunteers.</p>
        </div>
        
    );
}