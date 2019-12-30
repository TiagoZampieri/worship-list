import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  // songsRef: AngularFirestoreCollection;
  constructor(
    public af: AngularFireAuth,
    public fireStore: AngularFirestore
  ) {
    this.loginUser();
  }

  getSongs() {
    return this.fireStore.collection('songs').get();
  }

  loginUser() {
    console.log('login');
    this.af.auth.signInAnonymously().catch(error => {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      // ...
    });
  }
}
