# Bridger Ski Foundation Sign-Up App

This app is designed to help and increase the workflow for registering and signing up volunteers for bridger ski activities and events!
Due to this is the web-app, there is no installation need for the users. All they have to do is go to the [BSF Signup] website for the latest build.


The goal of our project was to create an app that was useful and easy to navigate.\
This is Sprint number five and is our final build for the project. Over the course of the project, we were able to develop 
all the main features required. 

The developers for this project were Michael Buffington, Andrew Anselmo, Nathan Parnell, and Alex Krings. 

## Bugs
If there are any bugs that you notice during development, please take note of it and add it to the bug backlog.
If a user reports a bug, please take note of any relevant information and again add the bug to the backlog.

If you would like to report a bug that you have found, please notify the Bridger Ski technical team and send any and all relevant information. Please attach 
a screenshot if possible and take note of the time


## Getting Started 

React, Node.js, and Firebase were the technologies used to create our web app. In order to start developing, you need to first make sure that
you have `npm` installed on your machine (as well as other helpers explained below).

You can run the following command to make sure that you have the most recent version of npm installed on your machine:

### `npm install -g npm`

If you have any issues with installation or `npm`-- we recommend checking out npm documentation: [npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

The last step is to set up the repo on your own machine.

## Firebase
This web-app is being hosted on Firebase, and is also what we are using for our database. For our team-- every sprint we would create a new branch from main and develop there.
At the end of the sprint we would merge back to main and then deploy to production. 

## Layout of repo

The two main folders for development are `functions/` and `react_project/`.

### Functions 
Functions is where we create our firebase APIs for the CRUD operations as well as for login functionality.

Within `funtions/` there are two addition folders `functions/api/` and `functions/util/`.
- `api/` contains all of the firebase calls pertaining to CRUD operations. Most importantly this deals with the email functionality as well as the BSF voucher functionality. 
- `util/` is also important and contains the firebase functionality for admin login as well as authentication. 

### React Project
Now here is where the real magic happens.

Before we go too far, you will need to make sure you npm install the following:
- `npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid-pro`
- `npm install firebase`
- `npm install axios`
- `npm install papaparse`

`firebase` and `axios` are used for various firebase calls, but also used to push to production.

 `@mui` is a React styling API that we used throughout the project. Such as for the stepper when creating a
new volunteer or for the table that displays the vouchers. 

`papaparse` is only used to import the bridger ski codes. 

The firebase and axios are used for getting the data from firebase, and @mui is used for various styling used in our project.

So within `react_project/`--we have three folders: `/build`, `/public`, and `/src`.

We don't mess with build. Firebase uses this folder to build and compile our project when we are finished making changes for the sprint.

Now `/src`, `/src` is a fun time.
#### src
This holds our `app.js` file as well as (you guessed it) contains more folders.
`react_project/src/components` and `react_project/src/screens`
- `/components` -- is where we put our helper components and functions for the various screens.
- `/screens` -- this holds all of our individual pages (or screens if you would) for the website. 
This folder also contains our test files. These files run when ever a push is made to the repo to do a check on the build.



## Pushing to live
In order to update the live site you need to do the following.
- First: Merge the branch with main and resolve all conflicts.
- Second: Open up a terminal and go to where you have the project.
- Third: Go to the `/react_project` and run the following: `npm run build`.
- Fourth: Go to the `root` of the project and run the following: `firebase deploy`.

## Local development.
First things first. In order to start developing locally-- you'll have to change a line of code located in `package.json`. 

Change `"start: xxxx"` from `"start: react-scripts start"` to `"start: 3000`

Up next, open up a terminal and navigate to `/react_project` and run the following command. 
### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


//Note: if you changed the port to something other than 3000, then change the localhost url to the matching port.

This page will now show what ever current progress you have made locally and will also be able to show any bugs that there may be.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### The End
And that's it! If you can think of anything else to add feel free to add to the readme.
