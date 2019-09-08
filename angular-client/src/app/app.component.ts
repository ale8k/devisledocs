import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "./shared/services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  public ngOnInit(): void {
    this.apiService.getAllTutorials();
  }

  public apiCall() {
    this.apiService.getAllTutorials();
  }

}
