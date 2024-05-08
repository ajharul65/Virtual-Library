// import the Media class:
const Media = require('./Media');
// create your Music class:


class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }

  static shortestAlbum(musicList) {
    let shortestMusic = null;
    let shortestLength = Infinity;
    for (const music of musicList) {
      if (music.length < shortestLength) {
        shortestMusic = music;
        shortestLength = music.length;
      }
    }
    return shortestMusic;
  }
}
// don't change below
module.exports = Music;
