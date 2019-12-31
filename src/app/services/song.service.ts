import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Song } from '../models/song.model';

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

  public getSongs() {
    const query = this.fireStore.collection('songs');

    return query.get().pipe(
      map(snapshot => {
        const items = [];
        snapshot.docs.map(a => {
          const data = a.data();
          const id = a.id;
          items.push({id, ...data});
        });
        return items;
      })
    );
  }

  public createSong(song?: Song) {
    const songData = {id: 1, name: 'Song Name', key: 'Song key', songUrl: 'song Url', chordsUrl: 'chords'},
    const query = this.fireStore.collection('songs');
    return query.add(songData);
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
