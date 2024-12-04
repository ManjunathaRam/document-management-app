import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})

export class UserManagementComponent {
  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ];

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}


