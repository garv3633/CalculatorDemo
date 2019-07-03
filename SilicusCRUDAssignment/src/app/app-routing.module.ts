import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'view/:id', component: ViewComponent, canActivate: [AuthGuardService] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
      { path: 'password', component: PasswordComponent, canActivate: [AuthGuardService] }
    ]
  },
  { path: '**', redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
