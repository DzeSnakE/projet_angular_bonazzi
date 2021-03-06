import {Component, Input, OnInit} from '@angular/core';
import {MusiqueService} from "../services/musique/musique.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

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
  @Input() musiqueMp3?: null;
  @Input() id?: string;
  url : SafeResourceUrl | undefined;

  constructor(
    private Musique: MusiqueService,
    public sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.musiqueLien != null) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.musiqueLien);
    }
  }

  suppr():void {
    this.Musique.delete(this.id);
  }
}
