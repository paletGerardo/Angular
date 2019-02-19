import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("servicion funcionando");
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAKabRg7C0pUEZ2YApbjU5_aPsiuGev19Q7dZNI6ahihDVeGZu3Vx_PGdd_ZBrlZZNAFv45zyQFOICWV28'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this .getQuery('browse/new-releases/')
                .pipe( map(data=> data['albums'].items )); // funcion flecha corta
  }

  getArtista(termino: string){

    return this .getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map(data=>{
                    return data['artists'].items; // funcion flecha larga
                }));
  }

}
