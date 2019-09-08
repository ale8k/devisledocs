import { NgModule } from "@angular/core";
import { CreateTutorialComponent } from "./create-tutorial.component";
import { CreateTutorialRoutingModule } from "./create-tutorial-routing.module";
import { CreateTutorialSectionComponent } from "./create-tutorial-section/create-tutorial-section.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CreateTutorialComponent,
    CreateTutorialSectionComponent
  ],
  imports: [
    CommonModule,
    CreateTutorialRoutingModule
  ]
})
export class CreateTutorialModule { }
