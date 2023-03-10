# Bridger Ski Foundation Sign-Up App

This app is designed to help and increase the workflow for registering and signing up volunteers for brider ski actvities and events!
Do to the fact that this is the web-app, there is no installation need for the users. All they have to do is go to[BSF Signup] for the latest builld.

We wanted the over-all feel of the app to feel smooth and easy to navigate.\
This is our zero-feture relase, so for the time being... it's really easy to navigate due to the fact that there is nothing! 

## Bugs
If you find any bugs you can reach out to Alex at a1Krings@icloud.com
- Please include a short description, time of the event, and a screenshot (if possible).
- Bug tracker: null


## Getting Started 

We used react to bootstrap and get the app up and runing. [Create React App](https://github.com/facebook/create-react-app).
In order to start developing, you need to make sure that you have npm installed on your machine.

You can run the following command to make sure that you have the most recent version of npm installed on your machine:

### `npm install -g npm`

IF you have any issues with installation-- we recommned checking out npms documentation. [npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Next, you want to clone this repo onto your machine, which holds all our source code for this project.

## Firebase
This web-app is being hosted and run using Firebase.
This is what we are also using for our database!
Every sprint, we create a new branch to develop on and merge that branch over to main at the end of the sprint.

## Layout of repo

The two main folders for development are `functions` and `react_project`.

### Functions 
This folder is where we make and create our firebase calls so that we can pull and push our data.
There are two additional folders `api` and `util`
- `api` contains the routing used by the firebase api
- `util` is where we actually contain the cloud functions where we specify what we want to pull.

### React Project
Now here is where the real magic happens.

Before we go to far, you will need to make sure you npm install the following:
- `npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid-pro`
- `npm install firebase`
- `npm install axios`
The firebase and axios are used for getting the data from firebase, and @mui is used for various styling used in our prject.

So within react project--we have three folders: `build`, `public`, and `src`.
We don't mess with build. Firebase uses this folder to build and compile our project.

The public folder, is also boring. This just holds a index.html file.

Now `src`. `src` is a fun time.
#### src
This holds our `app.js` file as well as (you guessed it) contains more folders.
`components` and `screens`
- `components` -- is where we put our helper components for everything in `screens`.
- `screens` -- this holds all of our individual pages (or screens if you would) for the website. 

And that is that.

## Pushing to live
In order to update the live server you need to run the following commands:
- Inside `react_project` run the following: `npm run build` 
- And then from the `root` run `firebase deploy`


## Local development.
First things first. In order to start developing locally-- you'll have to change `"start": xxxx,` (underneath "scripts" in `package.json`\
to: ` "start":
"react-scripts start",`

After that... you can run the folling command:
### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

