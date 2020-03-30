import {Field} from './field';

export interface DynamicComponentConfig {
  content: DynamicComponentConfig[];
  type: Field;
}
