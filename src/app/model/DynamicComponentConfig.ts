import {FieldType} from './field-type.enum';

export interface DynamicComponentConfig {
  content: DynamicComponentConfig[];
  type: FieldType;
  name: string;
}
