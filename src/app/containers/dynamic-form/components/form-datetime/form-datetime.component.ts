import { Component } from '@angular/core';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-datetime',
  templateUrl: './form-datetime.component.html',
  styleUrls: ['./form-datetime.component.scss']
})
export class FormDatetimeComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


}
