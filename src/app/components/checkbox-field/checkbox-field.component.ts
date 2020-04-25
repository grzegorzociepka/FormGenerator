import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})

export class CheckboxFieldComponent extends DynamicComponentBaseComponent {

}

@NgModule({
  declarations: [CheckboxFieldComponent],
  imports: [SharedModule, AppModule]
})

class CheckboxFieldModule {
}
