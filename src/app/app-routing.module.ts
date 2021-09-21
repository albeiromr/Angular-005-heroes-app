import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes:Routes = [
  {
    path: "auth",
    //implementando lazy load 
    loadChildren: () => import("./auth/auth.module").then( module => module.AuthModule)
  },
  {
    path: "heroes",
    //implementando lazy load 
    loadChildren: () => import("./heroes/heroes.module").then( module => module.HeroesModule)
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
