import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewTutorialComponent } from "./view-tutorial/view-tutorial.component";
import { SectionComponent } from "./view-tutorial/section/section.component";

const routes: Routes = [
  { path: "tutorial/:tutId", component: ViewTutorialComponent,
      children: [
        { path: ":sectionName", component: SectionComponent, outlet: "section" }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
