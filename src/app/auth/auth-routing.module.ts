import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    //como este modulo es para usar lazyload el path debe ir vacio
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
        pathMatch: "FULL"
      },
      {
        path: "registro",
        component: RegistroComponent,
        pathMatch: "FULL"
      },
      {
        path: "**",
        redirectTo: "login",
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule { }
