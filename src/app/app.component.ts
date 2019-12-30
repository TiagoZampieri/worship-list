import { Component, OnInit } from '@angular/core';
import { SongService } from './services/song.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'worship-list';

  public lista = [
    {
      id: 0,
      name: 'Musica 1',
      key: 'E',
      songLink: '',
      chordsLink: ''
    }
  ];

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.songService.getSongs().pipe(take(1)).subscribe(response => {
      console.log(response);
    });
  }
}
