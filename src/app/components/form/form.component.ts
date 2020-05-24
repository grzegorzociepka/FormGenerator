import {Component, ComponentFactoryResolver, Input, NgModule, OnInit, ViewContainerRef} from '@angular/core';
import {FormArray, FormBuilder, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {LocStorage} from '../../services/LocStorage';
import {DynamicComponentConfig, TestInterface} from '../../model/DynamicComponentConfig';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})



export class FormComponent implements OnInit {

  constructor(private locStorage: LocStorage, private formBuilder: FormBuilder) {

  }

  @Input() formConfig: string;

  dynamicForm = this.formBuilder.group({
    values: new FormArray([])
  });

  get formControls() { return this.dynamicForm.controls; }
  get formArray() { return this.formControls.values as FormArray; }

  onSubmit() {

    if(this.dynamicForm.controls.values.status !== 'INVALID') {
      this.locStorage.saveDocument(this.getValues());
    } else {
      alert("WRONG");
    }

  }

  getValues(): string {
    return JSON.stringify(this.dynamicForm.value.values.map(x => { return {
      Name: x.Name,
      Value: x.Value
    }}));
  }

  ngOnInit(): void {
    this.formConfig = '[{"name":"Text","type":"text", "required":true},{"name":"checkbox","type":"checkbox", "required":true},{"name":"tel","type":"tel", "required":false},{"name":"email","type":"email", "required":false},{"name":"number","type":"number", "required":false},{"name":"textarea","type":"textarea", "required":false},{"name":"range","type":"range", "required":false}]';
    const config: TestInterface[] = JSON.parse(this.formConfig);

    this.formArray.push(this.formBuilder.group({
      Name: 'FormName',
      InputType: 'text',
      Value: ''
    }));

    config.forEach(setting => {
        this.formArray.push(this.formBuilder.group({
          Name: setting.name,
          InputType: setting.type,
          Value: setting.type === 'checkbox' ? false : '',
          Required: setting.required
        }));
      });

  }

}

