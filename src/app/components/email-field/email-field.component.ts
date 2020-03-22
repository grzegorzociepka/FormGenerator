import { Component, OnInit } from '@angular/core';
import {FieldType} from '../../model/field-type.enum';
import {Field} from '../../model/field';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent implements OnInit, Field {
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {}

}
