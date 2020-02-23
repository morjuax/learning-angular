import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Pelicula } from "../../models/pelicula";

@Component({
  selector: "Peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public movies: Array<Pelicula>;
  titleSlider = 'Peliculas';
  public movieFavorite: Pelicula;

  constructor() {
    this.title = 'Title Movies 2';
    this.movies = [
      new Pelicula(
        "Spiderman 5",
        2014,
        "https://ddgnoticias.com/wp-content/uploads/2019/09/1-14.jpg"
      ),
      new Pelicula(
        "Spiderman 4",
        2015,
        "https://ddgnoticias.com/wp-content/uploads/2019/09/1-14.jpg"
      ),
      new Pelicula(
        "The avengers endgame",
        2019,
        "https://img-cdn.hipertextual.com/files/2019/07/hipertextual-ver-avengers-endgame-4k-2019810743.jpeg?strip=all&lossy=1&quality=55&resize=740%2C490&ssl=1"
      ),
      new Pelicula(
        "Batman",
        2019,
        "https://www.indiewire.com/wp-content/uploads/2017/11/jl-fp-0076.jpg"
      ),
      new Pelicula(
        "kk",
        2016,
        "https://www.indiewire.com/wp-content/uploads/2017/11/jl-fp-0076.jpg"
      )
    ];
  }

  ngOnInit() {
    console.log(this.movies);
    console.log("Component Movies init");
  }

  ngDoCheck() {
    console.log("Component docheck launch");
  }

  changeTitle() {
    this.title = "Title changed";
  }

  ngOnDestroy() {
    console.log("the component is to be removed");
  }

  showMovieFavorite(event){
    console.log(event);
    this.movieFavorite = event.movie;
  }
}
