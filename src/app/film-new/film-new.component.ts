import { Component, OnInit } from '@angular/core';
import {Films} from "../models/films.model";
import {FilmService} from "../services/film/film.service";

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css']
})
export class FilmNewComponent implements OnInit {

  public film!: Films;

  constructor(
    private Film : FilmService
  ) { }

  ngOnInit(): void {
    this.film = new Films();
  }

  add(){
    this.Film.saveNewFilm(this.film).subscribe(()=>{
      this.film = new Films();
    })
  }

}
