import { Films } from "../../models/films.model";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private dbPath = '/films';
  filmsRef: AngularFirestoreCollection<Films>;

  constructor(
    private db: AngularFirestore
  ) {
    this.filmsRef = db.collection(this.dbPath);
  }

  getAllFilms(): any {
    return this.filmsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewFilm(film : Films): any{
    return new Observable(obs => {
      this.filmsRef.add({...film}).then(()=>{
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.filmsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(film: Films) {
    return new Observable(obs => {
      this.filmsRef.doc(film.id).update(film);
      obs.next();
    });
  }

  delete(id: any){
    this.db.doc(`films/${id}`).delete();
  }
}
