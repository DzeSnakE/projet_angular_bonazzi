import { Component, OnInit } from '@angular/core';
import {MusiqueService} from "../services/musique/musique.service";

@Component({
  selector: 'app-musique-list',
  templateUrl: './musique-list.component.html',
  styleUrls: ['./musique-list.component.css']
})
export class MusiqueListComponent implements OnInit {
  musiques!:any;
  constructor(
    private Musique: MusiqueService
  ) { }

  ngOnInit(): void {
    this.Musique.getAllMusique().subscribe((data: any) => {
      this.musiques = data;
    });
  }
}
