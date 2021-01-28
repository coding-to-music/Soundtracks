// SETUP AND BRING IN MODULES 
const express = require('express');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

// BRING IN THE FILES DEFINING ALL THE ROUTES
const search = require("./routes/api/search");
const season = require("./routes/api/season");
const episode = require("./routes/api/episode");
const showSonglist = require("./routes/api/show-songlist");
const songlist = require("./routes/api/songlist");
const youtubeSearch = require('./routes/api/youtube-search')
const appleSearch = require('./routes/api/apple-search')
const allSeasonSongs = require('./routes/api/allSeasonSongs')
const devToken = require('./routes/api/devToken')
const applePlaylist = require('./routes/api/appleCreatePlaylist')
// const allSeasonSongs = require("./routes/api/allSeasonSongs");

// SETUP THE WEB SERVIER AND MAKE A PUBLIC FOLDER FOR HTML/IMAGE FILES
var app = express();



if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// TELL THE SERVER TO USE THE ROUTES FROM THE IMPORTED FILES ABOVE
app.use(search);
app.use(season);
app.use(episode);
app.use(songlist);
app.use(showSonglist);
app.use(youtubeSearch)
app.use(allSeasonSongs)
app.use(allSeasonSongs)
app.use(appleSearch);
app.use(devToken);
app.use(applePlaylist);


// app.use(allSeasonSongs);

  
// ACTIVATE THE SERVER 
app.listen(PORT, function() {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});