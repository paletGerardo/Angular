import {Component} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroeComponent} from "./components/heroe/heroe.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/hero/:id', component: HeroeComponent},
  {path: 'hero/:id', component: HeroeComponent},
  {path: 'hero/busqueda/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
