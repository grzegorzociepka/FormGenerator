import { Component } from '@angular/core';
import {DynamicComponentConfig} from './model/DynamicComponentConfig';
import {FieldType} from './model/field-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormGenerator';
  dynamicComponentConfig = this.getDynamicComponentConfig();

  getDynamicComponentConfig(): DynamicComponentConfig {
    return {
      type: FieldType.form,
      name: 'FORM',
      content: [
        {
          type: FieldType.checkbox,
          content: [],
          name: 'checkbox'
        },
        {
          type: FieldType.text,
          content: [],
          name: 'textInput'
        },
        {
          type: FieldType.number,
          content: [],
          name: 'Input number'
        },
        {
          type: FieldType.textarea,
          content: [],
          name: 'Input textarea'
        },
        {
          type: FieldType.email,
          content: [],
          name: 'Input email'
        },
        {
          type: FieldType.date,
          content: [],
          name: 'Input date'
        },
        {
          type: FieldType.range,
          content: [],
          name: 'Input range'
        },
        {
          type: FieldType.select,
          content: [],
          name: 'Input select'
        }
      ],

    };
  }
}
