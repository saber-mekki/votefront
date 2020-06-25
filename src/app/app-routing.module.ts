import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ListeComponent } from './liste/liste.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vote', component: VoteComponent},
  {path: 'list', component: ListeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
