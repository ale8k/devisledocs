import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TutorialComponent } from "./tutorial.component";
import { TutorialRoutingModule } from "./tutorial-routing.module";
import { ViewTutorialModule } from "./view-tutorial/view-tutorial.module";

@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    ViewTutorialModule
  ]
})
export class TutorialModule { }
