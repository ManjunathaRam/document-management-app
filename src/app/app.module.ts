import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { DocumentUploadComponent } from './document/document-upload/document-upload.component';
import { DocumentManagementComponent } from './document/document-management/document-management.component';
import { IngestionComponent } from './ingestion/ingestion/ingestion.component';
import { IngestionManagementComponent } from './ingestion/ingestion-management/ingestion-management.component';
import { QuestionAnswerComponent } from './question-&-answer/question-answer/question-answer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    UserManagementComponent,
    DocumentUploadComponent,
    DocumentManagementComponent,
    IngestionComponent,
    IngestionManagementComponent,
    QuestionAnswerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
