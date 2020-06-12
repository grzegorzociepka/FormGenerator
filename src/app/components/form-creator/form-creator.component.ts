import {Component, OnChanges, OnInit} from '@angular/core';
import {FieldConfig} from '../../model/field-config.interface';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  document: FieldConfig[] = [];
  form: FormGroup;
  productFormGroup: FormArray;

  constructor(private fb: FormBuilder) { }

  get options() {
    return this.form.get('options') as FormArray;
  }

  ngOnInit(): void {
      this.document.push({label: 'Submit', name: 'submit', type: 'button'});

      this.form = this.fb.group({
        name: ['', Validators.required],
        label: ['', Validators.required],
        type: ['input', Validators.required],
        options: this.fb.array([
          this.fb.control('')
        ])
      });
  }

  addOption() {
    this.options.push(this.fb.control(''));
  }

  onSubmit() {
    const newField = {};
    console.log(this.form.value);
    this.document.unshift(this.form.value);
    this.form.reset();
  }

}
