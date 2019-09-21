import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TutorialService } from "../shared/services/tutorial.service";

@Component({
  selector: "tutorial",
  templateUrl: "./tutorial.component.html",
  styleUrls: ["./tutorial.component.scss"]
})
export class TutorialComponent implements OnInit {

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
