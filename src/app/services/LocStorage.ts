import {LocalStorage} from '../model/Storage';
import {Injectable} from '@angular/core';
import {FieldConfig} from '../model/field-config.interface';

@Injectable(
  {providedIn: 'any'}
)
export class LocStorage implements LocalStorage {
  getDocuments(): string[] {
    return JSON.parse(localStorage.getItem('docKeys'));
  }

  loadDocument(key: string): FieldConfig[] {
    return JSON.parse(localStorage.getItem(key));
  }

  saveDocument(doc: string): string {
    const key = this.generateId();
    localStorage.setItem(key, doc);
    this.updateKeyList(key);
    return key;
  }

  updateDocument(key: string, doc: string): void {
      localStorage.setItem(key, doc);
  }

  private updateKeyList(key: string): void {
    let docs = JSON.parse(localStorage.getItem('docKeys'));
    if(docs === null){
      localStorage.setItem('docKeys', '[]');
      docs = JSON.parse(localStorage.getItem('docKeys'));
    }

    docs.push(key);
    localStorage.setItem('docKeys', JSON.stringify(docs));
  }

  private generateId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }
}
