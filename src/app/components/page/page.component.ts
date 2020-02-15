import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  public name: string;

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.params.subscribe(
      (params: Params) => {
        // console.log(params);
        this.name = params.name;
      },
      err => console.log(err)
    );
  }

  customRedirect() {
    this.router.navigate(["/page", "juan-moreno"])
  }
}
