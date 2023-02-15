# Bridger Ski Foundation Sign-Up App

This app is designed to help and increase the workflow for registering and signing up volunteers for brider ski actvities and events!
Do to the fact that this is the web-app, there is no installation need for the users. All they have to do is go to[BSF Signup] for the latest builld.

We wanted the over-all feel of the app to feel smooth and easy to navigate.\
This is our zero-feture relase, so for the time being... it's really easy to navigate due to the fact that there is nothing! 

## Bugs
If you find any bugs you can reach out to Alex at a1Krings@icloud.com
- Please include a short description, time of the event, and a screenshot (if possible).


## Getting Started 

We used react to bootstrap and get the app up and runing. [Create React App](https://github.com/facebook/create-react-app).
In order to start developing, you need to make sure that you have npm installed on your machine.

You can run the following command to make sure that you have the most recent version of npm installed on your machine:

### `npm install -g npm`

IF you have any issues with installation-- we recommned checking out npms documentation. [npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Next, you want to clone this repo onto your machine, which holds all our source code for this project.

## Layout of repo

There are two main folders: `server` and `client`.
For now, there is just a temporary `server.js` file that is just temporary place for where we will continue developing the server.

In the `client` folder there are three more folders:
- `src`
-`node_modules`
-`public`

`src` holds the App.js files as well as all other react components.
`node_modules` contains all the nodes information when you perform a `npm install`. 
`public` holds the index.html file.


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

