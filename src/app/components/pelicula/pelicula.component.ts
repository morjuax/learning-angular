import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() movie: Pelicula;
  @Input() i: number;
  @Output() movieFavorite = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectFavorite(event, movie){
    // console.log(movie);
    this.movieFavorite.emit({
      movie
    });

  }

}
