import {FieldType} from './field-type.enum';

export interface DynamicComponentConfig {
  content: DynamicComponentConfig[];
  type: FieldType;
  name: string;
}
export interface TestInterface {
  type: string;
  name: string;
  required: boolean;
  predefinedValue?: string;
}
