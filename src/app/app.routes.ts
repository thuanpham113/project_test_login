import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginCombackComponent } from './login-comback/login-comback.component';
import { NgModule } from '@angular/core';
import { MaterialRequestComponent } from './material-request/material-request.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-comback',
        component: LoginCombackComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'material',
        component: MaterialRequestComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }