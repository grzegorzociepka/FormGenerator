import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../../model/field';
import {FormButtonComponent} from './form-button/form-button.component';
import {FormInputComponent} from './form-input/form-input.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {FieldConfig} from '../../../model/field-config.interface';
import {FormMailComponent} from './form-mail/form-mail.component';
import {FormTextAreaComponent} from './form-text-area/form-text-area.component';
import {FormNumberComponent} from './form-number/form-number.component';
import {FormDatetimeComponent} from './form-datetime/form-datetime.component';


const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  email: FormMailComponent,
  textArea: FormTextAreaComponent,
  number: FormNumberComponent,
  datetime: FormDatetimeComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
