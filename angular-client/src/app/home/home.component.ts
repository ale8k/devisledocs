import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/services/api.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public $tutorials;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.$tutorials = this.apiService.getAllTutorials();
  }

}
