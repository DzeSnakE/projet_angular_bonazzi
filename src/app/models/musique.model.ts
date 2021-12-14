export class Musique {
  id?: string;
  titre: string;
  artiste: string;
  album: string;
  duree: string;
  lien: string;
  genre: string;

  constructor() {
    this.titre = '';
    this.artiste = '';
    this.album = '';
    this.duree = '';
    this.lien = '';
    this.genre = '';
  }
}
