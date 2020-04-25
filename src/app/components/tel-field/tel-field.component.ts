import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-tel-field',
  templateUrl: './tel-field.component.html',
  styleUrls: ['./tel-field.component.scss']
})
export class TelFieldComponent  extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [TelFieldComponent],
  imports: [SharedModule, AppModule]
})

class TelFieldModule {
}
