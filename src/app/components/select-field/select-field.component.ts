import {Component, NgModule, OnInit} from '@angular/core';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {SharedModule} from '../SharedModule';
import {AppModule} from '../../app.module';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})

export class SelectFieldComponent extends DynamicComponentBaseComponent {

}

@NgModule({
  declarations: [SelectFieldComponent],
  imports: [SharedModule, AppModule]
})

class SelectFieldModule {
}
