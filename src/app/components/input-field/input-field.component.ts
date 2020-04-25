import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SharedModule} from '../SharedModule';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {AppModule} from '../../app.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})


export class InputFieldComponent extends DynamicComponentBaseComponent {

}

@NgModule({
  declarations: [InputFieldComponent],
  imports: [SharedModule, AppModule, FormsModule]
})

class InputFieldModule {
}
