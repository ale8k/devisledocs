import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTutorials(): void {
    this.http.get<any>("http://127.0.0.1:5000/tutorials").subscribe(data => {
      console.log(data);
    });
  }
}
