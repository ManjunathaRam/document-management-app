import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngestionRoutingModule } from './ingestion-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IngestionRoutingModule,
    MatTableModule
  ]
})
export class IngestionModule { }
