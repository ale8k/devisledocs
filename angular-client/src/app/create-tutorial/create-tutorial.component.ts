import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
@Component({
  selector: "create-tutorial",
  templateUrl: "./create-tutorial.component.html",
  styleUrls: ["./create-tutorial.component.scss"]
})
export class CreateTutorialComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      tutorialName: "",
      sections: this.formBuilder.array([])
    });
  }

  public get sectionForms(): FormArray {
    return this.form.get("sections") as FormArray;
  }

  public addSectionForm(): void {
    const section = this.formBuilder.group({
      sectionName: ""
    });

    this.sectionForms.push(section);
  }

  public removeSectionForm(sectionIndex): void {
    this.sectionForms.removeAt(sectionIndex);

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
