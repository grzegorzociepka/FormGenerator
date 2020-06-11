import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentsListComponent} from './components/documents-list/documents-list.component';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import {FormCreatorComponent} from './components/form-creator/form-creator.component';

const routes: Routes = [
  { path: '', component: DocumentsListComponent },
  { path: 'document/:id', component: DynamicFormComponent },
  { path: 'createDocument', component: FormCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
