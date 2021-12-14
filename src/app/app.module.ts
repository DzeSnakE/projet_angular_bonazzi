import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from "@angular/forms";
import { FilmService } from "./services/film/film.service";
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './film-list/film-list.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxListComponent } from './jeux-list/jeux-list.component';
import { JeuxModifComponent } from './jeux-modif/jeux-modif.component';
import { JeuxNewComponent } from './jeux-new/jeux-new.component';
import { JeuxService } from "./services/jeux/jeux.service";
import { MusiqueComponent } from './musique/musique.component';
import { MusiqueNewComponent } from './musique-new/musique-new.component';
import { MusiqueListComponent } from './musique-list/musique-list.component';
import { MusiqueModifComponent } from './musique-modif/musique-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmModifComponent,
    FilmNewComponent,
    HomeComponent,
    FilmListComponent,
    JeuxComponent,
    JeuxListComponent,
    JeuxModifComponent,
    JeuxNewComponent,
    MusiqueComponent,
    MusiqueNewComponent,
    MusiqueListComponent,
    MusiqueModifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    FilmService,
    JeuxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
