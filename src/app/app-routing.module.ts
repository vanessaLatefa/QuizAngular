import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { IndexComponent } from './index/index.component';


export const routes: Routes = [
  { path : '', redirectTo : 'index', pathMatch : 'full'},
  { path : 'home', component : HomeComponent, 
    children  : [
    { path : 'register', component : RegisterComponent },
    { path : 'login', component : LoginComponent, 
    children : [
        { path : 'portal', component : PortalComponent, 
          children : [
          { path : 'create-quiz', component : CreateQuizComponent},
          { path : 'display-quiz', component : DisplayQuizComponent}
        ]}
    ]},
  { path : 'index', component : IndexComponent } 
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
