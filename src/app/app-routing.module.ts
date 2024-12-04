import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import ('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then(m=>m.DocumentModule)
  },
  {
    path: 'ingestion',
    loadChildren: () => import('./ingestion/ingestion.module').then(m=>m.IngestionModule)
  },
  {
    path: 'question-answer',
    loadChildren: () => import('./question-&-answer/question-answer/question-answer.module').then(m=> m.QuestionAnswerModule)
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
