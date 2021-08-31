import { Injectable } from "@angular/core";
import { collection, Firestore } from "@angular/fire/firestore";
import { collectionData } from "rxfire/firestore";
import { map } from "rxjs/operators";
import { Song } from "../models/song.model";

@Injectable({
  providedIn: "root",
})
export class SongService {
  constructor(private fireStore: Firestore) {
    // this.loginUser();
  }

  public getSongs() {
    const query = collection(this.fireStore, "songs");

    return collectionData(query).pipe(
      map((snapshot: any) => {
        const items = [];
        snapshot.map((a) => {
          const data = a;
          const id = a.id;
          items.push({ id, ...data });
        });
        return items;
      })
    );
  }

  // public createSong(song?: Song) {
  //   const query = this.fireStore.collection("songs");
  //   return query.add(song);
  // }

  // loginUser() {
  //   console.log("login");
  //   this.af.auth.signInAnonymously().catch((error) => {
  //     // Handle Errors here.
  //     console.log(error.code);
  //     console.log(error.message);
  //     // ...
  //   });
  // }
}
