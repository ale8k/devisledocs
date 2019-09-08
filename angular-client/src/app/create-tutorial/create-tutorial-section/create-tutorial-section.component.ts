import { Component, OnInit } from "@angular/core";

@Component({
  selector: "create-tutorial-section",
  templateUrl: "./create-tutorial-section.component.html",
  styleUrls: ["./create-tutorial-section.component.scss"]
})
export class CreateTutorialSectionComponent implements OnInit {

  private sectionDetails: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  public generateSectionDetails(): void {
    this.sectionDetails.push(1);
  }

}
