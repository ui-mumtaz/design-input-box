import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { InputRefDirective } from './custom-input/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
