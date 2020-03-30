import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldLabelComponent } from './components/field-label/field-label.component';
import { FormComponent } from './components/form/form.component';
import {DynamicComponentLoaderDirective} from './components/dynamic-component-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    FieldLabelComponent,
    FormComponent,
    DynamicComponentLoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
