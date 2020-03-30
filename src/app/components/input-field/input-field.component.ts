import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FieldType} from '../../model/field-type.enum';
import {Field} from '../../model/field';
import {SharedModule} from '../SharedModule';
import {DynamicComponentConfig} from '../../model/DynamicComponentConfig';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})

@NgModule({
  declarations: [InputFieldComponent],
  imports: [SharedModule]
})
export class InputFieldComponent implements OnInit, Field {
  @Input() dynamicComponentConfigs: DynamicComponentConfig[];
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {

  }

}
