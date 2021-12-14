import {Component, Input, OnInit} from '@angular/core';
import {MusiqueService} from "../services/musique/musique.service";

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})
export class MusiqueComponent implements OnInit {
  @Input() musiqueTitre?: string;
  @Input() musiqueArtiste?: string;
  @Input() musiqueAlbum?: string;
  @Input() musiqueDuree?: string;
  @Input() musiqueLien?: string;
  @Input() musiqueGenre?: string;
  @Input() id?: string;

  constructor(
    private Musique: MusiqueService
  ) { }

  ngOnInit(): void {
  }

  suppr():void {
    this.Musique.delete(this.id);
  }
}
