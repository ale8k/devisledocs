import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ITutorial } from "src/app/shared/models/ITutorial";
import { TutorialService } from "src/app/shared/services/tutorial.service";

@Component({
  selector: "view-tutorial",
  templateUrl: "./view-tutorial.component.html",
  styleUrls: ["./view-tutorial.component.scss"]
})
export class ViewTutorialComponent implements OnInit {
  public $tutorial: Observable<ITutorial>;

  panelOpenState = false; // testing expansion module

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private tutorialService: TutorialService
  ) { }

  ngOnInit() {
    console.log("view-tutorial init");
    this.activatedRoute.params.subscribe(id => {
      this.$tutorial = this.tutorialService.getTutById(id);
      this.tutorialService.currentTutorial = this.$tutorial;
    });
  }

  public navigateToSection(tutId, sectionName): void {
    this.route.navigate(["/tutorial/", tutId, {
      outlets: {
        section: sectionName
      }
    }]);
  }

}
