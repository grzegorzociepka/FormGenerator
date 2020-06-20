import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormModule} from './modules/dynamic-form/dynamic-form.module';
import { FormCreatorComponent } from './components/form-creator/form-creator.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
    DynamicFormModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
