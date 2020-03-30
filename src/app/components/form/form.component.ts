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

    this.fieldsInForm.push();
    this.render();
  }

  getValue(): void {
    console.log('Return values');
  }

  render(): void {
    this.fieldsInForm.forEach(x => x.render());
  }

}
