import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  loading:boolean;

  paises: any[] =[];

  constructor(private http: HttpClient){
    this.loading = true;

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any)=>{
        this.paises= data;
        this.loading = false;
        console.log(this.paises);
    });
  }

  /*constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
    });

  }*/

  // este ejemplo es con rest Countries




}
