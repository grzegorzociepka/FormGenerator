import {LocalStorage} from '../model/Storage';

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
    const docs: string[] = JSON.parse(localStorage.getItem('docKeys'));
    docs.push(key);
    localStorage.setItem('docKeys', docs.toString());
  }

  private generateId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }
}
