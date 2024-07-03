const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
};

const playlistObj = library.playlists;
// console.log(playlistObj);

const tracksObj = library.tracks;
// console.log(tracksObj);




/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


// const printPlaylists = function(obj) {
//   let playlistName = "";
//   let numOfTracks = 0;
//   let results = "";
//     for (let playlistNum in obj) {
//       playlistName = obj[playlistNum]["name"];
//       numOfTracks = obj[playlistNum]["tracks"].length;
//       console.log(`${playlistNum}: ${playlistName} - ${numOfTracks} tracks`)
//     }
// }

const printPlaylists = function(obj) {
  for (let playlistNum in obj) {
    const playlistName = obj.playlists[playlistNum]["name"];
    const numOfTracks = obj.tracks[playlistNum]["tracks"].length;
    console.log(`${playlistNum}: ${playlistName} - ${numOfTracks} tracks`);
  }
};

printPlaylists(library);

// const printPlaylists = function(obj) {
//     let playlistName = "";
//     let numOfTracks = 0;
//     let results = "";
//       for (let playlistNum in obj) {
//         playlistName = obj[playlistNum]["name"];
//         numOfTracks = obj[playlistNum]["tracks"].length;
//         results += (`${playlistNum}: ${playlistName} - ${numOfTracks} tracks `);
//       }
//       console.log(results);
//       return results;
//   }
// assertEqual(printPlaylists(playlistObj), "p01: Coding Music - 2 tracks p02: Other Playlist - 1 tracks ");



// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function(obj) {

  for (let trackNum in obj) {
    const trackName = obj.tracks[trackNum]["name"];
    const artistName = obj.tracks[trackNum]["artist"];
    const albumName = obj.tracks[trackNum]["album"];
    console.log(`${trackNum}: ${trackName} by ${artistName} (${albumName}) `);
  }
};

printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)





const printPlaylist = function(playlistId, libObj) {
  const trackArr = libObj["playlists"][playlistId]["tracks"];
  // print playlist info
  const playlistName = libObj["playlists"][playlistId]["name"];
  const numOfTracks = libObj["playlists"][playlistId]["tracks"].length;
  console.log(`${playlistId}: ${playlistName} - ${numOfTracks} tracks`);
  //loop through track array to get song info
  for (let trackNum of trackArr) {
    const trackName = libObj["tracks"][trackNum]["name"];
    const artistName = libObj["tracks"][trackNum]["artist"];
    const albumName = libObj["tracks"][trackNum]["album"];
    console.log(`${trackNum}: ${trackName} by ${artistName} (${albumName}) `);
  }
};

printPlaylist("p01", library);



// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId, libObj) {
  libObj.playlists[playlistId].tracks.push(trackId);
};

addTrackToPlaylist("t03", "p01", library);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album, libObj) {
  const newTrackNum = generateUid();
  const newTrackobj = {
    id: newTrackNum,
    name,
    artist,
    album};
  console.log(newTrackNum);

  libObj.tracks[newTrackNum] = newTrackobj;
};

addTrack('bob', 'bobbbb', 'yeabob', library);



// adds a playlist to the library
const addPlaylist = function(name, libObj) {
  const newplaylistNum = generateUid();
  libObj.playlists[newplaylistNum] = {
    id: newplaylistNum,
    name,
    tracks: [],
  };
  return libObj;
};

console.log("add playlist", addPlaylist('coding tunes', library));
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};