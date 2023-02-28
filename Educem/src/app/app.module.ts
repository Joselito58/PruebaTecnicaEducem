import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { CohetesComponent } from './pages/cohetes/cohetes.component';
import { LanzamientoComponent } from './pages/lanzamiento/lanzamiento.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LanzamientosComponent,
    CohetesComponent,
    LanzamientoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
