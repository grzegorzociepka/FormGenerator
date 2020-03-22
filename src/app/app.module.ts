import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldLabelComponent } from './components/field-label/field-label.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TextAreaFieldComponent } from './components/text-area-field/text-area-field.component';
import { DateFieldComponent } from './components/date-field/date-field.component';
import { EmailFieldComponent } from './components/email-field/email-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TelFieldComponent } from './components/tel-field/tel-field.component';
import { RangeFieldComponent } from './components/range-field/range-field.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldLabelComponent,
    InputFieldComponent,
    TextAreaFieldComponent,
    DateFieldComponent,
    EmailFieldComponent,
    SelectFieldComponent,
    CheckboxFieldComponent,
    NumberFieldComponent,
    TelFieldComponent,
    RangeFieldComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
