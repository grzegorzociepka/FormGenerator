import {LocalStorage} from '../model/Storage';
import {Injectable} from '@angular/core';

@Injectable(
  {providedIn: 'any'}
)
export class LocStorage implements LocalStorage {
  getDocuments(): string[] {
    return JSON.parse(localStorage.getItem('docKeys'));
  }

  loadDocument(key: string): string {
    return localStorage.getItem(key);
  }

  saveDocument(doc: string): void {
    const key = this.generateId();
    localStorage.setItem(key, doc);
    this.updateKeyList(key);
  }

  private updateKeyList(key: string): void{
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
