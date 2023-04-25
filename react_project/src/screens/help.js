

export default function Help(){
    return(
        <div>
            <h1>Help Page</h1>
            <hr></hr>
            <h2>Welcome! </h2>
            <p>This is an app developed by a group of students at MSU to help streamline the volunteer process!</p>
            <p>This page serves as a formal guide for any and all users. </p>
            
            <h3>Races</h3>
            <ul>
                <li> The 'Races' page displays all the current races for the day and any releveant information about the races</li>
            </ul>

            <h3>Series Deatail Screen</h3>
            <ul>
                <li>Here-- the user can view and edit specfific races series.</li>
                <li>This could be used to adjust volunteers or any other race information</li>
            </ul>

            <h3>Checkin Screen</h3>
            <p>The checkin screen tab is the process that the volunteers will have to go throug when siging up.</p>
            <p>This page goes through four more screens.</p>
            <ul>
                <li>The first being contact info where they put their name, email and phone.</li>
                <li>After pusing the next button in the bottom corner it will take them to the screen where they can select what position they are volunteering for.</li>
                <li>Clicking next again, will bring you to the waiver screen. This will take the user to a different site to sign the waiver. Once signed you can press the back button on the iPad to get back to the BSF site</li>
                <li>Finally, we hit the 'Submit' screen. Press the 'Finish' button to add the volunteer and it will automatically bring you back to the start!
                </li>
            </ul>


            <h3>Edit Registered Volunteers </h3>
            <p>
                This is a dedicated page to edit the volunteer list and make any changes to the list of people working! You can delete or edit any volunteer listed. 
            </p>
            <h3>Volunteers</h3>
            <p>Here is a master list of all volunteers that are either current volunteers or past volunteers. This is a view only list that cannot be edited.</p>
            <h3>Create and View Races</h3>
            <p> 
                - Go to the 'Races' page to make and look at changes.
            </p>
            <h3>Import Codes</h3>
            <p>This page is for uploading the Bridger ski pass codes. </p>
            <ul>
                <li>Click the import codes button to select the file containg the current ski codes</li>
                <li>Once you can see it displayed, check that all the codes were imported correctly.</li> 
                <li>If not, you can double click and edit a code.</li>
                <li>Lastly, press the upload button and wait for the 'Import Success Prompt' </li>
            </ul>
            <h3>Bugs!</h3>
            <ul>
                <li> If there are any bugs/probelms with the website please contact the Bridger Ski technical support </li>
                <li>If possiple, take a note of current time and a screenshot of the bug so we can squash it fast.</li>
                <li>We have a bug tracker located in our <a href="https://tasks.office.com/montanaedu.onmicrosoft.com/Home/PlanViews/8zZX43In5U-nne1L0M6HVWQAGiwh?Type=PlanLink&Channel=Link&CreatedTime=638140670776530000">backlog</a></li>

            </ul>
            <h3>Github: </h3>
            <a href="https://github.com/423s23/G3-BSF.git">GitHub Repo</a>

            <h3>Working Features/Commands</h3>
            <ul> 
                <li>A liitle bit of everything.</li>
            </ul>
        </div>
    );
}