import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentLoaderDirective} from './dynamic-component-loader.directive';


@NgModule({
  declarations: [DynamicComponentLoaderDirective],
  exports: [
    CommonModule,
    DynamicComponentLoaderDirective
  ],
  imports: [CommonModule]
})

export class SharedModule {

}

