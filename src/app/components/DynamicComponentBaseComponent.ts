import {Component, Input} from '@angular/core';
import {DynamicComponentConfig} from '../model/DynamicComponentConfig';
import {FieldType} from '../model/field-type.enum';

@Component({template: ''})
export abstract class DynamicComponentBaseComponent {
  @Input() dynamicComponentConfigs: DynamicComponentConfig[];
  name: string;
  label: string;
  type: FieldType;
  value: string;
}
