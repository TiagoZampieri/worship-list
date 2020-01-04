import { Component, OnInit } from '@angular/core';
import { SongService } from './services/song.service';
import { take } from 'rxjs/operators';
import { Song } from './models/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'worship-list';

  public songs: any[];

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.songService.getSongs().subscribe(response => {
      this.songs = response;
    });
  }
}
