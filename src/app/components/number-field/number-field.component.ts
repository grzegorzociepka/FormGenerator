import { Component, OnInit } from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent implements OnInit, Field {
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {}

}
