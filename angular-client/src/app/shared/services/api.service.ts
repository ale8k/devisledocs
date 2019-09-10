import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITutorial } from "../models/ITutorial";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTutorials(): Observable<Array<ITutorial>> {
    return this.http.get<Array<ITutorial>>("http://127.0.0.1:5000/tutorials/all");
  }

  public getAllTutNamesAndIds() {

  }

}
