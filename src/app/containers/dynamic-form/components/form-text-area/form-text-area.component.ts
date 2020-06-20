import { Component, OnInit } from '@angular/core';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  styleUrls: ['./form-text-area.component.scss']
})
export class FormTextAreaComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
