import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../model/field-config.interface';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  document: FieldConfig[] = [];

  constructor() { }

  ngOnInit(): void {
      this.document.push({label: 'Submit', name: 'submit', type: 'button'});
  }



}
