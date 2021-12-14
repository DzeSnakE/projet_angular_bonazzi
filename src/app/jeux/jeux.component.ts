import {Component, Input, OnInit} from '@angular/core';
import {JeuxService} from "../services/jeux/jeux.service";

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  @Input() gameName?: string;
  @Input() gameEditor?: string;
  @Input() gameDev?: string;
  @Input() gameCategory?: string;
  @Input() gameDate?: string;
  @Input() gamePlateformes?: string;
  @Input() gameAffiche?: string;
  @Input() id?: string;


  constructor(
    private Jeux: JeuxService
  ) { }

  ngOnInit(): void {
  }

  changeColor() {
    return this.gameName ? 'purple' : 'red';
  }

  suppr():void {
    this.Jeux.deleteJeux(this.id);
  }
}
