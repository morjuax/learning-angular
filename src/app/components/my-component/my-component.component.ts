import { Component, OnInit } from "@angular/core";

@Component({
  selector: "MyComponent",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"]
})
export class MyComponentComponent implements OnInit {
  public title: string;
  public comment: string;
  public year: number;
  public showMovies: boolean;

  constructor() {
    this.title = "Title 1";
    this.comment = "comments";
    this.year = 2020;
    this.showMovies = true;
    console.log("Component my-component loaded !!");

    console.log({
      title: this.title,
      comment: this.comment,
      year: this.year
    });
  }

  ngOnInit() {}

  hideMovies() {
    this.showMovies = false;
  }
}
