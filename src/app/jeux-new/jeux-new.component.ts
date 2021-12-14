import { Component, OnInit } from '@angular/core';
import {Jeux} from "../models/jeux.models";
import {JeuxService} from "../services/jeux/jeux.service";

@Component({
  selector: 'app-jeux-new',
  templateUrl: './jeux-new.component.html',
  styleUrls: ['./jeux-new.component.css']
})
export class JeuxNewComponent implements OnInit {

  public jeu!: Jeux;

  constructor(
    private Jeux : JeuxService
  ) { }

  ngOnInit(): void {
    this.jeu = new Jeux();
  }

  addGame(){
    this.Jeux.saveNewJeux(this.jeu).subscribe(()=>{
      this.jeu = new Jeux();
    })
  }
}
