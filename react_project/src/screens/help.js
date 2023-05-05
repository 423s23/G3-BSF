

export default function HelpScreen(){
    return(
        <div>
            <h1>Races, create Admin, import codes, help, log out</h1>
            <h1>Help Page</h1>
            <hr></hr>
            <h3>Important Links: </h3>
            <p><a href="https://github.com/423s23/G3-BSF.git">GitHub Repo</a></p>
            <p><a href="https://tasks.office.com/montanaedu.onmicrosoft.com/en-US/Home/Planner/#/plantaskboard?groupId=1b5bd03c-6c85-43ac-b7f9-38ae7b310837&planId=8zZX43In5U-nne1L0M6HVWQAGiwh">Bug Tracker</a></p>
            <hr></hr>
            <h3>Races</h3>
            <p>
                 The race page is where we create new races as well as get to the volunteer sign in page.
                 <ul>
                     <li>
                         First: select the race(s) the volunteer would like to sign up for.
                     </li>
                     <li>
                         Second: select a date from the top and then press 'LAUNCH CHECKIN'
                     </li>
                 </ul>
                 The launch checkin button will bring you to a sign-up page. 
                 <ul>
                     <li>
                         Page One: This page is the contact information page. Here a volunteer needs to fill out all the fields with their correct information. Once filled in, the volunteer will click 'Next' at the bottom right of the page which will bring them to the next step in the sign in process.

                     </li>
                     <li>
                        Page Two: The second page is where the volunteer selects the position that they will like to volunteer for. Once selected, go to the next page.
                     </li>
                     <li>
                         Page Three: This page contains a link to the waiver they need to fill out in order to become a volunteer. Have the volunteer click the link and then have them fill in the information on this page. Once they submit the waiver, help them navigate back to the BSF website and go to the next page.
                     </li>
                     <li>
                        Page Four: The final page contains a submission button. If the volunteer has filled out all the corret information they can click the submit button and they are all signed up!
                     </li>
                     <li>
                         There is a back button on the page that can be used to go back in case the user typed something in wrong or would like to change anything.
                     </li>
                 </ul>
                
                Last thing here is a button to send the voucher codes to the volunteers. Press that button when all volunteers are finished signing up and your ready to send them.

            </p>
            <h3>Create Admin</h3>
            <p>
                This pages allows for the creation of new accounts. In order to create an account, just fill out the email and password fields and then click create account.
                You can tell if it works, by signing in! Make sure the password contains one capital letter, one special symbol, and one number.
            </p>
            <h3>Import Codes</h3>
            <p> 
               This page is where you can import the Bridger Ski voucher codes.
            </p>
            <ul>
                <li>
                    First: Select the import button. Navigate to the file you want to upload (.csv or .xslx) and select the upload button once the right file is selected. If you selected the wrong file, just click the button again and find the correct file.
                </li>
                <li>
                    Second: Once you check the file, press the Upload file to send it to the database.
                </li>
            </ul>
            <h3> Log Out</h3>
            <p>When you are going to be away from the volunteer page or you are done for the day, press the 'Log Out' button to log out! </p>
            <h3>Bugs!</h3>
            <p>
                If you notice any bugs reach out to the Brider Ski technical team. Make sure to include a screenshot if you are able, as well as a description of what occured. 
            </p>
            
            <p></p>
        </div>
    );
}