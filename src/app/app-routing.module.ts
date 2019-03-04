import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login',
    loadChildren: './pages/home1/home1.module#Home1PageModule' },
  {
    path: 'inside',
    loadChildren: './pages/inside/inside.module#InsidePageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'home1', loadChildren: './pages/home1/home1.module#Home1PageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
