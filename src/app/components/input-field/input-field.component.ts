import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FieldType} from '../../model/field-type.enum';
import {Field} from '../../model/field';
import {SharedModule} from '../SharedModule';
import {DynamicComponentConfig} from '../../model/DynamicComponentConfig';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})


export class InputFieldComponent extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [InputFieldComponent],
  imports: [SharedModule]
})

class InputFieldModule {
}
