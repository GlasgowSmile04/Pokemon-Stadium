import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokedex/2/';

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }
}
