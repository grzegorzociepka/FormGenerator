import { Component, OnInit } from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';

@Component({
  selector: 'app-tel-field',
  templateUrl: './tel-field.component.html',
  styleUrls: ['./tel-field.component.scss']
})
export class TelFieldComponent implements OnInit, Field {
  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {}

}
