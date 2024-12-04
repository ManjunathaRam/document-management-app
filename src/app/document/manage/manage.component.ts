import { Component } from '@angular/core';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  documents = [
    { name: 'Document1.pdf', size: '1.2MB', uploadedAt: '2024-12-01' },
    { name: 'Document2.pdf', size: '500KB', uploadedAt: '2024-12-01' }
  ];

  deleteDocument(index: number) {
    this.documents.splice(index, 1);
  }
}
