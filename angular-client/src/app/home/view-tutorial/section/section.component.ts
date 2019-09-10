import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TutorialService } from "src/app/shared/services/tutorial.service";

@Component({
  selector: "section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {

  public $currentSection;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorialService: TutorialService
  ) { }

  ngOnInit() {
    console.log("section init");
    this.activatedRoute.params.subscribe(d => {
      this.$currentSection = this.tutorialService.getCurrentSection(d.sectionName);
    });

  }

}
