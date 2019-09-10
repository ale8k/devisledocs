import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    private apiService: ApiService
  ) { }

  /**
   * Get our tutorial based on tut id passed in activatedRoute
   */
  ngOnInit() {
    this.activatedRoute.params.subscribe(id => {
      console.log(id.tutId);
      this.$tutorial = this.apiService.getTutorialById(id.tutId as String);
    });
  }

}
