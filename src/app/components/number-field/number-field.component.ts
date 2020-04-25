import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [NumberFieldComponent],
  imports: [SharedModule, AppModule]
})

class NumberFieldModule {
}
