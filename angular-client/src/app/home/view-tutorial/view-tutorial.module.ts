import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewTutorialComponent } from "./view-tutorial.component";
import { SectionComponent } from "./section/section.component";
import { RouterModule } from "@angular/router";
import { MatExpansionModule } from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    ViewTutorialComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    RouterModule
  ]
})
export class ViewTutorialModule { }
