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
  },

  printPlaylists: function(obj) {
    for (let playlistNum in obj.playlists) {
      const playlistName = obj.playlists[playlistNum].name;
      const numOfTracks = obj.playlists[playlistNum].tracks.length;
      console.log(`${playlistNum}: ${playlistName} - ${numOfTracks} tracks`);
    }
  },

  printTracks: function(obj) {
    for (let trackNum in obj.tracks) {
      const trackName = obj.tracks[trackNum].name;
      const artistName = obj.tracks[trackNum].artist;
      const albumName = obj.tracks[trackNum].album;
      console.log(`${trackNum}: ${trackName} by ${artistName} (${albumName}) `);
    }
  },

  printPlaylist: function(playlistId, libObj) {
    const trackArr = libObj.playlists[playlistId].tracks;
    // print playlist info
    const playlistName = libObj.playlists[playlistId].name;
    const numOfTracks = libObj.playlists[playlistId].tracks.length;
    console.log(`${playlistId}: ${playlistName} - ${numOfTracks} tracks`);
    //loop through track array to get song info
    for (let trackNum of trackArr) {
      const trackName = libObj.tracks[trackNum].name;
      const artistName = libObj.tracks[trackNum].artist;
      const albumName = libObj.tracks[trackNum].album;
      console.log(`${trackNum}: ${trackName} by ${artistName} (${albumName}) `);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId, libObj) {
    return libObj.playlists[playlistId].tracks.push(trackId);
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album, libObj) {
    const newTrackNum = this.generateUid();
    const newTrackobj = {
      id: newTrackNum,
      name,
      artist,
      album};
    libObj.tracks[newTrackNum] = newTrackobj;
  },

  addPlaylist: function(name, libObj) {
    const newplaylistNum = this.generateUid();
    libObj.playlists[newplaylistNum] = {
      id: newplaylistNum,
      name,
      tracks: [],
    };
  }
};

console.log(library);
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// };