import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'menu-app';

  categorias: any[] = [];
  productos: any[] = [];
  // imageUrlArray: any[] = [1, 2, 3,4,5,6,7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  productosActuales: any[] = [];
  categoriaActual= '0';
  index = 0;
  mostrarLista: boolean = false;
  listaDePedidos: any[] = [];
  mostrarGracias:boolean = false;
  precioTotal: number = 0.00;

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8090/rest/categorias')
      .subscribe((data: any) => {
        this.categorias = data;
        // console.log(this.categorias);
      });

    this.http.get('http://localhost:8090/rest/productos')
      .subscribe((data: any) => {
        this.productos = data;
        // console.log(this.productos);
      });
  }

  cambiarCategoria(id: string) {
    this.index = 0; // reinicio la variable index para cada cambio de categoria
    this.categoriaActual = id; // cambio la categoria para solicitar los productos
    this.productosActuales = []; //productos segun la categoruia
    for (let producto of this.productos) { // cargo los productos de la categoria actuales
      if (producto.idCategoria == this.categoriaActual ){
        this.productosActuales.push(producto);
      // console.log(producto)
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

  ngOnInit(): void {
  }

  agregarEnLista ( nombre, precio, id) {
    this.precioTotal = 0;
    precio = parseInt(precio);
    this.listaDePedidos.push({
      id:id,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    });
    for(var i=0 ; i <= this.listaDePedidos.length ; i++){
      this.precioTotal += (this.listaDePedidos[i].precio * this.listaDePedidos[i].cantidad);
    }
  };

  agregarCantidad(id){
    this.precioTotal=0;
    this.listaDePedidos[id].cantidad ++;
    for(var i=0 ; i <= this.listaDePedidos.length ; i++){
      this.precioTotal += (this.listaDePedidos[i].precio * this.listaDePedidos[i].cantidad);
    }
  };

  quitarCantidad(id){
    if(this.listaDePedidos[id].cantidad > 1){ //pregunto si el producto cargado no esta repetido
      this.listaDePedidos[id].cantidad --, // si es mayor se le puede restar uno
        this.precioTotal -= this.listaDePedidos[id].precio //
    }else{
      this.listaDePedidos[id].cantidad = 1 //si es menor que uno, lo reinicia
    }
  };

    quitarDeLista(index){
      this.listaDePedidos.splice(index, 1);
      if (this.listaDePedidos.length <= 0){
        this.precioTotal = 0;
      }
    }

}

