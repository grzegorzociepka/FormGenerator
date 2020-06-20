import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../../../model/field';

@Component({
  selector: 'form-select',
  styleUrls: ['./form-select.component.scss'],
  templateUrl: './form-select.component.html'
})
export class FormSelectComponent implements Field {
  config;
  group: FormGroup;
}
