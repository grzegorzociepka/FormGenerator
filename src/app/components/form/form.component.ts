import { Component, OnInit } from '@angular/core';
import {Field} from '../../model/field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  fieldsInForm: Field[];
  constructor() { }

  ngOnInit(): void {
  }

  getValue(): void {
    console.log('Return values');
  }

}
