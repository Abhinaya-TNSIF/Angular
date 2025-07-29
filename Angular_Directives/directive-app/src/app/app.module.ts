import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextColorDirective } from './text-color.directive';  // Import the custom directive

@NgModule({
  declarations: [
    AppComponent,
    TextColorDirective  // Declare the custom directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
