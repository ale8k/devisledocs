import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ViewTutorialComponent } from "./view-tutorial/view-tutorial.component";

@NgModule({
  declarations: [
    HomeComponent,
    ViewTutorialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
