

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
                <li>Clicking next again, will bring you to the waiver screen. This will take the user to a different site to sign the waiver. Once sign just go back to the </li>

            </ul>


            <h3>Edit Volunteer</h3>
            <p>
                - To edit the volunteer list to delete, move around, or change something: go to the 'editRegisteredVolunteers' page.
                - Then click on the 'EDIT' button below the table to make the changes.
            </p>
            <h3>Create and View Races</h3>
            <p> 
                - Go to the 'Races' page to make and look at changes.
            </p>
            <h3>Bugs!</h3>
            <p>
                - If there are any bugs/probelms with the website please contact the Bridger Ski technical support
                - We have a bug tracker located in our <a href="https://tasks.office.com/montanaedu.onmicrosoft.com/Home/PlanViews/8zZX43In5U-nne1L0M6HVWQAGiwh?Type=PlanLink&Channel=Link&CreatedTime=638140670776530000">backlog</a>
            </p>
            <h3>Github: </h3>
            <a href="https://github.com/423s23/G3-BSF.git">GitHub Repo</a>

            <h3>Working Features/Commands</h3>
            <ul> 
                <li>We can pull from db</li>
                <li>Pretty(ish) looking pages</li>
                <li>Waiver Working</li>
            </ul>
        </div>
    );
}