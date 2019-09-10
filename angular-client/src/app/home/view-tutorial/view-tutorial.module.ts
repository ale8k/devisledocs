import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewTutorialComponent } from "./view-tutorial.component";
import { SectionComponent } from "./section/section.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ViewTutorialComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ViewTutorialModule { }
