import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

import { AgregarComponent } from "./pages/agregar/agregar.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HeroesHomeComponent } from "./pages/heroes-home/heroes-home.component";
import { ListadoComponent } from "./pages/listado/listado.component";

const heroesRoutes: Routes = [
    {
        //como este modulo es para usar lazyload el path debe ir vacio
        path: "",
        component: HeroesHomeComponent,
        children:[
            {
                path: "listado",
                component: ListadoComponent,
                pathMatch: "FULL"
            },
            {
                path: "agregar",
                component: AgregarComponent,
                pathMatch: "FULL"
            },
            {
                path: "editar/:id",
                component: AgregarComponent,
                pathMatch: "FULL"
            },
            {
                path: "buscar",
                component: BuscarComponent,
                pathMatch: "FULL"
            },
            {
                path: ":id",
                component: HeroeComponent,
                pathMatch: "FULL"
            },
            {
                path: "**",
                redirectTo: "listado"
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild( heroesRoutes )
    ],
    exports:[
        RouterModule
    ]
})

export class HeroesRoutingModule {}