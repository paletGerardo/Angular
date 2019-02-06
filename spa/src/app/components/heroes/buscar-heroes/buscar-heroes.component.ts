import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Heroe, HeroesService} from "../../../services/heroes.service";

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: []
})
export class BuscarHeroesComponent implements OnInit {

  heroe: any = {};
  heroes:Heroe[]= [];
  consulta:string;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
          this.heroes = this.heroesService.buscarHeroe(params['consulta']);
          this.consulta = params['consulta'];
          console.log(this.heroes);

        })
  }

  verHeroe(index:number){
    this.router.navigate(['/hero', index] );
  }

}
