import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from '../../containers/dynamic-form/dynamic-form.component';
import {FormButtonComponent} from '../../containers/dynamic-form/components/form-button/form-button.component';
import {FormInputComponent} from '../../containers/dynamic-form/components/form-input/form-input.component';
import {FormSelectComponent} from '../../containers/dynamic-form/components/form-select/form-select.component';
import {DynamicFieldDirective} from '../../containers/dynamic-form/components/dynamic-field.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ]
})
export class DynamicFormModule { }
