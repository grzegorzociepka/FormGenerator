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
      content: [
        {
          type: FieldType.text,
          content: []
        },
        {
          type: FieldType.text,
          content: []
        }
      ],

    };
  }
}
