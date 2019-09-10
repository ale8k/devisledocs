import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public $tutorialNamesIdsAndCategories;

  constructor(
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.$tutorialNamesIdsAndCategories = this.apiService.getAllTutorialNamesIdsAndCategories();
  }

  public navigateToTutorial(id: String): void {
    this.route.navigateByUrl("tutorial/" + id);
  }

}
