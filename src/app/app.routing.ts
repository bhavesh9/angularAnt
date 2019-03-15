import { Component } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const Routes: Routes = [
    { 
        path: '', redirectTo: 'login', pathMatch: 'full' 
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    }
]
export const appRoutes = RouterModule.forRoot(Routes);