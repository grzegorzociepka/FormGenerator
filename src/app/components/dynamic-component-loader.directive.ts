import {FieldType} from '../model/field-type.enum';
import {ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {Field} from '../model/field';

const dynamicComponentImportsMap = {
  [FieldType.checkbox]: () => import('./checkbox-field/checkbox-field.component'),
  [FieldType.date]: () => import('./date-field/date-field.component'),
  [FieldType.email]: () => import('./email-field/email-field.component'),
  [FieldType.number]: () => import('./number-field/number-field.component'),
  [FieldType.range]: () => import('./range-field/range-field.component'),
  [FieldType.select]: () => import('./select-field/select-field.component'),
  [FieldType.tel]: () => import('./tel-field/tel-field.component'),
  [FieldType.text]: () => import('./input-field/input-field.component'),
  [FieldType.textarea]: () => import('./text-area-field/text-area-field.component')
}

@Directive({
  selector: '[appDynamicComponentLoader]'
})
export class DynamicComponentLoaderDirective {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appDynamicComponentLoader(dynamicComponentConfig: DynamicComponentConfig) {
    this.loadComponent(dynamicComponentConfig);
  }

  private loadComponent(dynamicComponentConfig: DynamicComponentConfig) {
    this.resolveCmpClass<Field>(dynamicImportsMap[dynamicComponentConfig.type]).then(cmpClass => {
      const cmpFactory = this.componentFactoryResolver.resolveComponentFactory(cmpClass);
      const cmpRef = this.viewContainerRef.createComponent(cmpFactory);
      (cmpRef.instance as Field).dynamicComponentConfigs = dynamicComponentConfig.content;
    });
  }

  private resolveCmpClass<T>(importFn: () => any): Promise<Type<T>> {
    return importFn().then(module => {
      const cmpClass = Object.values(module).find(val => val.hasOwnProperty('ɵcmp'));
      if (!cmpClass) {
        throw new Error('No exported component found!');
      }
      return cmpClass;
    });
  }
}
