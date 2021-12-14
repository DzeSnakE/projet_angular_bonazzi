import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Jeux } from "../../models/jeux.models";


@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  private dbPath = '/jeux';
  jeuxRef: AngularFirestoreCollection<Jeux>;

  constructor(
    private db: AngularFirestore
  ) {
    this.jeuxRef = db.collection(this.dbPath);
  }

  getAllJeux(): any {
    return this.jeuxRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewJeux(jeux : Jeux): any{
    return new Observable(obs => {
      this.jeuxRef.add({...jeux}).then(()=>{
        obs.next();
      })
    })
  }

  getJeux(id: any): any {
    return new Observable(obs => {
      this.jeuxRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  updateJeux(jeux: Jeux) {
    return new Observable(obs => {
      this.jeuxRef.doc(jeux.id).update(jeux);
      obs.next();
    });
  }

  deleteJeux(id: any){
    this.db.doc(`jeux/${id}`).delete();
  }
}
