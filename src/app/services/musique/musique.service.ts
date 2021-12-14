import { Musique } from "../../models/musique.model";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MusiqueService {
  private dbPath = '/services';
  musiqueRef: AngularFirestoreCollection<Musique>;

  constructor(
    private db: AngularFirestore
  ) {
    this.musiqueRef = db.collection(this.dbPath);
  }

  getAllMusique(): any {
    return this.musiqueRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewMusique(musique : Musique): any{
    return new Observable(obs => {
      this.musiqueRef.add({...musique}).then(()=>{
        obs.next();
      })
    })
  }

  getMusique(id: any): any {
    return new Observable(obs => {
      this.musiqueRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  updateMusique(musique: Musique) {
    return new Observable(obs => {
      this.musiqueRef.doc(musique.id).update(musique);
      obs.next();
    });
  }

  delete(id: any){
    this.db.doc(`services/${id}`).delete();
  }
}
