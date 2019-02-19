import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input () paises: any[] = [];

  constructor( private router: Router) { }

  verPais(pais: any){
    this.router.navigate(['/artist', pais.name]);
  }
}
