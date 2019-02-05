import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Heroe, HeroesService} from "../../../services/heroes.service";

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: []
})
export class BuscarHeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  consulta:string = '';

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
          this.heroes = this.heroesService.buscarHeroe(params['consulta']);
          this.consulta = params['consulta'];

        })
  }

}
