import {Component, NgModule, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';
import {TelFieldComponent} from '../tel-field/tel-field.component';

@Component({
  selector: 'app-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss']
})

export class TextAreaFieldComponent extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [TextAreaFieldComponent],
  imports: [SharedModule, AppModule]
})

class TextAreaFieldModule {
}
