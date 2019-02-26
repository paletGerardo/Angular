import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IImage} from "ng-simple-slideshow";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-app';

  categorias: any[] = [];
  productos: any[] = [];
  // imageUrlArray: any[] = [1, 2, 3,4,5,6,7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  actual: boolean = true;
  productosActuales: any[] = [];
  categoriaActual= '0';
  index = 0;

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8090/rest/categorias')
      .subscribe((data: any) => {
        this.categorias = data;
        console.log(this.categorias);
      });

    this.http.get('http://localhost:8090/rest/productos')
      .subscribe((data: any) => {
        this.productos = data;
        console.log(this.productos);
      });

  }

  cambiarCategoria(id: string) {
    this.index = 0; // reinicio la variable index para cada cambio de categoria
    this.categoriaActual = id; // cambio la categoria para solicitar los productos
    this.productosActuales = []; //productos segun la categoruia
    for (let producto of this.productos) { // cargo los productos de la categoria actuales
      if (producto.idCategoria == this.categoriaActual ){
        this.productosActuales.push(producto);
      console.log(producto)
      }
    }
  }

  cambiarSlide(direccion: string) {

    if (this.index <= 0 && direccion == 'left'){
      this.index = this.productosActuales.length;
    }

    if (direccion == 'left') {
      this.index--;
    }

    if (direccion == 'rigth'){
      this.index ++;
      if (this.index >= this.productosActuales.length){
        this.index = 0;
      }
    }
  }

}

