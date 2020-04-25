import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})

export class EmailFieldComponent extends DynamicComponentBaseComponent {

}

@NgModule({
  declarations: [EmailFieldComponent],
  imports: [SharedModule, AppModule]
})

class EmailFieldModule {
}

