import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TutorialService } from "../shared/services/tutorial.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {


  public $tutorialNamesIdsAndCategories;

  constructor(
    private route: Router,
    private tutorialService: TutorialService
  ) { }

  ngOnInit() {
    this.$tutorialNamesIdsAndCategories = this.tutorialService.getAllTutNamesIdsAndCats();
  }

  public navigateToTutorial(id: String): void {
    this.route.navigateByUrl("tutorial/" + id);
  }

}
