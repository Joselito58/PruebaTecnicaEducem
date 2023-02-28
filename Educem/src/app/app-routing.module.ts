import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CohetesComponent } from './pages/cohetes/cohetes.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { LanzamientoComponent } from './pages/lanzamiento/lanzamiento.component';

const routes: Routes = [
  {path:'home',pathMatch:'full', component:HomeComponent},
  {path: 'cohetes',component:CohetesComponent},
  {path: 'lanzamientos',component:LanzamientosComponent},
  {path: 'lanzamientos/:id',component:LanzamientoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
