import { Component } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.css'
})
export class QuestionAnswerComponent {
  question = '';
  answer = '';
  relevantDocs = [
    { excerpt: 'Lorem ipsum dolor sit amet...', source: 'Document1.pdf' },
    { excerpt: 'Ut enim ad minim veniam...', source: 'Document2.pdf' }
  ];

  askQuestion() {
    // Simulate API response
    this.answer = 'This is a sample answer to your question.';
  }
}
