import { Component, OnInit } from '@angular/core';
import {LocStorage} from '../../services/LocStorage';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  docs: string[];

  constructor(private storage: LocStorage) { }

  ngOnInit(): void {
    this.docs = this.storage.getDocuments();
  }

}
