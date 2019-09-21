import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavigationBarComponent } from "./shared/components/navigation-bar/navigation-bar.component";
import { TutorialModule } from "./tutorial/tutorial.module";
import { EditTutorialComponent } from "./edit-tutorial/edit-tutorial.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TutorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
