import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SharedModule} from '../SharedModule';
import {DynamicComponentBaseComponent} from '../DynamicComponentBaseComponent';
import {FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends DynamicComponentBaseComponent {

  onSubmit(e: any) {
    // .preventDefault();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i< e.length - 1; i++){

      if(e.type === 'checkbox'){
        console.log(e[i].name, e[i].checked);
      }
      else{
        console.log(e[i].name, e[i].value);
      }
    }

  }

}

@NgModule({
  declarations: [FormComponent],
  imports: [SharedModule, FormsModule]
})

class FormModule {
}
