import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayQuizComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CreateQuizComponent,
    HomeComponent,
    PortalComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
