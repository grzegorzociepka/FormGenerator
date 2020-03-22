import {FieldType} from './field-type.enum';

export interface Field {
  name: string;
  label: string;
  value: string;
  type: FieldType;
  (): void;
}
