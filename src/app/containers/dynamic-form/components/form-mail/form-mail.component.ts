import { Component } from '@angular/core';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-mail',
  templateUrl: './form-mail.component.html',
  styleUrls: ['./form-mail.component.scss']
})
export class FormMailComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

}
