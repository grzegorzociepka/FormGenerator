import { Component, OnInit } from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';

@Component({
  selector: 'app-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss']
})
export class TextAreaFieldComponent implements OnInit, Field {

  name: string;
  label: string;
  type: FieldType;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  render(): void {
   console.log('This is TextAreaField');
  }

}
