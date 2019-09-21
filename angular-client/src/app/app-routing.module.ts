import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorialComponent } from "./tutorial/tutorial.component";

const routes: Routes = [
  {
    path: "",
    component: TutorialComponent
  },
  {
    path: "create-tutorial",
    loadChildren: () => import("./create-tutorial/create-tutorial.module").then(m => m.CreateTutorialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
