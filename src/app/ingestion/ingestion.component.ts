import { Component } from '@angular/core';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrl: './ingestion.component.css'
})
export class IngestionComponent {
  ingestionStatus = [
    { document: 'Document1.pdf', status: 'Completed' },
    { document: 'Document2.pdf', status: 'In Progress' }
  ];
}
