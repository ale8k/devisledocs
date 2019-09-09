import { NgModule } from "@angular/core";
import { CreateTutorialComponent } from "./create-tutorial.component";
import { CreateTutorialRoutingModule } from "./create-tutorial-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CreateTutorialComponent
  ],
  imports: [
    CommonModule,
    CreateTutorialRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateTutorialModule { }
