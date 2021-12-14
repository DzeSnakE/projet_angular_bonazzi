import { Component, OnInit } from '@angular/core';
import {MusiqueService} from "../services/musique/musique.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-musique-modif',
  templateUrl: './musique-modif.component.html',
  styleUrls: ['./musique-modif.component.css']
})
export class MusiqueModifComponent implements OnInit {
  musique: any = null;
  change: boolean = false;

  constructor(
    private Musique: MusiqueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Musique.getMusique(id).subscribe((value: any) => {
      console.log(value)
      this.musique = value;
    });
  }
  modifMusique() {
    this.Musique.updateMusique(this.musique).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
