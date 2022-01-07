
# SoundTracks

https://github.com/trilambda122/Soundtracks

Live project site can be acces here: [SOUNDTRACKS](https://tv-soundtracks.herokuapp.com)

## Table of Contents

[Description](#description)...

[Lessons learned](#Lessons)...

[Technology Used](#Technology)...

[Useage](#useage)...

[Contribitors](#Contribitors)...

[Tests](#Tests)...

[Questions](#Questions)...

[Application Screen Shots](#ScreenShots)...

---
## Description
Have you ever been watching a show and thought, "This show has excellent music, I would sure like to have a playlist of this!". That's the problem Soundtracks is here to help with. Just search for your favorite show, movie, or game, and it will create a playlist in your apple music account. Or if you want to just watch a few songs videos, you can do that too.

This is a React application with utilizes Apple MusicKit and Youtube APIs.

## Lessons
**Apple MusicKit API, and developer console:**  This had a learning curve as little documentation existed outside of Apple's developer site.  Even less documentation regarding MusicKitJS or any web related use of Apple Music beyond a basic player setup. Especially under-documented was how to authenticate a user account without having developer tokens hardcoded into the code directly.

**Apple relies on JSON web tokens:**  Apple uses them for both user tokens and developer tokens.  This was a great experience to learn and understand JWT in depth. 

**Youtube APIv3:**  I learned both how to use the Youtube APIv3 and documentation. The Youtube API documentation was much more manageable and verbose than Apple's, with a larger online community for support. 

**Google's Developer console:**  Along with Quota calculations for Youtube API v3

**Use of Global State and Context hooks within React**


## Technology
- Nodejs
- React
- ExpressJS
- Apple MusicKit
- Youtube APiv3

---
## Useage
In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---
## Contribitors 

Shane Schilling

---
## Tests
None at this time 

---
## Questions

Github profile can be found here:  http://github.com/trilambda122

Please direct any additonal questions to: trilambda122@gmail.com


---
## ScreenShots


Video Demo

<img src="./screenshots/Soundtrack-Playlist.gif" alt="drawing" width="300"/>

Example of search results for a shows season / episode: 

<img src="./screenshots/soundtracks-songresults_600xAuto.png" alt="drawing" width="300"/>

Example of music restuls found on apple tha could be turned into a playlist inside users apple music account

<img src="./screenshots/soundtracks-appleresults_600xAuto.png" alt="drawing" width="300"/>

Youtube song restuls for a given song. 

<img src="./screenshots/soundtracks-youtube_600xAuto.png" alt="drawing" width="300"/>

## Package.json scripts
```java
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test-client": "cd ./client && npm test",
    "seed": "node seed/seeder.js",
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run dev",
    "start:prod": "node server.js",
    "client": "cd ./client && npm start",
    "install": "cd client && npm install",
    "dev": "concurrently --names 'server,client' --prefix-colors 'yellow,blue' \"node server.js \" \" npm run client \" ",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
```

See .env.example
```java
NODE_ENV=dev
TEAM_ID=
KEY_ID=
ALG=
SECRET_KEY=
BASE_URL=
YOUTUBE_API=
```

Create a similar file .env
