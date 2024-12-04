import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    UploadComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class DocumentModule { }
