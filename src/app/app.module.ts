import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldLabelComponent } from './components/field-label/field-label.component';
import {SharedModule} from './components/SharedModule';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FieldLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  exports: [
    FieldLabelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
