<h1 align="center">Chat App (React, Redux, Typescript & Socket.IO) 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/adis_reve" target="_blank">
    <img alt="Twitter: adis_reve" src="https://img.shields.io/twitter/follow/adis_reve.svg?style=social" />
  </a>
</p>

React SPA chat application, written with
- React
- Redux
- TypeScript
- Express.js
- Socket.io
- Module SCSS

## App Features

- Pages
  - Navigation Bar
    - Dark/Light Mode Toggle
    - Navigation
  - Chat Page
    - Sending and receiving messages on the same server
    - Chat Panel with messages from guest user and away user
    - Unread messages, when away from chat tab
    - Automatic scrolling to the bottom of chat everytime it loads or user writes a message
    - Avatar based on username
    - Showing time on which every message is sent
    - Emoji support in messages
    - Link Parser
  - Settings Page
    - Change username
    - Clock Display (12h / 24h)
    - Send message on CTRL + Enter
    - Persist data to local storage
    - Reset Settings to Default
TODO:

- [x] Add localization
- [ ] Check for unique usernames and assign it by default
- [ ] Scroll to bottom CTA
- [ ] Parse links with metadata
- [ ] Online and offline status
- [ ] Write tests

Installation process:

# Installation Process

### Development

Clone the project to your local directory.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following commands:

After cloning is done, run command ```yarn install``` to install all necessary dependencies for the project:

Do the same command for the `client/` folder. Installation of dependencies could take a few minutes to finish. 

## Usage

To start the application, we first need to run the server - ```yarn start```, after which Socket.io will be open and listen on PORT 3001. 

Port is defined in `server.js` file, so it can be easily reconfigured if needed. If deployed somewhere else, it is set up that it works equally as well for production use.

``const port = process.env.PORT || 3001;``

After starting a server, run React app by executing the following command ```yarn start``` in `client\` subfolder.


When application starts, go to settings and update username, after which you can open a new window with `localhost:3000` - (preferably in Incognito mode or different browser/same browser with different application state). 

##### Alternatively

Just run npm start in root folder and the app will be hosted on `http://localhost:3001`

**Happy Chatting!** :smile:

# Build

To build the app, just enter ```yarn run build```, which will generate a folder called `build/`

## Technical Details

Browserlist Target: >0.2%, not dead

## Author

👤 ** Adis Jugo **

* Website: http://jugoadis.com
* Twitter: [@adisreve](https://twitter.com/adisreve)
* GitHub: [@adisreve](https://github.com/adisreve/)

## Show your support

Give a ⭐️ if this project helped you!

***