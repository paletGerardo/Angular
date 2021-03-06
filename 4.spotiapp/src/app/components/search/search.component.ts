import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor(private  spotify: SpotifyService) { }

  buscar(termino: string){
    console.log(termino);
    this.spotify.getArtista(termino)
      .subscribe(data=>{
        // @ts-ignore
        console.log(data.artists.items);
        // @ts-ignore
        this.artistas = data.artists.items;
      })
  }

}
