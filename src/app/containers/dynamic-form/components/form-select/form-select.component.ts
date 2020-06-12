import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../../../model/field';

@Component({
  selector: 'form-select',
  styleUrls: ['./form-select.component.scss'],
  template: `
    <div
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      {{config.value}}
      <select [formControlName]="config.name" >
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options" [selected]="config.value === option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent implements Field {
  config;
  group: FormGroup;
}
