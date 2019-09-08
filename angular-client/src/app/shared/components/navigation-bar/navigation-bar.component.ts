import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  public navigateToHome(): void {
    this.route.navigateByUrl("");
  }

  public navigateToCreateTutorial(): void {
    this.route.navigateByUrl("/create-tutorial");
  }

}
