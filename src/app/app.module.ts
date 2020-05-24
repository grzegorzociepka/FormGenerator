import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldLabelComponent } from './components/field-label/field-label.component';
import {SharedModule} from './components/SharedModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldLabelComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    FieldLabelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
