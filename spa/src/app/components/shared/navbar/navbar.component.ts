import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from "../../../services/heroes.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {



  constructor( private heroesService: HeroesService, private router:Router) {

  }

  ngOnInit() {
  }

  buscarHeroe(consulta: string){
    console.log(consulta);
    let id:number = this.heroesService.buscarHeroe(consulta);
    console.log("Heroe devuelto " + id);
    this.mostrarHeroe(id)
  }

  mostrarHeroe(id:number){
    this.router.navigate(['hero/busqueda', id]);
  }

}
