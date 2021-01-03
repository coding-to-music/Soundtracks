// SETUP AND BRING IN MODULES 
const express = require('express');
const PORT = process.env.PORT || 8080;

// BRING IN THE FILES DEFINING ALL THE ROUTES
const search = require("./routes/api/search");
const season = require("./routes/api/season");
const episode = require("./routes/api/episode");
const showSonglist = require("./routes/api/show-songlist");
const songlist = require("./routes/api/songlist");
const youtubeSearch = require('./routes/api/youtube-search')
const allSeasonSongs = require('./routes/api/allSeasonSongs')

// const allSeasonSongs = require("./routes/api/allSeasonSongs");

// SETUP THE WEB SERVIER AND MAKE A PUBLIC FOLDER FOR HTML/IMAGE FILES
var app = express();

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

// app.use(allSeasonSongs);

  
// ACTIVATE THE SERVER 
app.listen(PORT, function() {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});