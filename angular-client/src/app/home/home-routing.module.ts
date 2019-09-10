import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewTutorialComponent } from "./view-tutorial/view-tutorial.component";

const routes: Routes = [
  { path: "tutorial/:tutId", component: ViewTutorialComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
