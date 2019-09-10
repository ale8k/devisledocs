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

  public getAllTutorialNamesAndIds() {
    return this.http.get(("http://127.0.0.1:5000/tutorials/all/names&ids"));
  }

  public getTutorialById(id: String) {
    return this.http.get(("http://127.0.0.1:5000/tutorials/get-by-id/" + id));
  }

  /*
   * NOTE: Angular http.post() if not passed responseType option, defaults to JSON
   * Had a fucking nightmare figuring this out lol.
   */
  public saveTutorial(tutorial: ITutorial) {
    this.http.post("http://127.0.0.1:5000/tutorials/save-tutorial", tutorial, {
      responseType: "text"
    }).subscribe(d => console.log(d));
  }

}
