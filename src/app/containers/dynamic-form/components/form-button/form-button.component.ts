import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../../../model/field';
import {FieldConfig} from '../../../../model/field-config.interface';


@Component({
  selector: 'form-button',
  styleUrls: ['./form-button.component.scss'],
  template: `
    <div
      class="dynamic-field form-button"
      [formGroup]="group">
      <button
        mat-raised-button
        [disabled]="config.disabled"
        type="submit">
        {{ config.label }}
      </button>
    </div>
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
