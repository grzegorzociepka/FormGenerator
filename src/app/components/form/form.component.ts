import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {DynamicComponentConfig} from '../../model/DynamicComponentConfig';
import {FieldType} from '../../model/field-type.enum';
import {SharedModule} from '../SharedModule';
import {InputFieldComponent} from '../input-field/input-field.component';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends DynamicComponentBaseComponent {

  fieldsInForm: Field[];

}

@NgModule({
  declarations: [FormComponent],
  imports: [SharedModule]
})

class FormModule {
}
