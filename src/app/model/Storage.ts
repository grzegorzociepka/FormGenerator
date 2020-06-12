import {FieldConfig} from './field-config.interface';

export interface LocalStorage {
  saveDocument(doc: string): void;
  removeDocument(doc: string): void;
  updateDocument(key: string, doc: string): void;
  loadDocument(key: string): FieldConfig[];
  getDocuments(): string[];
}
