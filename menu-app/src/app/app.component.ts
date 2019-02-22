import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IImage} from "ng-simple-slideshow";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-app';

  categorias: any[] =[];
  productos: any[] =[];
  imageUrlArray: any[] = [1, 2, 3,4,5,6,7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  imageUrls: (string | IImage) [] = [
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    { url: 'assets/img/productos/1.png', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  height: string = '200px';
  minHeight: string = '250px';
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = false;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#79ABD3';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '50%';
  buttonOption:any;
  msj:any;



  constructor(private http: HttpClient){

    this.http.get('http://localhost:8090/rest/categorias')
      .subscribe((data: any)=>{
        this.categorias= data;
      });

    this.http.get('http://localhost:8090/rest/productos')
      .subscribe((data: any)=>{
        this.productos= data;
        console.log(this.productos);
      });

  }


}

