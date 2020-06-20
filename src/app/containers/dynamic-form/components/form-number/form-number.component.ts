import { Component } from '@angular/core';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss']
})
export class FormNumberComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


}
