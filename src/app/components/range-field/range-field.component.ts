import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';
import {SelectFieldComponent} from '../select-field/select-field.component';

@Component({
  selector: 'app-range-field',
  templateUrl: './range-field.component.html',
  styleUrls: ['./range-field.component.scss']
})

export class RangeFieldComponent extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [RangeFieldComponent],
  imports: [SharedModule, AppModule]
})

class RangeFieldModule {
}
