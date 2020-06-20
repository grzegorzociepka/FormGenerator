import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['./form-input.component.scss'],
  templateUrl: './form-input.component.html'
})

export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
