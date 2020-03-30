import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldType} from '../model/field-type.enum';


@NgModule({
  exports: [
    CommonModule
  ],
  imports: [CommonModule]
})

export class SharedModule {

}
const dynamicComponentImportsMap = {
  [FieldType.checkbox]: () => import('./checkbox-field/checkbox-field.component'),
  [FieldType.date]: () => import('./date-field/date-field.component'),
  [FieldType.email]: () => import('./email-field/email-field.component'),
  [FieldType.number]: () => import('./number-field/number-field.component'),
  [FieldType.range]: () => import('./range-field/range-field.component'),
  [FieldType.select]: () => import('./select-field/select-field.component'),
  [FieldType.tel]: () => import('./tel-field/tel-field.component'),
  [FieldType.text]: () => import('./input-field/input-field.component'),
  [FieldType.textarea]: () => import('./text-area-field/text-area-field.component')
}
