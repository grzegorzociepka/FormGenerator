import {Component, NgModule, OnInit} from '@angular/core';
import {FieldType} from '../../model/field-type.enum';
import {Field} from '../../model/field';
import {SharedModule} from '../SharedModule';

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
