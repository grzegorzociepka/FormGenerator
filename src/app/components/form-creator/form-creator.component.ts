import {Component, OnChanges, OnInit} from '@angular/core';
import {FieldConfig} from '../../model/field-config.interface';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocStorage} from '../../services/LocStorage';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss']
})
export class FormCreatorComponent implements OnInit {

  document: FieldConfig[] = [];
  form: FormGroup;
  types: string[] = ['input', 'select', 'email'];

  constructor(private fb: FormBuilder, private storage: LocStorage) { }

  get options() {
    return this.form.get('options') as FormArray;
  }

  ngOnInit(): void {
      this.document.push({label: 'Submit', name: 'submit', type: 'button'});

      this.form = this.fb.group({
        name: ['', Validators.required],
        label: ['', Validators.required],
        placeholder: [''],
        value: [''],
        type: ['input', Validators.required],
        options: this.fb.array([
          this.fb.control('')
        ])
      });
  }

  addOption(event) {
    event.preventDefault();
    event.stopPropagation();
    this.options.push(this.fb.control(''));
  }

  onSubmit() {
    this.document.unshift(this.form.value);
    this.form.reset();
  }

  saveDocument() {
    this.storage.saveDocument(JSON.stringify(this.document));
    this.form.reset();
    this.document = [];
  }
}
