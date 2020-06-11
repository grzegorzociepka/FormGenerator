import {FieldConfig} from './field-config.interface';

export interface LocalStorage {
  saveDocument(doc: string): void;
  loadDocument(key: string): FieldConfig[];
  getDocuments(): string[];
}
