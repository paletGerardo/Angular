import {Component, Input, OnInit} from '@angular/core';
import {HeroesService, Heroe} from "../../services/heroes.service";
import {Router} from "@angular/router";
import {any} from "codelyzer/util/function";



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService, private router: Router ) {

  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(index:number){
    // console.log('/heroe/' + index);
    this.router.navigate(['/hero', index] );
  }

}
