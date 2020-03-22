import { Component, OnInit } from '@angular/core';
import {FieldType} from '../../model/field-type.enum';
import {Field} from '../../model/field';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent implements OnInit, Field {
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {}

}
