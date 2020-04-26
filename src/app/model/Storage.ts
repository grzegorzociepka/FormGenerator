export interface LocalStorage {
  saveDocument(doc: string): void;
  loadDocument(key: string): string;
  getDocuments(): string[];
}
