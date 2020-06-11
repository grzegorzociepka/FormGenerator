import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormModule} from './modules/dynamic-form/dynamic-form.module';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormCreatorComponent,
    DocumentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
