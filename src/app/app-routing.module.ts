import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  //{path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  //{path:'mainpage', component:MainpageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  //{ path: '**', redirectTo: '/home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
