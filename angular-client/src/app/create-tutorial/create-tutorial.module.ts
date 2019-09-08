import { NgModule } from "@angular/core";
import { CreateTutorialComponent } from "./create-tutorial.component";
import { CreateTutorialRoutingModule } from "./create-tutorial-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CreateTutorialComponent
  ],
  imports: [
    CommonModule,
    CreateTutorialRoutingModule
  ]
})
export class CreateTutorialModule { }
