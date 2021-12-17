export class Musique {
  id?: string;
  titre: string;
  artiste: string;
  album: string;
  duree: string;
  lien: string;
  genre: string;
  mp3: null;

  constructor() {
    this.titre = '';
    this.artiste = '';
    this.album = '';
    this.duree = '';
    this.lien = '';
    this.genre = '';
    this.mp3;
  }
}
