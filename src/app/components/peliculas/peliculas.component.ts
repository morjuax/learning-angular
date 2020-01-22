import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "Peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;

  constructor() {
    this.title = "Title Movies 2";
    console.log("Constructor launch");
  }

  ngOnInit() {
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
}
