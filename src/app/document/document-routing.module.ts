import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {path: 'upload', component: UploadComponent},
  {path: 'manage', component: ManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
