import { Component, OnInit } from "@angular/core";
import { SongService } from "./services/song.service";
import { delay, take } from "rxjs/operators";
import { Song } from "./models/song.model";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false
})
export class AppComponent implements OnInit {
  title = "worship-list";

  public songs: Song[];
  private songsColletction: Song[];
  public searchCtrl = new UntypedFormControl("");

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.getSongs();
    this.searchCtrl.valueChanges.pipe(delay(3)).subscribe((value) => {
      this.searchSong(value);
    });
  }

  getSongs() {
    this.songService.getSongs().subscribe((response) => {
      this.songsColletction = response;
      this.songs = this.songsColletction;
    });
  }

  searchSong(search?: string): void {
    if (search) {
      this.songs = this.songsColletction.filter((song) => {
        return song.name.toLowerCase().includes(search.toLowerCase());
      });
      return;
    }
    this.songs = this.songsColletction;
  }
}
