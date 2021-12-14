import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import {FilmNewComponent} from "./film-new/film-new.component";
import {HomeComponent} from "./home/home.component";
import {FilmModifComponent} from "./film-modif/film-modif.component";
import {JeuxListComponent} from "./jeux-list/jeux-list.component";
import {JeuxNewComponent} from "./jeux-new/jeux-new.component";
import {JeuxModifComponent} from "./jeux-modif/jeux-modif.component";
import {MusiqueListComponent} from "./musique-list/musique-list.component";
import {MusiqueNewComponent} from "./musique-new/musique-new.component";
import {MusiqueModifComponent} from "./musique-modif/musique-modif.component";

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  //FILMS
  {
   path: 'films',
   component: FilmListComponent
  },
  {
    path: 'new-film',
    component: FilmNewComponent
  },
  {
    path: 'modif/:id',
    component: FilmModifComponent
  },
  //JEUX
  {
    path: 'jeux',
    component: JeuxListComponent
  },
  {
    path: 'new-jeux',
    component: JeuxNewComponent
  },
  {
    path: 'modif-jeux/:id',
    component: JeuxModifComponent
  },
  //MUSIQUE
  {
    path: 'musique',
    component: MusiqueListComponent
  },
  {
    path: 'new-musique',
    component: MusiqueNewComponent
  },
  {
    path: 'modif-musique/:id',
    component: MusiqueModifComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
