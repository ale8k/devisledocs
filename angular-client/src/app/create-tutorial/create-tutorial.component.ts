import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "create-tutorial",
  templateUrl: "./create-tutorial.component.html",
  styleUrls: ["./create-tutorial.component.scss"]
})
export class CreateTutorialComponent implements OnInit {

  /**
   * Local field to store our form state
   */
  public tutorialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  /**
   * Initialises our form [into a parent group]
   */
  public ngOnInit(): void {
    this.tutorialForm = this.fb.group({
      tutorialName: "",
      sections: this.fb.array([])
    });
  }

  /**
   * A getter to reference the sections FormArray property within our parent FormGroup
   */
  get sectionsForms(): FormArray {
    return this.tutorialForm.controls.sections as FormArray;
  }

  /**
   * Appends a new section FormGroup to our parent FormGroups sections FormArray
   */
  public addSection(): void {
    const section = this.fb.group({
      sectionName: "",
      sectionDetails: this.fb.array([])
    });

    this.sectionsForms.push(section);
  }

  /**
   * Take the index from the *ngFor for our sections FormArray and remove
   * that section FormGroup at that index
   * @param i Section index
   */
  public removeSection(i) {
    this.sectionsForms.removeAt(i);
  }

  /**
   * Gets section FormGroup at index i in sections FromArray,
   * then accesses the sectionDetails FormArray within the section FormGroup
   * and appends the new details FormGroup into it
   * @param i Section index
   */
  public addDetail(i): void {
    const details = this.fb.group({
      detailHeader: "",
      detailText: ""
    });

    const sectionDetails = this.sectionsForms.controls[i].get("sectionDetails") as FormArray;

    sectionDetails.push(details);
  }

  /**
   * Gets the section index, accesses that section FormGroup then uses
   * the .get() / alternative to controls.Property to get the sectionDetails FormArray
   *
   * Because we then know at section i, we have detail index j, we can remove
   * detail j at index i
   * @param i Section index
   * @param j Detail index
   */
  public removeDetail(i, j): void {
    const section = this.sectionsForms.controls[i].get("sectionDetails") as FormArray;
    section.removeAt(j);
  }

  public getDataFromForm(): void {
    this.sendDataToAPI();
  }

  /*
   * NOTE: Angular http.post() if not passed responseType option, defaults to JSON
   * Had a fucking nightmare figuring this out lol.
   */
  private sendDataToAPI(): void {
    this.http.post("http://127.0.0.1:5000/tutorials", this.tutorialForm.value, {
      responseType: "text"
    }).subscribe(d => console.log(d));

  }

}
