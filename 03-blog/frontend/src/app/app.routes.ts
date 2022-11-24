import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
   }  
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}