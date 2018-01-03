import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/index';
import { AuthGuard } from './_guards/index';
import {HomeComponent} from './home/home.component';
const appRoutes: Routes = [
   
    { path:'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path:'login', component:LoginComponent },    
    { path:'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);