import { Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login-component/login-component';
import { SignupComponent } from '../authentication/signup-component/signup-component';
import { Dashboard } from '../features/dashboard/dashboard';
import { authGuard } from '../services/auth-guard';


export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },

];
