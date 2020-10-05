import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobeComponent } from './globe/globe.component';
import { ParticalBackgroundComponent } from './partical-background/partical-background.component';
import { SphereComponent } from './sphere/sphere.component';
import { WavesComponent } from './waves/waves.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "globe", component: GlobeComponent },
  { path: "particals", component: ParticalBackgroundComponent },
  { path: "sphere", component: SphereComponent },
  { path: "home", component: HomeComponent },
  { path: "waves", component: WavesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
