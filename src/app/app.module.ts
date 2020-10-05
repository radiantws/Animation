import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobeComponent } from './globe/globe.component';
import { ParticalBackgroundComponent } from './partical-background/partical-background.component';
import { WavesComponent } from './waves/waves.component';
import { SphereComponent } from './sphere/sphere.component';
import { NgParticlesModule } from 'ng-particles';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    ParticalBackgroundComponent,
    WavesComponent,
    SphereComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
