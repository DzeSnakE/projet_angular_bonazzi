import { Component, OnInit } from '@angular/core';
import {JeuxService} from "../services/jeux/jeux.service";

@Component({
  selector: 'app-jeux-list',
  templateUrl: './jeux-list.component.html',
  styleUrls: ['./jeux-list.component.css']
})
export class JeuxListComponent implements OnInit {
  jeu!:any;

  constructor(
    private jeux: JeuxService
  ) { }

  ngOnInit(): void {
    this.jeux.getAllJeux().subscribe((data: any) => {
      this.jeu = data;
    });
  }
}
