import { Component, OnInit } from "@angular/core";

@Component({
  selector: "create-tutorial",
  templateUrl: "./create-tutorial.component.html",
  styleUrls: ["./create-tutorial.component.scss"]
})
export class CreateTutorialComponent implements OnInit {

  // TODO: Make section data model (interface)
  private sections: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  public generateSection(): void {
    this.sections.push(1);
  }

}
