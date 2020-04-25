import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent extends DynamicComponentBaseComponent  {
}

@NgModule({
  declarations: [DateFieldComponent],
  imports: [SharedModule, AppModule]
})

class DateFieldModule {
}
