import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: "create-tutorial",
  templateUrl: "./create-tutorial.component.html",
  styleUrls: ["./create-tutorial.component.scss"]
})
export class CreateTutorialComponent implements OnInit {

  public tutorialForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.tutorialForm = this.fb.group({
      tutorialName: "",
      sections: this.fb.array([])
    });

    console.log(this.sectionsForms);
    console.log(this.tutorialForm.controls.sections[0]);
  }

  get sectionsForms(): FormArray {
    return this.tutorialForm.controls.sections as FormArray;
  }

  public addSection(): void {
    const section = this.fb.group({
      sectionName: "",
      sectionDetails: this.fb.array([])
    });

    this.sectionsForms.push(section);
  }

  public removeSection(i) {
    this.sectionsForms.removeAt(i);
  }

  public addDetail(i): void {
    const details = this.fb.group({
      detailHeader: "",
    });
    const section = this.sectionsForms.controls[i].get("sectionDetails") as FormArray;

    section.push(details);
    console.log(this.sectionsForms);
    console.log(this.tutorialForm.value);
  }

}






/*
  {
    "tutorialName": "Name",
      "sections": [
        {
          "sectionName": "Section name",
          "sectionDetails": [
            {
              "detailHeader": "Header name",
              "detailImages": ["base 64"],
              "detailText": "TITS"
            }
          ]
        },
      ]
  }
*/

// get data from form
// this.form.valueChanges.subscribe(console.log);
