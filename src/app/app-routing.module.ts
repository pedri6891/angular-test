import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import ObraRoutes from "./modules/Obra/routes.js";
import {ObraListComponent} from "./modules/Obra/obra-list/obra-list.component";
import {ObraCreateComponent} from "./modules/Obra/obra-create/obra-create.component";


const router: Routes = [
  {path:'obras', component:ObraListComponent},
  {path:'obras/create', component:ObraCreateComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
