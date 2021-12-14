import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from "../services/jeux/jeux.service";

@Component({
  selector: 'app-jeux-modif',
  templateUrl: './jeux-modif.component.html',
  styleUrls: ['./jeux-modif.component.css']
})
export class JeuxModifComponent implements OnInit {
  jeu: any = null;
  change:boolean = false;

  constructor(
    private Jeux: JeuxService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Jeux.getJeux(id).subscribe((value: any) => {
      console.log(value)
      this.jeu = value;
    });
  }

  modifGame() {
    this.Jeux.updateJeux(this.jeu).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
