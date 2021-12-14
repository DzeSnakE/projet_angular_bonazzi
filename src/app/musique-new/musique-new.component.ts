import { Component, OnInit } from '@angular/core';
import {Musique} from "../models/musique.model";
import {MusiqueService} from "../services/musique/musique.service";
import {Films} from "../models/films.model";

@Component({
  selector: 'app-musique-new',
  templateUrl: './musique-new.component.html',
  styleUrls: ['./musique-new.component.css']
})
export class MusiqueNewComponent implements OnInit {

  public  musique!: Musique;

  constructor(
    private Musique : MusiqueService
  ) { }

  ngOnInit(): void {
    this.musique = new Musique();
  }
  addMusique(){
    this.Musique.saveNewMusique(this.musique).subscribe(()=>{
      this.musique = new Musique();
    })
  }
}

