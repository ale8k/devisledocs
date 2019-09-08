import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateTutorialComponent } from "./create-tutorial.component";

const routes: Routes = [
  {
    path: "",
    component: CreateTutorialComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CreateTutorialRoutingModule { }
