import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HeroesRoutingModule } from "./heroes-routing.module";

import { AgregarComponent } from "./pages/agregar/agregar.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HeroesHomeComponent } from "./pages/heroes-home/heroes-home.component";
import { ListadoComponent } from "./pages/listado/listado.component";

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
})
export class HeroesModule {}