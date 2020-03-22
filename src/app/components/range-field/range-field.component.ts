import { Component, OnInit } from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';

@Component({
  selector: 'app-range-field',
  templateUrl: './range-field.component.html',
  styleUrls: ['./range-field.component.scss']
})
export class RangeFieldComponent implements OnInit, Field {
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {}

}
