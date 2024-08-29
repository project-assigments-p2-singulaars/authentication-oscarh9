import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RegisterComponent } from './register/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [authGuard]
    },
    {
        path: "register",
        component: RegisterComponent,

    }
];