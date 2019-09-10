import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ITutorial } from "src/app/shared/models/ITutorial";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "view-tutorial",
  templateUrl: "./view-tutorial.component.html",
  styleUrls: ["./view-tutorial.component.scss"]
})
export class ViewTutorialComponent implements OnInit {
  public $tutorial: Observable<ITutorial>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(id => {
      this.$tutorial = this.apiService.getTutorialById(id.tutId as String);
    });
  }

  public navigateToSection(tutId, sectionName) {
    this.route.navigate(["/tutorial/", tutId, {
      outlets: {
        section: sectionName
      }
    }]);
  }


}
