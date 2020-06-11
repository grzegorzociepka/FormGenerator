import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentsListComponent} from './components/documents-list/documents-list.component';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: DocumentsListComponent },
  { path: 'document/:id', component: DynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
